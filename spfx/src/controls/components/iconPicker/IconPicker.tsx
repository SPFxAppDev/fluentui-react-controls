import * as React from "react";
import styles from "./IconPicker.module.scss";
import { Icon, ITextField } from "@fluentui/react";
import { allIcons } from "./availableIcons";
import { isNullOrEmpty, cssClasses, isFunction } from "@spfxappdev/utility";
import { Autocomplete, IAutocompleteProps } from "../autocomplete";
import { List, ListItem } from "../list";

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
                    className={cssClasses(styles.iconpicker)}
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
                    flyoutClassName={styles["suggestion-flyout"]}
                />
            </>
        );
    }

    private renderSuggesstionsFlyout(): JSX.Element {
        return (
            <List className={styles["suggestion"]} separator={true}>
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
                                className={styles["suggestion-item"]}
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
