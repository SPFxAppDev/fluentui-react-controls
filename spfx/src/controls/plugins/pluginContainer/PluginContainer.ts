import * as ReactDOM from 'react-dom';
import { isNullOrEmpty } from '@spfxappdev/utility';

export interface IPluginContainerProps {}

export abstract class PluginContainer {
  public static create(): string {
    if (isNullOrEmpty((window as any).SPFxAppDevLastPlugInContainerId)) {
      (window as any).SPFxAppDevLastPlugInContainerId = 1;
    } else {
      (window as any).SPFxAppDevLastPlugInContainerId += 1;
    }
    const lastId = (window as any).SPFxAppDevLastPlugInContainerId;
    const containerId: string = `pluginContainer_${lastId}`;
    let container = document.getElementById(containerId);

    if (isNullOrEmpty(container)) {
      container = document.createElement('div');
      container.id = containerId;
    }

    document.body.appendChild(container);

    return containerId;
  }

  public static render(containerId: string, content: JSX.Element): void {
    const container = document.getElementById(containerId);

    if (isNullOrEmpty(container)) {
      return;
    }

    ReactDOM.render(content, container);
  }

  public static remove(containerId: string): void {
    const container = document.getElementById(containerId);

    if (isNullOrEmpty(container)) {
      return;
    }

    ReactDOM.unmountComponentAtNode(container);

    if (document.getElementById(containerId)) {
      document.getElementById(containerId).remove();
    }
  }
}
