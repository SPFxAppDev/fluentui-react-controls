import * as React from "react";
import styles from "./Card.module.scss";
import { cssClasses } from '@spfxappdev/utility';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Card: React.FunctionComponent<ICardProps> = (props: ICardProps) => {
  console.log(styles);
  return <div {...props} className={cssClasses(styles["card"], props.className)}>{props.children}</div>;
};
