import * as React from 'react';
import styles from './ComponentTest.module.scss';
import { IComponentTestProps } from './IComponentTestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { AddNewToolbox, IAddNewToolboxItem, ListItem, Plugins } from '@src/controls';
import { Icon } from '@fluentui/react';
import Base64Image from '@src/controls/components/base64Image/Base64Image';

export default class ComponentTest extends React.Component<IComponentTestProps, {}> {
  public render(): React.ReactElement<IComponentTestProps> {


    return (
      <>
        <AddNewToolbox
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title
            })
          }}
          items={[{ key: "bla", title: "Deine Oma", icon: "Add" }]}
        />

        Das hier sollte immer sichtbar sein:

        <AddNewToolbox
          hoverOnly={false}
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title
            })
          }}
          items={[
            { key: "bla1", title: "Deine Oma", icon: "Add" },
            { key: "bla2", title: "Deine Oma2", icon: "Edit" },
            { key: "bla3", title: "Delete", icon: "Delete" }
          ]}
        />

        <div>
          Custom Rendering
        </div>

        <AddNewToolbox
          hoverOnly={false}
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title
            })
          }}
          items={[
            { key: "bla1", title: "Deine Oma", icon: "Add" },
            { key: "bla2", title: "Deine Oma2", icon: "Edit" },
            { key: "bla3", title: "Delete", icon: "Delete" }
          ]}
          onRenderItem={(item: IAddNewToolboxItem): JSX.Element => {
            return <ListItem>
              <Icon iconName={item.icon} />
              {item.title}
            </ListItem>
          }}
        />

        <h3>BASE64 IMAGE</h3>
        <Base64Image
          base64String=''
          onChange={(newUrl: string) => {
            console.log(newUrl);
          }}
        />
      </>
    );
  }
}
