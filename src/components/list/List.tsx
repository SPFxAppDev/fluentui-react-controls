import * as React from "react";
import styles from "./List.module.scss";
import { cssClasses } from '@spfxappdev/utility';

export interface IListProps extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    separator?: boolean;
}

export const List: React.FunctionComponent<IListProps> = (props: IListProps) => {

    const additionalCssClasses: Record<string, boolean> = {
    };

    additionalCssClasses[styles["list--bordered"]] = props.bordered;
    additionalCssClasses[styles["list--separator"]] = props.separator;

    console.log("SSC", props, additionalCssClasses)
    return <div {...props} className={cssClasses(styles["list"], additionalCssClasses, props.className)}>{props.children}</div>;
};
