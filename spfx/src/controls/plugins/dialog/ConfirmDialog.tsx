import * as React from "react";
import { ConfirmDialog as ReactConfirmDialog, IConfirmDialogProps } from '../../components';
import { PluginContainer } from '../pluginContainer';

export abstract class ConfirmDialog {
    public static open(props?: Omit<IConfirmDialogProps, "hidden">): void {
        const containerId: string = PluginContainer.create();
        const content: JSX.Element = <ReactConfirmDialog {...props} hidden={false} onConfirmed={() => {
            PluginContainer.remove(containerId);

            if (props && typeof props.onConfirmed === "function") {
                props.onConfirmed();
            }
        }}
            onCanceled={() => {
                PluginContainer.remove(containerId);

                if (props && typeof props.onCanceled === "function") {
                    props.onCanceled();
                }
            }}
        />
        PluginContainer.render(containerId, content);
    }
}