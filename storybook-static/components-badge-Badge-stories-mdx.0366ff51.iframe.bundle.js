(self.webpackChunk_spfxappdev_fluentui_react_controls=self.webpackChunk_spfxappdev_fluentui_react_controls||[]).push([[357],{"./node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.1/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG}),__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/blocks/dist/index.mjs")},"./stories/components/badge/Badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTemplate:()=>BasicTemplate,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");var D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.1/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@7.6.10_@types+react-dom@17.0.17_@types+react@17.0.45_react-dom@17.0.1_react@17.0.1/node_modules/@storybook/addon-docs/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/components/badge/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-runtime.js");let BasicTemplate=args=>{let _components=Object.assign({div:"div"},(0,D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.div,{children:["Version ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.E,{...args,children:"1.0.0"})]})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Badge",component:___WEBPACK_IMPORTED_MODULE_2__.E}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The Badge Component is a visual element used to display concise information, typically in the form of a small icon or label.\r\nBadges are often used to indicate status, notifications, or other contextual information within an interface.\r\nThey can be styled and customized to suit various design requirements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The Badge Component is commonly employed in user interfaces to draw attention to specific elements or to provide visual feedback to users. Some common use cases include:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Status Indicators"}),': Badges can be used to indicate the status of an item, such as "New," "Completed," or "In Progress."']}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Notification Counters"}),": Badges can display counts to indicate the number of unread messages, notifications, or pending tasks."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Dynamic Content"}),": Badges can be dynamically updated to reflect changes in the application state, such as the number of items in a shopping cart or the number of new messages."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Labels"}),": Badges can serve as labels for categorization or tagging purposes, helping users quickly identify and filter content."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Visual Enhancements"}),": Badges can enhance the visual appeal of a user interface by adding decorative elements or highlighting important information."]}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"In summary, the Badge Component is a versatile UI element that provides a visually appealing way to convey information and enhance user experience within web applications."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"import { Badge } from '@spfxappdev/fluentui-react-controls';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"sample-code",children:"Sample Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"<div>\r\n  Version <Badge>1.0.0</Badge>\r\n</div>\n"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Basic",children:BasicTemplate.bind({})})})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,D_Projekte_SPFxAppDev_fluentui_react_controls_node_modules_pnpm_storybook_addon_docs_7_6_10_types_react_dom_17_0_17_types_react_17_0_45_react_dom_17_0_1_react_17_0_1_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let basic=BasicTemplate.bind({});basic.storyName="Basic",basic.parameters={storySource:{source:"args => <div>\n    <div>\n      Version <Badge {...args}>1.0.0</Badge>\n    </div>\n  </div>"}};let componentMeta={title:"Components/Badge",component:___WEBPACK_IMPORTED_MODULE_2__.E,tags:["stories-mdx"],includeStories:["basic"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["BasicTemplate","basic"]},"./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./stories/components/badge/Badge.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".flex-row,.flex-column,.flex{display:flex;flex-wrap:wrap}.flex-row{flex-direction:row}.flex-column{flex-direction:column}.no-wrap{flex-wrap:nowrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-baseline{align-self:baseline}.self-stretch{align-self:stretch}.float-left{float:left}.float-right{float:right}.relative-position{position:relative}.absolute-position{position:absolute}.absolute-top{top:0;left:0;right:0;position:absolute}.absolute-bottom{bottom:0;left:0;right:0;position:absolute}.fixed-position{position:fixed}.full-width{width:100% !important;margin-left:0 !important;margin-right:0 !important}.fontsize-xxs{font-size:9px}.fontsize-xs{font-size:10px}.fontsize-s{font-size:14px}.fontsize-m{font-size:16px}.fontsize-l{font-size:18px}.fontsize-xl{font-size:21px}.fontsize-xxl{font-size:32px}.fontsize-xxxl{font-size:48px}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.block{display:block !important}.inline-block{display:inline-block !important}.no-margin{margin:0 !important}.no-padding{padding:0 !important}.no-border{border:0 !important}.no-border-radius{border-radius:0 !important}.no-box-shadow{box-shadow:none !important}.no-outline{outline:0 !important}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ellipsis-2-lines,.ellipsis-3-lines{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.ellipsis-2-lines{-webkit-line-clamp:2}.ellipsis-3-lines{-webkit-line-clamp:3}.hide-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.hide-scrollbar::-webkit-scrollbar{width:0;height:0;display:none}.readonly{cursor:default !important}.disabled,.disabled label{outline:0 !important;cursor:not-allowed !important}.hidden{display:none !important}.invisible,.invisible *{visibility:hidden !important;transition:none !important;animation:none !important}.transparent{background:rgba(0,0,0,0) !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-hidden-y{overflow-y:hidden !important}.XPJG5DuSl3OLGqdLZkdA{background-color:#0078d7;display:inline-flex;color:#fff;padding:2px 6px;border-radius:4px;font-size:12px;line-height:12px;min-height:12px;font-weight:400}","",{version:3,sources:["webpack://./stories/scss/common.scss","webpack://./stories/components/badge/Badge.module.scss"],names:[],mappings:"AAiDE,6BAGE,YAAA,CACA,cAAA,CAGF,UACE,kBAAA,CAGF,aACE,qBAAA,CAGF,SACE,gBAAA,CAIA,eACE,0BAAA,CAGF,aACE,wBAAA,CAGF,gBACE,sBAAA,CAGF,iBACE,6BAAA,CAGF,gBACE,4BAAA,CAEF,gBACE,4BAAA,CAKF,aACE,sBAAA,CAEF,WACE,oBAAA,CAEF,cACE,kBAAA,CAEF,gBACE,oBAAA,CAGF,eACE,mBAAA,CAKF,YACE,qBAAA,CAGF,UACE,mBAAA,CAGF,aACE,iBAAA,CAGF,eACE,mBAAA,CAGF,cACE,kBAAA,CAIJ,YACE,UAAA,CAGF,aACE,WAAA,CAIA,mBACE,iBAAA,CAKF,mBACE,iBAAA,CAGF,cACE,KAAA,CACA,MAAA,CACA,OAAA,CACA,iBAAA,CAGF,iBACE,QAAA,CACA,MAAA,CACA,OAAA,CACA,iBAAA,CAKF,gBACE,cAAA,CAIJ,YACE,qBAAA,CACA,wBAAA,CACA,yBAAA,CAIA,cACE,aAAA,CAGF,aACE,cAAA,CAGF,YACE,cAAA,CAGF,YACE,cAAA,CAGF,YACE,cAAA,CAGF,aACE,cAAA,CAGF,cACE,cAAA,CAGF,eACE,cAAA,CAKF,WACE,eAAA,CAGF,YACE,gBAAA,CAGF,aACE,iBAAA,CAIJ,OACE,wBAAA,CAGF,cACE,+BAAA,CAGF,WACE,mBAAA,CAGF,YACE,oBAAA,CAGF,WACE,mBAAA,CAGF,kBACE,0BAAA,CAGF,eACE,0BAAA,CAGF,YACE,oBAAA,CAGF,UACE,sBAAA,CACA,kBAAA,CACA,eAAA,CAEA,oCAEE,eAAA,CACA,mBAAA,CACA,2BAAA,CAGF,kBACE,oBAAA,CAGF,kBACE,oBAAA,CAIJ,gBACE,oBAAA,CACA,uBAAA,CAEA,mCACE,OAAA,CACA,QAAA,CACA,YAAA,CAIJ,UACE,yBAAA,CAIA,0BAEE,oBAAA,CACA,6BAAA,CAIJ,QACE,uBAAA,CAIA,wBAEE,4BAAA,CACA,0BAAA,CACA,yBAAA,CAIJ,aACE,mCAAA,CAIA,eACE,wBAAA,CAGF,iBACE,0BAAA,CAEA,mBACE,4BAAA,CCxUR,sBACE,wBDyBa,CCxBb,mBAAA,CACA,UDyCM,CCxCN,eAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA",sourcesContent:["@function getSharePointColor($color, $fallback) {\r\n  @if variable-exists($color) {\r\n    @return $color;\r\n  } @else {\r\n    @return $fallback;\r\n  }\r\n}\r\n\r\n$spThemePrimary: '[theme: themePrimary, default: #0078d7]';\r\n$spThemeSecondary: '[theme: themeSecondary, default: #2b88d8]';\r\n$spThemeTertiary: '[theme: themeTertiary, default: #d83b01]';\r\n$spThemeDarkAlt: '[theme: themeDarkAlt, default: #005a9e]';\r\n$spThemeDark: '[theme: themeDark, default: #004578]';\r\n$spThemeDarker: '[theme: themeDarker, default: #003366]';\r\n$spNeutralLighterAlt: '[theme: neutralLighterAlt, default: #f8f8f8]';\r\n$spNeutralLighter: '[theme: neutralLighter, default: #f4f4f4]';\r\n$spNeutralLight: '[theme: neutralLight, default: #eaeaea]';\r\n$spNeutralQuaternaryAlt: '[theme: neutralQuaternaryAlt, default: #d0d0d0]';\r\n$spNeutralQuaternary: '[theme: neutralQuaternary, default: #c8c8c8]';\r\n$spNeutralTertiaryAlt: '[theme: neutralTertiaryAlt, default: #b6b6b6]';\r\n$spNeutralTertiary: '[theme: neutralTertiary, default: #a6a6a6]';\r\n$spNeutralSecondary: '[theme: neutralSecondary, default: #666666]';\r\n$spNeutralPrimaryAlt: '[theme: neutralPrimaryAlt, default: #333333]';\r\n$spNeutralPrimary: '[theme: neutralPrimary, default: #000000]';\r\n$spNeutralDark: '[theme: neutralDark, default: #151515]';\r\n$spBlack: '[theme: black, default: #000000]';\r\n$spWhite: '[theme: white, default: #ffffff]';\r\n\r\n$themePrimary: getSharePointColor($spThemePrimary, #0078d7);\r\n$themeSecondary: getSharePointColor($spThemeSecondary, #2b88d8);\r\n$themeTertiary: getSharePointColor($spThemeTertiary, #d83b01);\r\n$themeDarkAlt: getSharePointColor($spThemeDarkAlt, #005a9e);\r\n$themeDark: getSharePointColor($spThemeDark, #004578);\r\n$themeDarker: getSharePointColor($spThemeDarker, #003366);\r\n$neutralLighterAlt: getSharePointColor($spNeutralLighterAlt, #f8f8f8);\r\n$neutralLighter: getSharePointColor($spNeutralLighter, #f4f4f4);\r\n$neutralLight: getSharePointColor($spNeutralLight, #eaeaea);\r\n$neutralQuaternaryAlt: getSharePointColor($spNeutralQuaternaryAlt, #d0d0d0);\r\n$neutralQuaternary: getSharePointColor($spNeutralQuaternary, #c8c8c8);\r\n$neutralTertiaryAlt: getSharePointColor($spNeutralTertiaryAlt, #b6b6b6);\r\n$neutralTertiary: getSharePointColor($spNeutralTertiary, #a6a6a6);\r\n$neutralSecondary: getSharePointColor($spNeutralSecondary, #666666);\r\n$neutralPrimaryAlt: getSharePointColor($spNeutralPrimaryAlt, #333333);\r\n$neutralPrimary: getSharePointColor($spNeutralPrimary, #000000);\r\n$neutralDark: getSharePointColor($spNeutralDark, #151515);\r\n$black: getSharePointColor($spBlack, #000000);\r\n$white: getSharePointColor($spWhite, #ffffff);\r\n\r\n:global {\r\n  .flex-row,\r\n  .flex-column,\r\n  .flex {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .flex-row {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .flex-column {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .no-wrap {\r\n    flex-wrap: nowrap;\r\n  }\r\n\r\n  .justify {\r\n    &-start {\r\n      justify-content: flex-start;\r\n    }\r\n\r\n    &-end {\r\n      justify-content: flex-end;\r\n    }\r\n\r\n    &-center {\r\n      justify-content: center;\r\n    }\r\n\r\n    &-between {\r\n      justify-content: space-between;\r\n    }\r\n\r\n    &-around {\r\n      justify-content: space-around;\r\n    }\r\n    &-evenly {\r\n      justify-content: space-evenly;\r\n    }\r\n  }\r\n\r\n  .items {\r\n    &-start {\r\n      align-items: flex-start;\r\n    }\r\n    &-end {\r\n      align-items: flex-end;\r\n    }\r\n    &-center {\r\n      align-items: center;\r\n    }\r\n    &-baseline {\r\n      align-items: baseline;\r\n    }\r\n\r\n    &-stretch {\r\n      align-items: stretch;\r\n    }\r\n  }\r\n\r\n  .self {\r\n    &-start {\r\n      align-self: flex-start;\r\n    }\r\n\r\n    &-end {\r\n      align-self: flex-end;\r\n    }\r\n\r\n    &-center {\r\n      align-self: center;\r\n    }\r\n\r\n    &-baseline {\r\n      align-self: baseline;\r\n    }\r\n\r\n    &-stretch {\r\n      align-self: stretch;\r\n    }\r\n  }\r\n\r\n  .float-left {\r\n    float: left;\r\n  }\r\n\r\n  .float-right {\r\n    float: right;\r\n  }\r\n\r\n  .relative {\r\n    &-position {\r\n      position: relative;\r\n    }\r\n  }\r\n\r\n  .absolute {\r\n    &-position {\r\n      position: absolute;\r\n    }\r\n\r\n    &-top {\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      position: absolute;\r\n    }\r\n\r\n    &-bottom {\r\n      bottom: 0;\r\n      left: 0;\r\n      right: 0;\r\n      position: absolute;\r\n    }\r\n  }\r\n\r\n  .fixed {\r\n    &-position {\r\n      position: fixed;\r\n    }\r\n  }\r\n\r\n  .full-width {\r\n    width: 100% !important;\r\n    margin-left: 0 !important;\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .fontsize {\r\n    &-xxs {\r\n      font-size: 9px;\r\n    }\r\n\r\n    &-xs {\r\n      font-size: 10px;\r\n    }\r\n\r\n    &-s {\r\n      font-size: 14px;\r\n    }\r\n\r\n    &-m {\r\n      font-size: 16px;\r\n    }\r\n\r\n    &-l {\r\n      font-size: 18px;\r\n    }\r\n\r\n    &-xl {\r\n      font-size: 21px;\r\n    }\r\n\r\n    &-xxl {\r\n      font-size: 32px;\r\n    }\r\n\r\n    &-xxxl {\r\n      font-size: 48px;\r\n    }\r\n  }\r\n\r\n  .text {\r\n    &-left {\r\n      text-align: left;\r\n    }\r\n\r\n    &-right {\r\n      text-align: right;\r\n    }\r\n\r\n    &-center {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  .block {\r\n    display: block !important;\r\n  }\r\n\r\n  .inline-block {\r\n    display: inline-block !important;\r\n  }\r\n\r\n  .no-margin {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .no-padding {\r\n    padding: 0 !important;\r\n  }\r\n\r\n  .no-border {\r\n    border: 0 !important;\r\n  }\r\n\r\n  .no-border-radius {\r\n    border-radius: 0 !important;\r\n  }\r\n\r\n  .no-box-shadow {\r\n    box-shadow: none !important;\r\n  }\r\n\r\n  .no-outline {\r\n    outline: 0 !important;\r\n  }\r\n\r\n  .ellipsis {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n\r\n    &-2-lines,\r\n    &-3-lines {\r\n      overflow: hidden;\r\n      display: -webkit-box;\r\n      -webkit-box-orient: vertical;\r\n    }\r\n\r\n    &-2-lines {\r\n      -webkit-line-clamp: 2;\r\n    }\r\n\r\n    &-3-lines {\r\n      -webkit-line-clamp: 3;\r\n    }\r\n  }\r\n\r\n  .hide-scrollbar {\r\n    scrollbar-width: none;\r\n    -ms-overflow-style: none;\r\n\r\n    &::-webkit-scrollbar {\r\n      width: 0;\r\n      height: 0;\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .readonly {\r\n    cursor: default !important;\r\n  }\r\n\r\n  .disabled {\r\n    &,\r\n    & label {\r\n      outline: 0 !important;\r\n      cursor: not-allowed !important;\r\n    }\r\n  }\r\n\r\n  .hidden {\r\n    display: none !important;\r\n  }\r\n\r\n  .invisible {\r\n    &,\r\n    & * {\r\n      visibility: hidden !important;\r\n      transition: none !important;\r\n      animation: none !important;\r\n    }\r\n  }\r\n\r\n  .transparent {\r\n    background: transparent !important;\r\n  }\r\n\r\n  .overflow {\r\n    &-auto {\r\n      overflow: auto !important;\r\n    }\r\n\r\n    &-hidden {\r\n      overflow: hidden !important;\r\n\r\n      &-y {\r\n        overflow-y: hidden !important;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import '../../scss/common.scss';\r\n\r\n.badge {\r\n  background-color: $themePrimary;\r\n  display: inline-flex;\r\n  color: $white;\r\n  padding: 2px 6px;\r\n  border-radius: 4px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  min-height: 12px;\r\n  font-weight: 400;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={badge:"XPJG5DuSl3OLGqdLZkdA"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/.pnpm/react@17.0.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/** @license React v17.0.1
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_require__("./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./stories/components/badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Badge});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./stories/components/badge/Badge.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Badge_module.A,options);let badge_Badge_module=Badge_module.A&&Badge_module.A.locals?Badge_module.A.locals:void 0;var lib=__webpack_require__("./node_modules/.pnpm/@spfxappdev+utility@1.4.1/node_modules/@spfxappdev/utility/lib/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Badge=function(props){return react.createElement("div",_object_spread_props(_object_spread({},props),{className:(0,lib.cssClasses)(badge_Badge_module.badge,"items-center","no-wrap",props.className)}),props.children)};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"stories/components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-badge-Badge-stories-mdx.0366ff51.iframe.bundle.js.map