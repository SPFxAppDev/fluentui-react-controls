import * as React from 'react';
import styles from './AddNewToolbox.module.scss';
import { cssClasses, isFunction, isNullOrEmpty } from '@spfxappdev/utility';
import { Callout, Icon, TooltipHost, DirectionalHint, ActionButton } from '@fluentui/react';

export interface IAddNewToolboxItem {
    key: string;
    title: string;
    icon: string;
    data?: any;
}

export interface IAddNewToolboxProps {
    items: IAddNewToolboxItem[];
    tooltipText?: string;
    hoverOnly?: boolean;
    onItemClick?(item: IAddNewToolboxItem): void;
    onRenderItem?(item: IAddNewToolboxItem): JSX.Element;
}

interface IAddNewToolboxState {
    showAddNewCallout: boolean;
}

export class AddNewToolbox extends React.Component<IAddNewToolboxProps, IAddNewToolboxState> {

    public static defaultProps: Partial<IAddNewToolboxProps> = {
        tooltipText: "Add new",
        hoverOnly: true,
    }

    private addNewButtonRef: HTMLButtonElement = null;

    public state: IAddNewToolboxState = {
        showAddNewCallout: false
    };

    public render(): React.ReactElement<IAddNewToolboxProps> {
        const callOutVisbileClass: string = styles["active-toolbar"];
        const isToolboxSeparatorVisibleClass = {};
        const showOnlyOnHover = typeof this.props.hoverOnly !== "boolean" ? true : this.props.hoverOnly;
        isToolboxSeparatorVisibleClass[callOutVisbileClass] = !showOnlyOnHover || this.state.showAddNewCallout;

        return (
            <div className={cssClasses(styles["toolbox-container"], isToolboxSeparatorVisibleClass)}>
                <button type="button"
                    aria-haspopup="true"
                    aria-label={this.props.tooltipText}
                    ref={(ref: HTMLButtonElement) => { this.addNewButtonRef = ref }}
                    onClick={() => {

                        const showCallout = this.state.showAddNewCallout ? false : true;

                        this.setState({
                            showAddNewCallout: showCallout
                        });
                    }}>
                    <TooltipHost content={this.props.tooltipText}>
                        <Icon iconName="Add" />
                    </TooltipHost>
                </button>

                {this.renderAddNewCallout()}
            </div>
        )
    }

    private renderAddNewCallout(): JSX.Element {

        if (isNullOrEmpty(this.addNewButtonRef)) {
            return <></>;
        }

        const icon = this.addNewButtonRef.querySelector(".ms-TooltipHost");

        const useCustomRenderMethode = isFunction(this.props.onRenderItem);

        return (
            <>
                <Callout
                    target={icon}
                    className={"toolbox-callout"}
                    hidden={!this.state.showAddNewCallout}
                    directionalHint={DirectionalHint.bottomCenter}
                    onDismiss={() => {
                        this.setState({
                            showAddNewCallout: false
                        });
                    }}
                >
                    <div className='flex-row'>
                        {this.props.items.map((item: IAddNewToolboxItem, index: number): JSX.Element => {
                            return <div key={`AddNewToolboxItem_${item.key}`}>
                                {useCustomRenderMethode && this.props.onRenderItem(item)}
                                {!useCustomRenderMethode &&
                                    <ActionButton
                                        iconProps={{ iconName: item.icon }}
                                        onClick={() => {
                                            this.setState({
                                                showAddNewCallout: false
                                            });

                                            if (isFunction(this.props.onItemClick)) {
                                                this.props.onItemClick(item);
                                            }
                                        }}
                                    >

                                        <div>{item.title}</div>
                                    </ActionButton>
                                }
                            </div>
                        })}
                    </div>
                </Callout>
            </>
        );
    }
}