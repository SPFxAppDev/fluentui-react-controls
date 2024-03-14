import * as React from "react";
import {
  Dropdown,
  IDropdownProps,
  IDropdownOption,
  SelectableOptionMenuItemType,
  ISelectableOption,
  SearchBox,
  ISearchBoxProps,
} from "@fluentui/react";

export interface ISearchableDropDownProps extends IDropdownProps {
  onSearchValueChanged(searchValue: string): void;
  searchboxProps?: Omit<ISearchBoxProps, "onChange" | "onClear" | "onSearch">;
}

interface ISearchableDropDownState {}

export class SearchableDropDown extends React.Component<
  ISearchableDropDownProps,
  ISearchableDropDownState
> {
  public state: ISearchableDropDownState = {};

  public static defaultProps: Partial<ISearchableDropDownProps> = {
    searchboxProps: {
      autoComplete: "false",
      autoFocus: true,
    },
  };

  public render(): React.ReactElement<ISearchableDropDownProps> {
    return (
      <Dropdown
        {...this.props}
        options={this.getOptions()}
        onRenderOption={(
          option?: ISelectableOption,
          defaultRender?: (props?: ISelectableOption) => JSX.Element | null
        ): JSX.Element | null => {
          return this.onRenderOption(option, defaultRender);
        }}
      />
    );
  }

  private onRenderOption(
    option?: ISelectableOption,
    defaultRender?: (props?: ISelectableOption) => JSX.Element | null
  ): JSX.Element | null {
    if (!option) {
      return null;
    }

    if (
      option.itemType === SelectableOptionMenuItemType.Header &&
      option.key === "search"
    ) {
      return (
        <SearchBox
          {...this.props.searchboxProps}
          onChange={(
            ev?: React.ChangeEvent<HTMLInputElement>,
            newValue?: string
          ): void => {
            if (typeof this.props.onSearchValueChanged === "function") {
              this.props.onSearchValueChanged(newValue || "");
            }
          }}
          onSearch={(newValue: string): void => {
            if (typeof this.props.onSearchValueChanged === "function") {
              this.props.onSearchValueChanged(newValue);
            }
          }}
          onClear={() => {
            if (typeof this.props.onSearchValueChanged === "function") {
              this.props.onSearchValueChanged("");
            }
          }}
        />
      );
    }

    if (typeof this.props.onRenderOption === "function") {
      return this.props.onRenderOption(option, defaultRender);
    }

    if (!defaultRender) {
      return null;
    }

    return defaultRender(option);
  }

  private getOptions(): IDropdownOption[] {
    const result: IDropdownOption[] = [];

    result.push({
      key: "search",
      text: "",
      itemType: SelectableOptionMenuItemType.Header,
    });

    return result.concat([...this.props.options]);
  }
}
