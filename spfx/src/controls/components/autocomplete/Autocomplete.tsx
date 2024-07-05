import * as React from "react";
import {
  TextField,
  ITextFieldProps,
  ITextField,
  TextFieldBase,
} from "@fluentui/react";
import {
  isNullOrEmpty,
  cssClasses,
  getDeepOrDefault,
  isFunction,
  randomString,
} from "@spfxappdev/utility";
import styles from "./Autocomplete.module.scss";


export interface IAutocompleteProps
  extends Omit<ITextFieldProps, "autocomplete" | "componentRef"> {
  showSuggestionsOnFocus?: boolean;
  minValueLength?: number;
  onLoadSuggestions?(newValue: string): void;
  onRenderSuggestions?(inputValue: string): JSX.Element;
  textFieldRef?(
    fluentUITextField: ITextField,
    autocompleteComponent: Autocomplete,
    htmlInput?: HTMLInputElement
  ): void;

  //NEW
  hideFlyoutRef?(hideFlyOutMethod: () => void): void;
  showFlyoutRef?(showFlyOutMethod: () => void): void;
  dismissOnClickInside?: boolean;
  customDismissCheckMethod?(ev: MouseEvent, containerId: string): boolean;
  containerClassName?: string;
  flyoutClassName?: string;
}

interface IAutocompleteState {
  currentValue: string;
  isFlyoutVisible: boolean;
  currentRealTimeValue: string;
}

export class Autocomplete extends React.Component<
  IAutocompleteProps,
  IAutocompleteState
