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
  const conditionalIconStyles = (
    iconStyle: IIconCSSProperties
  ): IIconCSSProperties => ({
    "--hover-bg": disabled ? undefined : iconStyle["--hover-bg"] || "gray",
    "--hover-color": disabled
      ? undefined
      : iconStyle["--hover-color"] || "#fff",
    cursor: disabled ? "default" : "pointer",
    ...iconStyle,
  });

  return (
    <div
      className={`${styles.chip} ${className}`}
      onClick={disabled ? undefined : onClick}
      style={{
        backgroundColor: chipColor,
        color: textColor,
        cursor: disabled ? "default" : "pointer",
        ...style,
      }}
    >
      {prefixIcon && (
        <Icon
          iconName={prefixIcon}
          className={`${styles.icon} ${styles.prefixIcon} ${prefixIconClassName}`}
          onClick={disabled ? undefined : onPrefixClick}
          style={conditionalIconStyles(prefixIconStyle)}
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
          style={conditionalIconStyles(suffixIconStyle)}
        />
      )}
    </div>
  );
};
