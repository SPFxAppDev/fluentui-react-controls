import * as React from "react";
import { cssClasses } from '@spfxappdev/utility';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Card: React.FunctionComponent<ICardProps> = (props: ICardProps) => {
  return <div {...props} className={cssClasses("card", props.className)}>{props.children}</div>;
};
