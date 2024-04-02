import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'ComponentTestWebPartStrings';
import ComponentTest from './components/ComponentTest';
import { IComponentTestProps } from './components/IComponentTestProps';
import { spfi, SPFx } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import { IRenderListDataParameters } from '@pnp/sp/lists';
import { IUrlParameter, Uri } from '@spfxappdev/utility';

export interface IComponentTestWebPartProps {
  description: string;
}

export default class ComponentTestWebPart extends BaseClientSideWebPart<IComponentTestWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IComponentTestProps> = React.createElement(ComponentTest, {
      description: this.properties.description,
      isDarkTheme: this._isDarkTheme,
      environmentMessage: this._environmentMessage,
      hasTeamsContext: !!this.context.sdks.microsoftTeams,
      userDisplayName: this.context.pageContext.user.displayName,
    });

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    // await this.testPaged();
  }

  // private async testPaged(): Promise<void> {
  //   const pageSize: number = 1;
  //   const camlQuery: IRenderListDataParameters = {
  //     RenderOptions: 2,
  //     ViewXml: `<View Scope='RecursiveAll'>
  //     <Query>
  //       <OrderBy>
  //         <FieldRef Name="Created" Type="DateTime" IncludeTimeValue="TRUE" Ascending="FALSE" />
  //       </OrderBy>
  //     </Query>
  //     <ViewFields>
  //         <FieldRef Name='_CommentCount'/>
  //         <FieldRef Name='BannerImageUrl'/>
  //         <FieldRef Name='Description'/>
  //         <FieldRef Name='_PublishStartDate'/>
  //         <FieldRef Name='EncodedAbsUrl'/>
  //         <FieldRef Name='Title'/>
  //         <FieldRef Name='FileRef'/>
  //         <FieldRef Name='PromotedState'/>
  //         <FieldRef Name='ID'/>
  //     </ViewFields>
  //     <RowLimit Paged="TRUE">${pageSize}</RowLimit>
  //   </View>`,
  //     AddAllFields: true,
  //     ExpandUserField: true,
  //   };

  //   const sp = spfi().using(SPFx(this.context));
  //   const items = await sp.web
  //     .getList('/sites/suedlink/SitePages')
  //     .renderListDataAsStream(camlQuery);

  //   //SECOND CALL
  //   camlQuery.Paging = items.NextHref as string;

  //   const query = new Map<string, string>();

  //   //URI ==> @spfxappdev/utility
  //   const uri: Uri = new Uri(items.NextHref as string);

  //   uri.Parameters.getAll().forEach((param: IUrlParameter) => {
  //     query.set(param.Key, param.Value);
  //   });

  //   const items2 = await sp.web
  //     .getList('/sites/suedlink/SitePages')
  //     .renderListDataAsStream(camlQuery, undefined, query);
  //   console.log('SSC items 2', items2);
  // }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) {
      // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then((context) => {
        let environmentMessage: string = '';
        switch (context.app.host.name) {
          case 'Office': // running in Office
            environmentMessage = this.context.isServedFromLocalhost
              ? strings.AppLocalEnvironmentOffice
              : strings.AppOfficeEnvironment;
            break;
          case 'Outlook': // running in Outlook
            environmentMessage = this.context.isServedFromLocalhost
              ? strings.AppLocalEnvironmentOutlook
              : strings.AppOutlookEnvironment;
            break;
          case 'Teams': // running in Teams
            environmentMessage = this.context.isServedFromLocalhost
              ? strings.AppLocalEnvironmentTeams
              : strings.AppTeamsTabEnvironment;
            break;
          default:
            throw new Error('Unknown host');
        }

        return environmentMessage;
      });
    }

    return Promise.resolve(
      this.context.isServedFromLocalhost
        ? strings.AppLocalEnvironmentSharePoint
        : strings.AppSharePointEnvironment
    );
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
