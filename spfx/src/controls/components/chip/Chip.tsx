import * as React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import styles from "./Chip.module.scss";

interface IChipProps {
  label: string;
  prefixIcon?: string;
  suffixIcon?: string;
  onClick?: () => void;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
  chipColor?: string;
  textColor?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  prefixIconStyle?: IIconCSSProperties;
  suffixIconStyle?: IIconCSSProperties;
  disabled?: boolean;
  className?: string; // Class for the main chip container
  prefixIconClassName?: string; // Class for the prefix icon
  suffixIconClassName?: string; // Class for the suffix icon
}

interface IIconCSSProperties extends React.CSSProperties {
  "--hover-bg"?: string;
  "--hover-color"?: string;
}

export const Chip: React.FunctionComponent<IChipProps> = ({
  label,
  prefixIcon,
  suffixIcon,
  onClick,
  onPrefixClick,
  onSuffixClick,
  chipColor = "#e0e0e0",
  textColor = "#333",
  style = {},
  labelStyle = {},
  prefixIconStyle = {},
  suffixIconStyle = {},
  disabled = false,
  className = "",
  prefixIconClassName = "",
  suffixIconClassName = "",
}) => {
  // Set CSS variables for hover state only if not disabled
  const getIconStyles = (
    iconStyle: IIconCSSProperties,
    iconType: "prefix" | "suffix"
  ): IIconCSSProperties => {
    const isClickable = iconType === "suffix" ? onSuffixClick : onPrefixClick;
    return {
      "--hover-bg":
        isClickable && !disabled
          ? iconStyle["--hover-bg"] || "gray"
          : undefined,
      "--hover-color":
        isClickable && !disabled
          ? iconStyle["--hover-color"] || "#fff"
          : undefined,
      cursor: (isClickable || onClick) && !disabled ? "pointer" : "default",
      ...iconStyle,
    };
  };

  return (
    <div
      className={`${styles.chip} ${className}`}
      onClick={disabled ? undefined : onClick}
      style={{
        backgroundColor: chipColor,
        color: textColor,
        cursor: !onClick || disabled ? "default" : "pointer",
        ...style,
      }}
    >
      {prefixIcon && (
        <Icon
          iconName={prefixIcon}
          className={`${styles.icon} ${styles.prefixIcon} ${prefixIconClassName}`}
          onClick={disabled ? undefined : onPrefixClick}
          style={getIconStyles(prefixIconStyle, "prefix")}
        />
      )}
      <span className={styles.label} style={{ ...labelStyle }}>
        {label}
      </span>
      {suffixIcon && (
        <Icon
          iconName={suffixIcon}
          className={`${styles.icon} ${styles.suffixIcon} ${suffixIconClassName}`}
          onClick={disabled ? undefined : onSuffixClick}
          style={getIconStyles(suffixIconStyle, "suffix")}
        />
      )}
    </div>
  );
};
