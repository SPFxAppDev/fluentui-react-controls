import * as React from 'react';
import styles from './Base64Image.module.scss';
import { cssClasses, isNullOrEmpty } from '@spfxappdev/utility';
import { IconButton, Label, MessageBar } from '@fluentui/react';

export interface IBase64ImageProps {
    /**
   * The Base64 string of the image (used for the preview)
   */
    base64String: string;

    onChange(newBase64String: string): void;

    label?: string;
}

interface IBase64ImageState {
    showNoImageUploadedContainer: boolean;
    isDeleteButtonDisabled: boolean;
    base64String: string;
}

export default class Base64Image extends React.Component<IBase64ImageProps, IBase64ImageState> {

    public state: IBase64ImageState = {
        showNoImageUploadedContainer: isNullOrEmpty(this.props.base64String),
        isDeleteButtonDisabled: isNullOrEmpty(this.props.base64String),
        base64String: this.props.base64String || ''
    };

    public render(): React.ReactElement<IBase64ImageProps> {
        const imagePreviewStyle: React.CSSProperties = {};

        if (!isNullOrEmpty(this.state.base64String)) {
            imagePreviewStyle.backgroundImage = `url(${this.state.base64String})`;
        }

        return (
            <div className={cssClasses(styles['base64ImageEncoder-container'])}>
                {!isNullOrEmpty(this.props.label) &&
                    <Label>{this.props.label}</Label>
                }

                {this.state.showNoImageUploadedContainer &&
                    <MessageBar>{"strings.base64ImageEncoderNoImageSelectedText"}</MessageBar>
                }

                {!this.state.showNoImageUploadedContainer &&
                    <div className={cssClasses(styles['base64ImageEncoder-image--preview'])} style={imagePreviewStyle}>
                        &nbsp;
                    </div>
                }
                <div className={cssClasses(styles['base64ImageEncoder-buttons'])}>
                    <input type="file" accept="image/*" onChange={(event): void => {
                        const fileList: FileList = event.target.files as FileList;
                        this.onFileChanged(fileList);
                    }} />
                    <IconButton
                        iconProps={{
                            iconName: this.state.showNoImageUploadedContainer ? "Add" : "Edit"
                        }}
                        title={this.state.showNoImageUploadedContainer ? "strings.base64ImageEncoderAddImageText" : "strings.base64ImageEncoderEditImageText"}
                        onClick={(ev: any): void => {

                            const containerElement: HTMLElement = ev.target.closest(`.${styles['base64ImageEncoder-container']}`);
                            const fileInput: HTMLInputElement = containerElement.querySelector('input[type="file"]') as HTMLInputElement;
                            fileInput.click();
                        }}
                    />
                    <IconButton
                        disabled={this.state.isDeleteButtonDisabled}
                        iconProps={{
                            iconName: "Delete"
                        }}
                        title={"strings.base64ImageEncoderDeleteImageText"}
                        onClick={(): void => {
                            const newImageUrl: string = '';

                            this.setState({
                                base64String: newImageUrl,
                                showNoImageUploadedContainer: isNullOrEmpty(newImageUrl),
                                isDeleteButtonDisabled: isNullOrEmpty(newImageUrl),
                            });

                            this.props.onChange(newImageUrl);
                        }}
                    />
                </div>
            </div>);
    }

    private async onFileChanged(fileList: FileList): Promise<void> {
        if (isNullOrEmpty(fileList)) {
            return;
        }

        if (fileList.length !== 1) {
            return;
        }

        const promise = new Promise<string>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function (event: any) {
                resolve(event.target.result);
                return;
            };

            reader.readAsDataURL(fileList[0]);
        });

        const newImageUrl = await promise;

        this.setState({
            base64String: newImageUrl,
            showNoImageUploadedContainer: isNullOrEmpty(newImageUrl),
            isDeleteButtonDisabled: isNullOrEmpty(newImageUrl),
        });

        this.props.onChange(newImageUrl);
    }
}