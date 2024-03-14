import * as React from "react";
import styles from "./Card.module.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardImageProps {
  imageSrc: string;
}

export const CardImage: React.FunctionComponent<ICardImageProps> = (props) => {
  const css = cssClasses;
  return (
    <div className={css(styles["card--img"])}>
      <div className={css(styles["card--img-container"])}>
        <img src={props.imageSrc} />
      </div>
      {props.children}
    </div>
  );
};
