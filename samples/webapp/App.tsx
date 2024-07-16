import React, { useState } from 'react';
import { Badge, Autocomplete, AddNewToolbox, Plugins, IAddNewToolboxItem, ListItem, IconPicker, Loading, Card, CardSection, CardAction, InlineColorPicker } from '../../src/controls';
import { DefaultButton, IColor, Icon, PrimaryButton, ThemeProvider, createTheme } from '@fluentui/react';

const myTheme = createTheme({
    palette: {
        themePrimary: '#0078d7',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralSecondaryAlt: '#8a8886',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    }
});

const App: React.FC = () => {
    const [showLoading, setShowLoading] = useState(false);
    const defaultColor: IColor = { hex: 'aeaeae', str: '#aeaeae', r: 174, g: 174, b: 174, a: 100, h: 0, s: 0, v: 68.24 };
    const [currentColor, setCurrentColor] = useState(defaultColor);

    return (
        <ThemeProvider applyTo='body' theme={myTheme}>
            <div className="App">
                <h1 className='flex'>Hello, React with TypeScript and SCSS!</h1>
                <div>
                    <Badge onClick={() => alert('Button clicked!')}>Click me</Badge>
                </div>
                <div>
                    <Autocomplete
                        onLoadSuggestions={(newValue: string) => {
                            console.log("load suggestions", newValue);
                            setTimeout(() => {
                                console.log("suggestions loaded", newValue);
                                // this.setState({
                                //     lastAutocompleteVal: newValue,
                                //     lastAutocompleteResult: newValue,
                                // });
                            }, 4000);
                        }}
                        onRenderSuggestions={(): JSX.Element => {
                            return <div>Hello my friend</div>
                            // if (!this.state.lastAutocompleteVal) {
                            // return <Spinner />;
                            // }

                            // return (
                            // <div>Hello from result {this.state.lastAutocompleteResult}</div>
                            // );
                        }}
                        flyoutClassName={"flyout"}
                    />
                </div>
                <div>
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
                </div>
                <h3>Icon Picker</h3>
                <IconPicker onIconChanged={(iconName: string) => {
                    console.log("SSC iconName", iconName);
                }} />
                <h3>Loading</h3>
                <PrimaryButton
                    onClick={() => {
                        setShowLoading(true);

                        var timer = setTimeout(() => {
                            setShowLoading(false);
                        }, 3000);
                    }}
                >Show Loading</PrimaryButton>

                <PrimaryButton
                    onClick={() => {
                        Plugins.AlertDialog.open({
                            content: "Sicher?"
                        });
                    }}
                >Show Alert</PrimaryButton>

                <Loading hidden={!showLoading} />
            </div>

            <div>
                <h3>CARDS</h3>
                <Card style={{ width: "400px" }}>
                    <CardSection>
                        <h4>Card title</h4>
                        <h5>Subtitle</h5>
                    </CardSection>
                    <hr />

                    <CardSection>bla</CardSection>

                    <CardAction>
                        <PrimaryButton>Action 1</PrimaryButton>
                        <DefaultButton>Action 2</DefaultButton>
                    </CardAction>
                </Card>

            </div>

            <h3>Inline Color Picker</h3>
            <InlineColorPicker />
        </ThemeProvider>
    );
};

export default App;