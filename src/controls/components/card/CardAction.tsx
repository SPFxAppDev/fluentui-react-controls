import * as React from "react";
import "./Card.scss";
import { cssClasses } from "@spfxappdev/utility";

export interface ICardActionProps {
  vertical?: boolean;
  className?: string;
}

export const CardAction: React.FunctionComponent<ICardActionProps> = (
  props = { vertical: false }
) => {
  const css = cssClasses;

  const additionalCss: Record<string, boolean> = {};

  additionalCss["card--actions-vertical"] = props.vertical;

  return (
    <div className={css("card--actions", additionalCss, props.className)}>
      {props.children}
    </div>
  );
};
