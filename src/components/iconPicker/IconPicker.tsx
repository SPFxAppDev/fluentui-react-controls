import * as React from "react";
import { Icon } from "@fluentui/react";
import { allIcons } from "./availableIcons";
import { cssClasses, isFunction } from "@spfxappdev/utility";
import { Autocomplete, IAutocompleteProps } from "../autocomplete";
import { List, ListItem } from "../list";
import { initializeIcons } from '@fluentui/react/lib/Icons';

export interface IIconPickerProps extends Omit<IAutocompleteProps, "onUpdated" | "onChange"> {
    enableDialogPicker?: boolean;
    dialogPickerIconName?: string;
    onIconChanged?(iconName: string): void;
}

interface IIconPickerState {
    currentValue: string;
}

export class IconPicker extends React.Component<IIconPickerProps, IIconPickerState> {
    public state: IIconPickerState = {
        currentValue: this.props.value || this.props.defaultValue || '',
    };

    public static defaultProps: IIconPickerProps = {
        dialogPickerIconName: "GroupedList",
        enableDialogPicker: true,
        showSuggestionsOnFocus: false,
        minValueLength: 0,
    };

    public constructor(props: IIconPickerProps) {
        super(props);
        initializeIcons();
    }

    public render(): React.ReactElement<IIconPickerProps> {
        return (
            <>
                <Autocomplete
                    {...this.props}
                    onChange={(ev: any, name: string) => {
                        this.setState({
                            currentValue: name
                        });

                        if (isFunction(this.props.onIconChanged)) {
                            this.props.onIconChanged(name);
                        }
                    }}
                    className={cssClasses("iconpicker", this.props.className)}
                    value={this.state.currentValue}
                    onLoadSuggestions={(newValue: string) => {
                        this.setState({
                            currentValue: newValue,
                        });
                    }}
                    dismissOnClickInside={true}
                    onRenderSuggestions={() => {
                        return this.renderSuggesstionsFlyout();
                    }}
                    iconProps={{
                        iconName: this.state.currentValue,
                    }}
                    flyoutClassName={cssClasses("suggestion-flyout", this.props.flyoutClassName)}
                />
            </>
        );
    }

    private renderSuggesstionsFlyout(): JSX.Element {
        return (
            <List className={"suggestion"} separator={true}>
                {allIcons
                    .Where((icon) => icon.StartsWith(this.state.currentValue))
                    .map((iconName: string): JSX.Element => {
                        return (
                            <ListItem
                                clickable={true}
                                key={`Icon_${iconName}`}
                                onClick={() => {
                                    this.setState({
                                        currentValue: iconName,
                                    });

                                    if (isFunction(this.props.onIconChanged)) {
                                        this.props.onIconChanged(iconName);
                                    }
                                }}
                                className={"suggestion-item"}
                            >
                                <Icon iconName={iconName} />
                                <span>{iconName}</span>
                            </ListItem>
                        );
                    })}
            </List>
        );
    }
}
