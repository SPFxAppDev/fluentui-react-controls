import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./Loading.module.scss";
import { cssClasses, isNullOrEmpty } from '@spfxappdev/utility';
import { Spinner, ISpinnerProps } from "@fluentui/react";

export interface ILoadingProps {
    className?: string;
    spinnerProps?: ISpinnerProps;
    hidden?: boolean;
}

export const Loading: React.FunctionComponent<ILoadingProps> = (props: ILoadingProps) => {
    const loadingId: string = `loading`;
    let loadingContainer = document.getElementById(loadingId);

    if (isNullOrEmpty(loadingContainer)) {
        loadingContainer = document.createElement("div");
        loadingContainer.id = loadingId;
    }

    if (props.hidden) {

        if (!isNullOrEmpty(loadingContainer)) {
            ReactDOM.unmountComponentAtNode(loadingContainer);
        }

        return null;
    }

    document.body.appendChild(loadingContainer);

    const { spinnerProps } = props;

    const content = <div {...props} className={cssClasses(styles["loading"], "flex-row", "justify-center", "items-center", props.className)}>
        <div className={cssClasses(styles["loading--overlay"])}></div>
        <Spinner {...spinnerProps} className={cssClasses("loading-spinner", { "loading-spinner--customsize": isNullOrEmpty(spinnerProps) || isNullOrEmpty(spinnerProps.size) }, spinnerProps?.className)} />
    </div>;

    ReactDOM.render(content, loadingContainer);

    return null;
};
