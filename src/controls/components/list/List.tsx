import * as React from "react";
import "./List.scss";
import { cssClasses } from '@spfxappdev/utility';

export interface IListProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Applies a default border to the component
     */
    bordered?: boolean;
    /**
     * Applies a separator between contained items
    */
    separator?: boolean;
}

export const List: React.FunctionComponent<IListProps> = (props: IListProps) => {

    const additionalCssClasses: Record<string, boolean> = {
    };

    additionalCssClasses["list--bordered"] = props.bordered;
    additionalCssClasses["list--separator"] = props.separator;

    return <div {...props} className={cssClasses("list", additionalCssClasses, props.className)}>{props.children}</div>;
};
