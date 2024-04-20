import * as React from "react";
import styles from "./ComponentTest.module.scss";
import { IComponentTestProps } from "./IComponentTestProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  AddNewToolbox,
  AlertDialog,
  Autocomplete,
  ConfirmDialog,
  IAddNewToolboxItem,
  ListItem,
  Plugins,
  PromptDialog,
} from "@src/controls";
import { DefaultButton, Icon } from "@fluentui/react";
import Base64Image from "@src/controls/components/base64Image/Base64Image";
import { Grid } from "@src/controls/components/grid/Grid";

interface ComponentTestState {
  showDialog: boolean;
}

export default class ComponentTest extends React.Component<
  IComponentTestProps,
  ComponentTestState
> {

  public state: ComponentTestState = {
    showDialog: false,
  }

  public render(): React.ReactElement<IComponentTestProps> {
    return (
      <>
        <AddNewToolbox
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title,
            });
          }}
          items={[{ key: "bla", title: "Deine Oma", icon: "Add" }]}
        />
        Das hier sollte immer sichtbar sein:
        <AddNewToolbox
          hoverOnly={false}
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title,
            });
          }}
          items={[
            { key: "bla1", title: "Deine Oma", icon: "Add" },
            { key: "bla2", title: "Deine Oma2", icon: "Edit" },
            { key: "bla3", title: "Delete", icon: "Delete" },
          ]}
        />
        <div>Custom Rendering</div>
        <AddNewToolbox
          hoverOnly={false}
          onItemClick={(item) => {
            Plugins.AlertDialog.open({
              content: "Das hast du geklickt: " + item.title,
            });
          }}
          items={[
            { key: "bla1", title: "Deine Oma", icon: "Add" },
            { key: "bla2", title: "Deine Oma2", icon: "Edit" },
            { key: "bla3", title: "Delete", icon: "Delete" },
          ]}
          onRenderItem={(item: IAddNewToolboxItem): JSX.Element => {
            return (
              <ListItem>
                <Icon iconName={item.icon} />
                {item.title}
              </ListItem>
            );
          }}
        />
        <h3>BASE64 IMAGE</h3>
        <Base64Image
          base64String=""
          onChange={(newUrl: string) => {
            console.log(newUrl);
          }}
        />
        <div
          style={{
            width: "100%",
            backgroundColor: "red",
            padding: "8px",
          }}
        >
          <h1>Responsive Grid Layout</h1>
          {/* Grid container with default spacing */}
          <Grid container spacing={2}>
            <Grid item xs={8} sm={6} md={4} lg={3}>
              <div style={{ backgroundColor: "#ffcccc", padding: "10px" }}>
                Item 1
              </div>
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={3}>
              <div style={{ backgroundColor: "#ccffcc", padding: "10px" }}>
                Item 2
              </div>
            </Grid>
            <Grid item xs={8} sm={6} md={4} lg={3}>
              <div style={{ backgroundColor: "#ccccff", padding: "10px" }}>
                Item 3
              </div>
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={3}>
              <div style={{ backgroundColor: "#ffffcc", padding: "10px" }}>
                Item 4
              </div>
            </Grid>
          </Grid>

          <h2>Nested Grids</h2>
          {/* Nested grids with different spacing */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <div style={{ backgroundColor: "#ffcccc", padding: "10px" }}>
                    Nested Item 1
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div style={{ backgroundColor: "#ccffcc", padding: "10px" }}>
                    Nested Item 2
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <div style={{ backgroundColor: "#ccccff", padding: "10px" }}>
                Main Item 2
              </div>
            </Grid>
          </Grid>

          <h2>Dynamic Item Sizes</h2>
          {/* Grid with dynamic item sizes */}
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
              <div style={{ backgroundColor: "#ffffcc", padding: "10px" }}>
                Wide Range Item
              </div>
            </Grid>
            <Grid item xs={6} sm={8} md={9} lg={10} xl={11}>
              <div style={{ backgroundColor: "#ffccff", padding: "10px" }}>
                Large Item
              </div>
            </Grid>
          </Grid>
        </div>
        <DefaultButton onClick={() => {
          this.setState({
            showDialog: true
          });
        }}>
          Bla
        </DefaultButton>
        {this.state.showDialog &&
          <PromptDialog
            hidden={false}
            onCanceled={() => {
              this.setState({
                showDialog: false
              })
            }}
            onConfirmed={() => {
              this.setState({
                showDialog: false
              });
            }}
            content={<div>test<br /><br /><br /><br /><br />abc</div>} />
        }
      </>

    );
  }

  private
}
