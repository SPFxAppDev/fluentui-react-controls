//ITreeViewProps
import * as React from 'react';
import styles from './TreeView.module.scss';
import { css, Icon } from '@fluentui/react';
import { ITreeItem } from './';

export interface ITreeViewProps {
    className?: string;
    items: ITreeItem[];
    ariaLabel?: string;
    defaultSelectedItemKey?: string;
    expandOnSelect?: boolean;
    onSelected?(item: ITreeItem): void;
}

interface ITreeViewState {
    selectedKey: string;
    expandedItemKeys: string[];
}

export class TreeView extends React.Component<ITreeViewProps, ITreeViewState> {
    public static defaultProps: ITreeViewProps = {
        items: [],
        defaultSelectedItemKey: '',
        expandOnSelect: true,
        ariaLabel: 'Treeview'
    };

    public state: ITreeViewState = {
        selectedKey: this.props.defaultSelectedItemKey,
        expandedItemKeys: []
    };

    public constructor(props: ITreeViewProps) {
        super(props);

        const defaultExpandedItemKeys: string[] = [];
        this.getInitialExpandedKeysNested(defaultExpandedItemKeys, this.props.items);
        this.state.expandedItemKeys = defaultExpandedItemKeys;
    }

    public render(): React.ReactElement<ITreeViewProps> {
        return (
            <div className={css(styles['treeview-container'], this.props.className)}>
                {this.renderTreeList(this.props.items, 1, this.props.ariaLabel)}
            </div>
        );
    }

    private renderTreeList(items: ITreeItem[], level: number, ariaLabel: string): JSX.Element {
        const classNames: string[] = [styles['treeview-list']];
        classNames.push(`level-${level}`);

        const role: string = level == 1 ? 'tree' : 'group';

        return (
            <ul role={role} className={classNames.join(' ')} aria-label={ariaLabel}>
                {items.map((item: ITreeItem): JSX.Element => {
                    return this.renderTreeItem(item, level);
                })}
            </ul>
        );
    }

