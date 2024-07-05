import * as React from "react";
import "./Badge.scss";
import { cssClasses } from '@spfxappdev/utility';

export interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Badge: React.FunctionComponent<IBadgeProps> = (props: IBadgeProps) => {
    return <div {...props} className={cssClasses("badge", "items-center", "no-wrap", props.className)}>{props.children}</div>;
};
