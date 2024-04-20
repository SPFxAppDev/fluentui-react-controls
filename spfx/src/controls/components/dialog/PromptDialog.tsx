import * as React from "react";
import { useState, useEffect } from 'react';
import styles from "./Dialog.module.scss";
import { cssClasses, getDeepOrDefault, isFunction } from '@spfxappdev/utility';
import { PrimaryButton, DefaultButton, Dialog, DialogType, DialogFooter, TextField, ITextFieldProps } from '@fluentui/react';
import { IBaseDialogProperties } from './';

export type PromptConfirmValidation = (currentValue: string) => boolean;

export interface IPromptDialogProps extends IBaseDialogProperties {
    confirmButtonText?: string;
    hideCancelButton?: boolean;
    cancelButtonText?: string;
    onConfirmed(enteredValue: string): void;
    onCanceled?(): void;
    confirmButtonDisabled?: boolean | PromptConfirmValidation;
    textFieldProps?: ITextFieldProps;
}

export const PromptDialog: React.FunctionComponent<IPromptDialogProps> = (props: IPromptDialogProps) => {

    const [enteredValue, setEnteredValue] = useState('');

    let isBtnDisabled: boolean = false;
    if (typeof props.confirmButtonDisabled === "boolean") {
        isBtnDisabled = props.confirmButtonDisabled;
    }

    if (typeof props.confirmButtonDisabled === "function") {
        isBtnDisabled = props.confirmButtonDisabled(enteredValue);
    }

    const [disableConfirmBtn, setDisableConfirmBtn] = useState(isBtnDisabled);



    useEffect(() => {
        if (typeof props.confirmButtonDisabled === "boolean") {
            isBtnDisabled = props.confirmButtonDisabled;
        }

        if (typeof props.confirmButtonDisabled === "function") {
            isBtnDisabled = props.confirmButtonDisabled(enteredValue);
        }

        setDisableConfirmBtn(isBtnDisabled);

    }, [props.confirmButtonDisabled]); // useEffect wird nur bei Änderungen von prop1 ausgelöst

    return <Dialog
        hidden={props.hidden}
        modalProps={{
            className: cssClasses(styles["dialog"], props.className),
            isBlocking: true
        }}
        dialogContentProps={{
            title: props.title || '',
            type: DialogType.normal
        }}
    >

        {typeof props.content !== "function" &&
            <>
                <div>
                    {props.content}
                </div>
            </>
        }
        {
            typeof props.content === "function" &&
            props.content()
        }

        <TextField {...props.textFieldProps} onChange={(ev: any, newValue: string) => {

            setEnteredValue(newValue);

            if (typeof props.confirmButtonDisabled === "function") {
                setDisableConfirmBtn(props.confirmButtonDisabled(newValue));
            }

            if (isFunction(getDeepOrDefault(props, "textFieldProps.onChange"))) {
                props.textFieldProps.onChange(ev, newValue);
            }

        }} />

        <DialogFooter>
            <PrimaryButton
                disabled={disableConfirmBtn}
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
