import * as React from "react";
import styles from "./Grid.module.scss";

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

  const classList = [styles.customGrid];

  if (className) {
    classList.push(className);
  }

  if (container) {
    classList.push(styles.container);
    if (spacing) {
      classList.push(styles[`spacing-${spacing}`]);
    }
  }

  if (item) {
    classList.push(styles.item);
    if (xs) classList.push(styles[`xs-${xs}`]);
    if (sm) classList.push(styles[`sm-${sm}`]);
    if (md) classList.push(styles[`md-${md}`]);
    if (lg) classList.push(styles[`lg-${lg}`]);
    if (xl) classList.push(styles[`xl-${xl}`]);
  }

  return (
    <div className={classList.join(" ")} style={style}>
      {children}
    </div>
  );
};
