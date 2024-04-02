import * as React from "react";
import { ConfirmDialog as ReactConfirmDialog, IConfirmDialogProps } from '../../components';
import { PluginContainer } from '../pluginContainer';

export type ConfirmDialogPluginProps = Omit<IConfirmDialogProps, "hidden" | "onConfirmed" | "onCanceled"> & {
    onConfirmed?(): void;
    onCanceled?(): void;
};

export abstract class ConfirmDialog {
    public static open(props?: ConfirmDialogPluginProps): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            const containerId: string = PluginContainer.create();
            const content: JSX.Element = <ReactConfirmDialog {...props} hidden={false}
                onConfirmed={() => {
                    PluginContainer.remove(containerId);

                    if (props && typeof props.onConfirmed === "function") {
                        props.onConfirmed();
                    }

                    return resolve(true);
                }}
                onCanceled={() => {
                    PluginContainer.remove(containerId);

                    if (props && typeof props.onCanceled === "function") {
                        props.onCanceled();
                    }

                    return resolve(false);
                }}
            />
            PluginContainer.render(containerId, content);
        });
    }
}