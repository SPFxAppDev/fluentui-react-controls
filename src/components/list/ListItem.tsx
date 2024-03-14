import * as React from "react";
import styles from "./List.module.scss";
import { cssClasses, isFunction } from '@spfxappdev/utility';

export interface IListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    clickable?: boolean;
    hoverEffect?: boolean;
}

export const ListItem: React.FunctionComponent<IListItemProps> = (props: IListItemProps) => {

    const listItemDefaultProps: Partial<IListItemProps> = {
        hoverEffect: true
    };

    const mergedProps = { ...listItemDefaultProps, ...props };


    const additionalCssClasses: Record<string, boolean> = {
    };

    additionalCssClasses[styles["list-item--clickable"]] = mergedProps.clickable;
    additionalCssClasses[styles["list-item--hoverable"]] = mergedProps.hoverEffect;
    // additionalCssClasses[styles["list--separator"]] = props.separator;

    return <div {...mergedProps}
        className={cssClasses(styles["list-item"], additionalCssClasses, mergedProps.className)}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (!mergedProps.clickable) {
                return;
            }

            if (isFunction(mergedProps.onClick)) {
                mergedProps.onClick(event);
            }
        }}
    >
        {mergedProps.hoverEffect &&
            <div className={cssClasses(styles["hoverhelper"])} tabIndex={-1}></div>
        }
        {mergedProps.children}
    </div>;
};