    private renderTreeItem(item: ITreeItem, level: number): JSX.Element {
        const hasChildren: boolean = typeof item.children === 'object' && item.children.length > 0;
        const isSelected: boolean = item.key === this.state.selectedKey;
        const classNames: string[] = [styles['treeview-list-item']];
        classNames.push(`level-${level}`);

        if (!hasChildren) {
            classNames.push('no-children');
        }

        if (isSelected) {
            classNames.push(styles['treeview-list-item--selected']);
            classNames.push('selected');
        }

        const isExpanded = this.isItemExpanded(item);

        if (isExpanded) {
            classNames.push(styles['treeview-list-item--expanded']);
            classNames.push('expanded');
        }

        const renderIcon: boolean = typeof item.iconProps === 'object';

        const ariaProperties: any = {};

        if (hasChildren) {
            ariaProperties['aria-expanded'] = isExpanded ? 'true' : 'false';
        }

        if (isSelected) {
            ariaProperties['aria-current'] = 'location';
        }

        return (
            <li role='none' className={classNames.join(' ')} key={item.key}>
                <div
                    className={styles['treeview-list-item--container']}
                    role='treeitem'
                    {...ariaProperties}
                    aria-level={level}
                    aria-selected={isSelected ? 'true' : 'false'}
                    tabIndex={isSelected ? '0' : '-1'}
                    onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>): void => {
                        this.onItemKeyDown(event);
                    }}
                >
                    <div>
                        {hasChildren && (
                            <Icon
                                className=''
                                iconName={isExpanded ? 'CaretSolidDown' : 'CaretSolidUp'}
                                // ariaLabel={isExpanded ? "collapseItem" : "expandItem"}
                                onClick={() => {
                                    this.onExpandButtonClick(item);
                                }}
                            />
                        )}
                    </div>
                    <div
                        className='treeview-label'
                        onClick={() => {
                            this.onItemSelected(item);
                        }}
                    >
                        {renderIcon && <Icon {...item.iconProps} />}
                        {item.label}
                    </div>
                </div>
                {isExpanded && this.renderTreeList(item.children, level + 1, item.label)}
            </li>
        );
    }

    private onItemSelected(item: ITreeItem): void {
        const expandedItems: string[] = [...this.state.expandedItemKeys];

        if (this.props.expandOnSelect === true && expandedItems.indexOf(item.key) < 0) {
            expandedItems.push(item.key);
        }

        this.setState({
            selectedKey: item.key,
            expandedItemKeys: expandedItems
        });

        if (typeof this.props.onSelected === 'function') {
            this.props.onSelected(item);
        }
    }

    private onExpandButtonClick(item: ITreeItem): void {
        const expandedItems = [...this.state.expandedItemKeys];

        const itemIndex: number = expandedItems.indexOf(item.key);

        if (itemIndex >= 0) {
            expandedItems.splice(itemIndex, 1);
        } else {
            expandedItems.push(item.key);
        }

        this.setState({
            expandedItemKeys: expandedItems
        });
    }

    private isItemExpanded(item: ITreeItem): boolean {
        const hasChildren: boolean = typeof item.children === 'object' && item.children.length > 0;

        if (!hasChildren) {
            return false;
        }

        // if(this.state.selectedKey === item.key) {
        //     return true;
        // }

        return this.state.expandedItemKeys.indexOf(item.key) >= 0;
    }

    private getInitialExpandedKeysNested(expandedKeys: string[], items: ITreeItem[]): string[] {
        const selectedKey = this.props.defaultSelectedItemKey;

        if (typeof selectedKey !== 'string' || (typeof selectedKey === 'string' && selectedKey.trim().length < 1)) {
            return expandedKeys || [];
        }

        if (typeof items !== 'object') {
            return expandedKeys || [];
        }

        if (items.length < 1) {
            return expandedKeys || [];
        }

        for (let i = 0; i < items.length; i++) {
            const item: ITreeItem = items[i];
            if (this.containsItemKeyNested(item.key, items)) {
                expandedKeys.push(item.key);
                this.getInitialExpandedKeysNested(expandedKeys, item.children);
            }
        }

        return expandedKeys || [];
    }

    private containsItemKeyNested(itemKey: string, items: ITreeItem[]): boolean {
        if (typeof items !== 'object') {
            return false;
        }

        if (items.length < 1) {
            return false;
        }

        for (let i = 0; i < items.length; i++) {
            const item: ITreeItem = items[i];
            if (item.key == itemKey) {
                return true;
            }

            if (this.containsItemKeyNested(itemKey, item.children)) {
                return true;
            }
        }

        return false;
    }

    private onItemKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
        const target = event.currentTarget;
        const key = event.key;

        if (key !== 'Tab') {
            event.preventDefault();
        }

        if (key === 'Up' || key === 'ArrowUp' || key === 'Down' || key === 'ArrowDown') {
            this.onKeyDownOrUpPushed(target, key);
        }

        if (key === 'Right' || key === 'ArrowRight' || key === 'Left' || key === 'ArrowLeft') {
            this.onKeyRightOrLeftPushed(target, key);
        }

        if (key === 'Enter' || key === ' ') {
            (target.querySelector('div.treeview-label') as HTMLDivElement).click();
        }

        if (key === 'Home' || key === 'End') {
            this.onKeyHomeOrEndPushed(target, key);
        }
    }

    private onKeyDownOrUpPushed(target: HTMLElement, key: string): void {
        const allItems = document.querySelectorAll(`ul.${styles['treeview-list']} [role='treeitem']`);

        let nextOrPrevItem = null;
        const isUp = key === 'Up' || key === 'ArrowUp';
        const startIndex = isUp ? 0 : allItems.length - 1;

        for (let i = startIndex; isUp ? i < allItems.length : i >= 0; isUp ? i++ : i--) {
            const item = allItems[i];

            if (item === target) {
                break;
            }

            nextOrPrevItem = item;
        }

        if (nextOrPrevItem) {
            (nextOrPrevItem as HTMLDivElement).focus();
        }
    }

    private onKeyRightOrLeftPushed(target: HTMLElement, key: string): void {
        const isLeft = key === 'Left' || key === 'ArrowLeft';

        const expanded = (target as any).ariaExpanded;
        if (expanded == null) {
            this.onKeyDownOrUpPushed(target, isLeft ? 'Up' : 'Down');
            return;
        }

        const isExpanded = expanded.toLocaleLowerCase() === 'true';

        if (isExpanded && !isLeft) {
            this.onKeyDownOrUpPushed(target, 'Down');
            return;
        }

        const expandIcon = target.querySelector('i');

        if (expandIcon) {
            expandIcon.click(); // expand/collapse tree-node
        }
    }

    private onKeyHomeOrEndPushed(target: HTMLElement, key: string): void {
        const allItems = document.querySelectorAll(`ul.${styles['treeview-list']} [role='treeitem']`);

        const destIndex = key === 'Home' ? 0 : allItems.length - 1;

        const destItem = allItems[destIndex];

        if (destItem) {
            (destItem as HTMLDivElement).focus();
        }
    }
}