> {
  public state: IAutocompleteState = {
    currentValue: this.props.value || this.props.defaultValue || "",
    isFlyoutVisible: false,
    currentRealTimeValue: this.props.value || this.props.defaultValue || "",
  };

  public static defaultProps: IAutocompleteProps = {
    showSuggestionsOnFocus: false,
    minValueLength: 3,
    dismissOnClickInside: false,
  };

  private textFieldDomElement: HTMLInputElement;

  private userIsTyping: boolean = false;

  private lastValue: string = "";

  private lastTimeoutId: number = -1;

  private autocompleteId: string;

  public constructor(props: IAutocompleteProps) {
    super(props);
    this.autocompleteId = `spfxFluentUIReactControls_Autocomplete_${randomString(
      8
    )}`;
    this.onDismiss = this.onDismiss.bind(this);
  }

  public componentDidMount(): void {
    const showSuggesstionsFlyoutRef = this.showSuggesstionsFlyout.bind(this);
    const hideSuggesstionsFlyoutRef = this.hideSuggesstionsFlyout.bind(this);

    if (isFunction(this.props.showFlyoutRef)) {
      this.props.showFlyoutRef(showSuggesstionsFlyoutRef);
    }

    if (isFunction(this.props.hideFlyoutRef)) {
      this.props.hideFlyoutRef(hideSuggesstionsFlyoutRef);
    }

    document.addEventListener("click", this.onDismiss);
  }

  public componentWillUnmount(): void {
    document.removeEventListener("click", this.onDismiss);
  }

  public render(): React.ReactElement<IAutocompleteProps> {

    return (
      <div className={cssClasses("autocomplete-container", styles["autocomplete-container"], this.props.containerClassName)} id={this.autocompleteId}>
        <TextField
          defaultValue={this.state.currentRealTimeValue}
          value={this.state.currentRealTimeValue}
          {...this.props}
          autoComplete={"off"}
          className={cssClasses(this.props.className)}
          componentRef={(input: ITextField) => {
            this.textFieldDomElement = getDeepOrDefault<HTMLInputElement>(
              input,
              "_textElement.current"
            );

            if (isFunction(this.props.textFieldRef)) {
              this.props.textFieldRef(input, this, this.textFieldDomElement);
            }
          }}
          onFocus={(ev: any) => {
            if (this.props.showSuggestionsOnFocus) {
              this.handleSuggestionListVisibility(this.state.currentValue);
            }

            if (isFunction(this.props.onFocus)) {
              this.props.onFocus(ev);
            }
          }}
          onBlur={(
            ev: React.FocusEvent<
              HTMLInputElement | HTMLTextAreaElement,
              Element
            >
          ) => {
            this.onTextFieldBlur();

            if (isFunction(this.props.onBlur)) {
              this.props.onBlur(ev);
            }
          }}
          onChange={(ev: any, newValue: string) => {
            this.onValueChanged(ev, newValue);
          }}
        />

        {this.renderSuggesstionsFlyout()}
      </div>
    );
  }

  private renderSuggesstionsFlyout(): JSX.Element {
    if (!this.state.isFlyoutVisible) {
      return <></>;
    }

    return (
      <div className={cssClasses(styles["autocomplete-flyout"], "autocomplete-flyout", this.props.flyoutClassName)} tabIndex={0}>
        {isFunction(this.props.onRenderSuggestions) &&
          this.props.onRenderSuggestions(this.state.currentValue)}
      </div>
    );
  }

  private onValueChanged(ev: any, newValue: string): void {
    this.userIsTyping = true;

    this.setState({
      currentRealTimeValue: newValue,
    });

    if (this.lastTimeoutId >= 0) {
      window.clearTimeout(this.lastTimeoutId);
    }

    //Set userIsTyping to false after 150ms
    this.lastTimeoutId = window.setTimeout(() => {
      this.userIsTyping = false;

      //Set a timeout of 150ms and check whether userIsTyping has been set to true again in the meantime
      window.setTimeout(() => {
        this.setState(
          {
            currentValue: newValue,
          },
          () => {
            if (!this.userIsTyping) {
              this.handleSuggestionListVisibility(newValue);
            }
          }
        );
      }, 100);
    }, 150);

    if (isFunction(this.props.onChange)) {
      this.props.onChange(ev, newValue);
    }
  }

  private onTextFieldBlur(): void {
    this.userIsTyping = false;
  }

  private handleSuggestionListVisibility(val: string): void {
    if (isNullOrEmpty(val)) {
      this.hideSuggesstionsFlyout();
      return;
    }

    if (val.length < this.props.minValueLength) {
      this.hideSuggesstionsFlyout();
      return;
    }

    let valueWasChanged = false;

    if (!val.Equals(this.lastValue)) {
      // this.userIsTyping = false;
      valueWasChanged = true;
      this.lastValue = val;
    }

    if (!valueWasChanged) {
      this.showSuggesstionsFlyout();
      return;
    }

    if (this.userIsTyping) {
      return;
    }

    this.showSuggesstionsFlyout();

    if (isFunction(this.props.onLoadSuggestions)) {
      this.props.onLoadSuggestions(val);
    }
  }

  private hideSuggesstionsFlyout(): void {
    this.setState({
      isFlyoutVisible: false,
    });
  }

  private showSuggesstionsFlyout(): void {
    this.setState({
      isFlyoutVisible: true,
    });
  }

  private onDismiss(ev: MouseEvent): void {

    if (isFunction(this.props.customDismissCheckMethod)) {
      const hideFlyOut = this.props.customDismissCheckMethod(ev, this.autocompleteId);

      if (hideFlyOut) {
        this.hideSuggesstionsFlyout();
      }

      return;
    }

    if (isNullOrEmpty(ev)) {
      return;
    }

    if (isNullOrEmpty(ev.target)) {
      return;
    }

    const divElement = document.getElementById(
      this.autocompleteId
    ) as HTMLDivElement;

    if (isNullOrEmpty(divElement)) {
      return;
    }

    const targetTagName: string = ((ev as MouseEvent).target as Node).nodeName;

    let closeFlyout: boolean = false;
    let clickIsInComponent = divElement.contains((ev as MouseEvent).target as Node);

    if (!clickIsInComponent || (clickIsInComponent && this.props.dismissOnClickInside)) {
      closeFlyout = true;
    }
    else if (
      !isNullOrEmpty(targetTagName) &&
      (targetTagName.Equals("a") ||
        targetTagName.Equals("button") ||
        !isNullOrEmpty((ev.target as Element).closest("a, button")))
    ) {
      closeFlyout = true;
    }

    if (!closeFlyout) {
      return;
    }

    this.hideSuggesstionsFlyout();
  }
}

