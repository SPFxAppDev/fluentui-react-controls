import * as React from "react";
import styles from "./Dialog.module.scss";
import { cssClasses, isFunction } from '@spfxappdev/utility';
import { PrimaryButton, DefaultButton, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { IBaseDialogProperties } from './';

export interface IConfirmDialogProps extends IBaseDialogProperties {
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirmed(): void;
    onCanceled(): void;
}

export const ConfirmDialog: React.FunctionComponent<IConfirmDialogProps> = (props: IConfirmDialogProps) => {
    return <Dialog
        hidden={props.hidden}
        modalProps={{
            className: cssClasses(styles["dialog"], props.className),
            isBlocking: true
        }}
        dialogContentProps={{
            title: props.title || '',
            type: DialogType.normal,
            subText: props.content
        }}
    >

        <DialogFooter>
            <PrimaryButton onClick={() => {
                if (isFunction(props.onConfirmed)) {
                    props.onConfirmed();
                }
            }} text={props.confirmButtonText || "OK"} />

            <DefaultButton onClick={() => {
                if (isFunction(props.onCanceled)) {
                    props.onCanceled();
                }
            }} text={props.cancelButtonText || "Cancel"} />
        </DialogFooter>

    </Dialog>;
};
