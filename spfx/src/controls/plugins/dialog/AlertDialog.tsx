import * as React from "react";
import { AlertDialog as ReactAlertDialog, IAlertDialogProps } from '../../components';
import { PluginContainer } from '../pluginContainer';


export type AlertDialogPluginProps = Omit<IAlertDialogProps, "hidden" | "onDismiss"> & {
    onDismiss?(): void;
}

export abstract class AlertDialog {
    public static open(props?: AlertDialogPluginProps): Promise<void> {
        return new Promise<void>((resolve) => {
            const containerId: string = PluginContainer.create();
            const content: JSX.Element = <ReactAlertDialog {...props as any} hidden={false} onDismiss={() => {
                PluginContainer.remove(containerId);

                if (props && typeof props.onDismiss === "function") {
                    props.onDismiss();
                }

                return resolve();
            }} />
            PluginContainer.render(containerId, content);
        });
    }
}