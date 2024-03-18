import * as React from "react";
import styles from "./Card.module.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardSectionProps {
  className?: string;
}

export const CardSection: React.FunctionComponent<ICardSectionProps> = (
  props
) => {
  const css = cssClasses;
  return <div className={css(styles["card--section"], props.className)}>{props.children}</div>;
};
