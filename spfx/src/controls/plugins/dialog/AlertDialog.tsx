import * as React from "react";
import { AlertDialog as ReactAlertDialog, IAlertDialogProps } from '../../components';
import { PluginContainer } from '../pluginContainer';

export abstract class AlertDialog {
    public static open(props?: Omit<IAlertDialogProps, "hidden" | "onDismiss">): void {
        const containerId: string = PluginContainer.create();
        const content: JSX.Element = <ReactAlertDialog {...props as any} hidden={false} onDismiss={() => {
            PluginContainer.remove(containerId);

            // if (props && typeof props.onDismiss === "function") {
            //     props.onDismiss();
            // }
        }} />
        PluginContainer.render(containerId, content);
    }
}