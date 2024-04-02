import * as React from "react";
import { PromptDialog as ReactPromptDialog, IPromptDialogProps } from '../../components';
import { PluginContainer } from '../pluginContainer';
import { getDeepOrDefault, isFunction } from '@spfxappdev/utility';

export type PromptDialogPluginProps = Omit<IPromptDialogProps, "hidden" | "onConfirmed"> & {
    onConfirmed?(enteredValue: string): void;
}

export abstract class PromptDialog {
    public static open(props?: PromptDialogPluginProps): Promise<string> {
        return new Promise<string>((resolve) => {
            const containerId: string = PluginContainer.create();
            const content: JSX.Element = <ReactPromptDialog {...props} hidden={false}
                onConfirmed={(enteredValue: string) => {
                    PluginContainer.remove(containerId);

                    if (props && typeof props.onConfirmed === "function") {
                        props.onConfirmed(enteredValue);
                    }

                    return resolve(enteredValue);
                }}
                onCanceled={() => {
                    PluginContainer.remove(containerId);

                    if (props && typeof props.onCanceled === "function") {
                        props.onCanceled();
                    }

                    return resolve("");
                }}
                // textFieldProps={{
                //     onChange: (ev: any, newVal: string) => {
                //         if (isFunction(getDeepOrDefault(props, "textFieldProps.onChange"))) {
                //             props.textFieldProps.onChange(content.props, newVal);
                //         }

            //     }
            // }}
            />
            PluginContainer.render(containerId, content);
        });
    }
}