// import * as React from "react";
// import styles from "./Autocomplete.module.scss";
// import { TextField, ITextFieldProps, Callout, ICalloutProps, DirectionalHint, ITextField, TextFieldBase } from "@fluentui/react";
// import { isNullOrEmpty, cssClasses, getDeepOrDefault, isFunction, randomString } from "@spfxappdev/utility";

// export interface IAutocompleteProps extends Omit<ITextFieldProps, "componentRef"> {
//   showSuggestionsOnFocus?: boolean;
//   minValueLength?: number;
//   onLoadSuggestions?(newValue: string): void;
//   onRenderSuggestions?(inputValue: string): JSX.Element;
//   textFieldRef?(fluentUITextField: ITextField, autocompleteComponent: Autocomplete, htmlInput?: HTMLInputElement);
//   onUpdated?(newValue: string);
//   calloutProps?: Omit<ICalloutProps, "hidden" | "target" | "preventDismissOnScroll" | "directionalHint" | "directionalHintFixed" | "isBeakVisible">;
//   hideFlyoutRef?(hideFlyOutMethod: () => void): void;
//   showFlyoutRef?(showFlyOutMethod: () => void): void;
// }

// interface IAutocompleteState {
//   currentValue: string;
//   isFlyoutVisible: boolean;
// }

// export class Autocomplete extends React.Component<IAutocompleteProps, IAutocompleteState> {
//   public state: IAutocompleteState = {
//     currentValue: isNullOrEmpty(this.props.defaultValue) ? "" : this.props.defaultValue,
//     isFlyoutVisible: false,
//   };

//   public static defaultProps: IAutocompleteProps = {
//     showSuggestionsOnFocus: false,
//     minValueLength: 3,
//     calloutProps: {
//       gapSpace: 0,
//     },
//   };

//   private textFieldReference: ITextField;

//   private textFieldDomElement: HTMLInputElement;

//   private userIsTyping: boolean = false;

//   private lastValue: string = "";

//   private onUpdateValueText: string = "";

//   private lastTimeoutId: number = -1;

//   private callOutId: string;

//   public constructor(props: IAutocompleteProps) {
//     super(props);
//     this.callOutId = `spfxFluentUIReactControls_Autocomplete_${randomString(8)}`;
//   }

//   public componentDidMount(): void {
//     const showSuggesstionsFlyoutRef = this.showSuggesstionsFlyout.bind(this);
//     const hideSuggesstionsFlyoutRef = this.hideSuggesstionsFlyout.bind(this);

//     if (isFunction(this.props.showFlyoutRef)) {
//       this.props.showFlyoutRef(showSuggesstionsFlyoutRef);
//     }

//     if (isFunction(this.props.hideFlyoutRef)) {
//       this.props.hideFlyoutRef(hideSuggesstionsFlyoutRef);
//     }
//   }

//   public render(): React.ReactElement<IAutocompleteProps> {
//     return (
//       <>
//         <TextField
//           {...this.props}
//           autoComplete={"off"}
//           className={cssClasses(styles.autocomplete, this.props.className)}
//           componentRef={(input: ITextField) => {
//             this.textFieldReference = input;
//             this.textFieldDomElement = getDeepOrDefault<HTMLInputElement>(input, "_textElement.current");

//             if (isFunction(this.props.textFieldRef)) {
//               this.props.textFieldRef(input, this, this.textFieldDomElement);
//             }
//           }}
//           onFocus={(ev: any) => {
//             if (this.props.showSuggestionsOnFocus) {
//               this.handleSuggestionListVisibility(this.state.currentValue);
//             }

//             if (isFunction(this.props.onFocus)) {
//               this.props.onFocus(ev);
//             }
//           }}
//           onBlur={(ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {

//             const calloutElement = document.getElementById(this.callOutId);

//             if (!isNullOrEmpty(calloutElement) && (ev.relatedTarget === calloutElement || calloutElement.contains(ev.relatedTarget))) {

//               if (isFunction(this.props.onBlur)) {
//                 this.props.onBlur(ev);
//               }

//               return;
//             }

//             this.onTextFieldBlur();

//             if (isFunction(this.props.onBlur)) {
//               this.props.onBlur(ev);
//             }
//           }}
//           onChange={(ev: any, newValue: string) => {
//             this.onValueChanged(ev, newValue);
//           }}
//           defaultValue={this.state.currentValue}
//         />

