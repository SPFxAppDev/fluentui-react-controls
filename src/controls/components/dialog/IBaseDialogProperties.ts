export interface IBaseDialogProperties {
  content: string | JSX.Element | (() => JSX.Element);
  className?: string;
  title?: string;
  hidden?: boolean;
}
