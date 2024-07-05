import * as React from "react";
import "./Grid.scss";

interface IGridProps {
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spacing?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Grid: React.FunctionComponent<IGridProps> = (props) => {
  const {
    container,
    item,
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
    className,
    children,
    style,
  } = props;

  const classList = ["customGrid"];

  if (className) {
    classList.push(className);
  }

  if (container) {
    classList.push("container");
    if (spacing) {
      classList.push(`spacing-${spacing}`);
    }
  }

  if (item) {
    classList.push("item");
    if (xs) classList.push(`xs-${xs}`);
    if (sm) classList.push(`sm-${sm}`);
    if (md) classList.push(`md-${md}`);
    if (lg) classList.push(`lg-${lg}`);
    if (xl) classList.push(`xl-${xl}`);
  }

  return (
    <div className={classList.join(" ")} style={style}>
      {children}
    </div>
  );
};