//         {this.renderSuggesstionsFlyout()}
//       </>
//     );
//   }

//   /*
//   This function can be used to change the value from "outside" via "componentRef" Reference
//   */
//   public updateValue(newValue: string): void {
//     this.onUpdateValueText = newValue;

//     this.setState(
//       {
//         currentValue: newValue,
//       },
//       () => {
//         (this.textFieldReference as TextFieldBase).setState({
//           uncontrolledValue: this.onUpdateValueText,
//         });

//         if (isFunction(this.props.onUpdated)) {
//           this.props.onUpdated(newValue);
//         }
//       }
//     );
//   }

//   private renderSuggesstionsFlyout(): JSX.Element {

//     if (!this.state.isFlyoutVisible) {
//       return <></>;
//     }

//     //TODO: deepClone...
//     const calloutProps = { ...{}, ...this.props.calloutProps };

//     let minWidth: number = getDeepOrDefault<number>(calloutProps, "calloutWidth", -1);

//     if (minWidth <= 0) {
//       minWidth = getDeepOrDefault<number>(this, "textFieldDomElement.parentElement.clientWidth", -1);
//     }

//     if (minWidth > 0) {
//       calloutProps.calloutWidth = minWidth;
//     }

//     return (
//       <Callout
//         {...calloutProps}
//         hidden={!this.state.isFlyoutVisible}
//         directionalHintFixed={true}
//         isBeakVisible={false}
//         id={this.callOutId}
//         target={this.textFieldDomElement.parentElement}
//         onDismiss={(ev?: any) => {
//           this.hideSuggesstionsFlyout();

//           if (isFunction(this.props.calloutProps.onDismiss)) {
//             this.props.calloutProps.onDismiss(ev);
//           }
//         }}
//         preventDismissOnScroll={true}
//         directionalHint={DirectionalHint.bottomCenter}
//       >
//         {isFunction(this.props.onRenderSuggestions) && this.props.onRenderSuggestions(this.state.currentValue)}
//       </Callout>
//     );
//   }

//   private onValueChanged(ev: any, newValue: string): void {
//     this.userIsTyping = true;

//     if (this.lastTimeoutId >= 0) {
//       window.clearTimeout(this.lastTimeoutId);
//     }

//     //Set userIsTyping to false after 150ms
//     this.lastTimeoutId = window.setTimeout(() => {
//       this.userIsTyping = false;

//       //Set a timeout of 150ms and check whether userIsTyping has been set to true again in the meantime
//       window.setTimeout(() => {

//         this.setState({
//           currentValue: newValue
//         }, () => {
//           if (!this.userIsTyping) {
//             this.handleSuggestionListVisibility(newValue);
//           }
//         });

//       }, 100);

//     }, 150);

//     if (isFunction(this.props.onChange)) {
//       this.props.onChange(ev, newValue);
//     }
//   }

//   private onTextFieldBlur(): void {
//     this.userIsTyping = false;
//     window.setTimeout(() => {
//       this.hideSuggesstionsFlyout();
//     }, 150);
//   }

//   private handleSuggestionListVisibility(val: string): void {

//     if (isNullOrEmpty(val)) {
//       this.hideSuggesstionsFlyout();
//       return;
//     }

//     if (val.length < this.props.minValueLength) {
//       this.hideSuggesstionsFlyout();
//       return;
//     }

//     let valueWasChanged = false;

//     if (!val.Equals(this.lastValue)) {
//       // this.userIsTyping = false;
//       valueWasChanged = true;
//       this.lastValue = val;
//     }

//     if (!valueWasChanged) {
//       this.showSuggesstionsFlyout();
//       return;
//     }

//     if (this.userIsTyping) {
//       return;
//     }

//     this.showSuggesstionsFlyout();

//     if (isFunction(this.props.onLoadSuggestions)) {
//       this.props.onLoadSuggestions(val);
//     }
//   }

//   private hideSuggesstionsFlyout(): void {
//     this.setState({
//       isFlyoutVisible: false,
//     });
//   }

//   private showSuggesstionsFlyout(): void {
//     this.setState({
//       isFlyoutVisible: true,
//     });
//   }
// }
