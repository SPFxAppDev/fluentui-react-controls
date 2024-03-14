import * as React from "react";
import { useState } from 'react';
import styles from "./Dialog.module.scss";
import { cssClasses, getDeepOrDefault, isFunction } from '@spfxappdev/utility';
import { PrimaryButton, DefaultButton, Dialog, DialogType, DialogFooter, TextField, ITextFieldProps } from '@fluentui/react';
import { IBaseDialogProperties } from './';

export interface IPromptDialogProps extends IBaseDialogProperties {
    confirmButtonText?: string;
    hideCancelButton?: boolean;
    cancelButtonText?: string;
    onConfirmed(enteredValue: string): void;
    onCanceled?(): void;
    confirmButtonDisabled?: boolean;
    textFieldProps?: ITextFieldProps;
}

export const PromptDialog: React.FunctionComponent<IPromptDialogProps> = (props: IPromptDialogProps) => {

    const [enteredValue, setEnteredValue] = useState('');

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

        <TextField {...props.textFieldProps} onChange={(ev: any, newValue: string) => {

            setEnteredValue(newValue);

            if (isFunction(getDeepOrDefault(props, "textFieldProps.onChange"))) {
                props.textFieldProps.onChange(ev, newValue);
            }

        }} />

        <DialogFooter>
            <PrimaryButton
                disabled={props.confirmButtonDisabled}
                onClick={() => {
                    if (isFunction(props.onConfirmed)) {
                        props.onConfirmed(enteredValue);
                    }
                }} text={props.confirmButtonText || "OK"} />

            {!props.hideCancelButton &&
                <DefaultButton onClick={() => {
                    if (isFunction(props.onCanceled)) {
                        props.onCanceled();
                    }
                }} text={props.cancelButtonText || "Cancel"} />
            }
        </DialogFooter>

    </Dialog>;
};
