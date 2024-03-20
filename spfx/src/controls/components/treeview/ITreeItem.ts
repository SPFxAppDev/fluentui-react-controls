import { IIconProps } from '@fluentui/react';

export interface ITreeItem {
  key: string;
  label: string;
  iconProps?: IIconProps;
  data?: any;
  children?: ITreeItem[];
}
