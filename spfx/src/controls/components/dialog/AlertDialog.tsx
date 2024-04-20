import * as React from "react";
import styles from "./Dialog.module.scss";
import { cssClasses, isFunction } from '@spfxappdev/utility';
import { PrimaryButton, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { IBaseDialogProperties } from './';

export interface IAlertDialogProps extends IBaseDialogProperties { 
    buttonText?: string;
    onDismiss(): void;
}

export const AlertDialog: React.FunctionComponent<IAlertDialogProps> = (props: IAlertDialogProps) => {
    return <Dialog 
                hidden={props.hidden}
                modalProps={{
                    className: cssClasses(styles["dialog"], props.className),
                    onDismiss: () => {
                        if(isFunction(props.onDismiss)) {
                            props.onDismiss();
                        }
                    },
                    isBlocking: true
                }}
                dialogContentProps={{
                    title: props.title||'',
                    type: DialogType.normal,
                }}
                >

        {typeof props.content !== "function" &&
            props.content
        }
        {
            typeof props.content === "function" &&
            props.content()
        }

                <DialogFooter>
                    <PrimaryButton onClick={() => {
                        if(isFunction(props.onDismiss)) {
                            props.onDismiss();
                        }
                    }} text={props.buttonText||"OK"} />
                </DialogFooter>

            </Dialog>;
};
