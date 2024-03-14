import * as React from "react";
import styles from "./Card.module.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardImageContentProps {
  showOnBottom?: boolean;
  textCenter?: boolean;
}

export const CardImageContent: React.FunctionComponent<
  ICardImageContentProps
> = (props = { showOnBottom: true }) => {
  const css = cssClasses;
  return (
    <div className={css(styles["card--img-content"])}>
      <div
        className={css({
          "absolute-bottom": props.showOnBottom,
          "absolute-top": !props.showOnBottom,
          "text-center": props.textCenter,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};
