import * as React from "react";
import "./Card.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardImageProps {
  imageSrc: string;
  className?: string;
}

export const CardImage: React.FunctionComponent<ICardImageProps> = (props) => {
  const css = cssClasses;
  return (
    <div className={css("card--img", props.className)}>
      <div className={css("card--img-container")}>
        <img src={props.imageSrc} />
      </div>
      {props.children}
    </div>
  );
};
