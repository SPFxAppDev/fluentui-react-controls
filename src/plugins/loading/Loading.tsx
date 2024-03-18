import * as React from "react";
import { Loading as ReactLoading, ILoadingProps } from '../../components';
import { PluginContainer } from '../pluginContainer';

export abstract class Loading {

    private static currentContainerId: string = null;

    public static show(props?: Omit<ILoadingProps, "hidden">): void {
        const containerId: string = PluginContainer.create();
        const content: JSX.Element = <ReactLoading {...props} hidden={false} />
        Loading.currentContainerId = containerId;
        PluginContainer.render(containerId, content);
    }

    public static hide(): void {
        PluginContainer.remove(Loading.currentContainerId);
        PluginContainer.remove("loadingContainer");
    }
}