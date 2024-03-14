import * as React from "react";
import styles from "./Card.module.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardActionProps {
  vertical?: boolean;
}

export const CardAction: React.FunctionComponent<ICardActionProps> = (
  props = { vertical: false }
) => {
  const css = cssClasses;

  const additionalCss = {};

  additionalCss[styles["card--actions-vertical"]] = props.vertical;

  return (
    <div className={css(styles["card--actions"], additionalCss)}>
      {props.children}
    </div>
  );
};
