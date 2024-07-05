import * as React from "react";
import { ColorPicker, IColorPickerProps, getColorFromString, IColor, Callout, Label } from "@fluentui/react";
import "./InlineColorPicker.scss";
import { isset, isNullOrEmpty, isFunction } from "@spfxappdev/utility";

export interface IInlineColorPickerProps extends Omit<IColorPickerProps, "color"> {
  label?: string;
  defaultColor?: string | IColor;
  color?: string | IColor;
}

interface IInlineColorPickerState {
  isPickerVisible: boolean;
  currentColor: IColor | string;
}

export class InlineColorPicker extends React.Component<IInlineColorPickerProps, IInlineColorPickerState> {
  public state: IInlineColorPickerState = {
    isPickerVisible: false,
    currentColor: this.props.color || this.props.defaultColor || '#000000'
  };

  private targetElement: HTMLDivElement = null;

  componentDidUpdate(prevProps: Readonly<IInlineColorPickerProps>, prevState: Readonly<IInlineColorPickerState>, snapshot?: any): void {
    if (prevProps.color !== this.props.color) {
      this.setState({
        currentColor: this.props.color
      })
    }
  }

  public render(): React.ReactElement<IInlineColorPickerProps> {
    let bc: IColor = null;

    if (typeof this.state.currentColor != "string") {
      bc = this.state.currentColor;
    } else {
      bc = getColorFromString(this.state.currentColor);
    }

    const customCss: React.CSSProperties = {
      background: `rgba(${bc.r}, ${bc.g}, ${bc.b}, ${bc.a / 100})`,
    };

    return (
      <>
        {!isNullOrEmpty(this.props.label) && <Label>{this.props.label}</Label>}
        <div
          className={"inline-color-picker"}
          ref={(r) => {
            if (isset(r)) {
              this.targetElement = r;
            }
          }}
          onClick={() => {
            this.setState({ isPickerVisible: true });
          }}
        >
          <div className={"inline-color-picker-inner"} style={customCss}></div>
        </div>
        {this.state.isPickerVisible && (
          <Callout
            target={this.targetElement}
            onDismiss={() => {
              this.setState({ isPickerVisible: false });
            }}
          >
            <ColorPicker
              {...this.props}
              color={this.state.currentColor}
              onChange={(ev: any, color: IColor) => {
                this.setState({ currentColor: color });

                if (isFunction(this.props.onChange)) {
                  this.props.onChange(ev, color);
                }
              }}
            />
          </Callout>
        )}
      </>
    );
  }
}
