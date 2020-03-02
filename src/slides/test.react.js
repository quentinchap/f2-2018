// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import { LiveProvider } from "react-live";
import { LiveEditor } from "react-live";
import coverage from "../assets/img/test/coverage.png";

const conf = `
"jest": {
  "setupTestFrameworkScriptFile": "jest-enzyme",
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFiles": ["./src/setupTests.js"],
  "testEnvironment": "enzyme",
},`;

const configFile = `
// ./src/setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });`;

const firstSnap = `
import React from 'react';
import { shallow } from 'enzyme';
import FormButtons from './FormButtons';

describe('MyComponent', () => {
  it('snaptest', () => {
    const component = mount(<FormButtons debug cancel={() => console.log("coucou")} />);
    expect(component).toMatchSnapshot();
  });
});`;

const firstTest = `
import React from "react";
import { mount } from "enzyme";
import FormButtons from "./FormButtons";

describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = mount(<FormButtons debug cancel={() => console.log("coucou")} />);
    expect(component.find('Button')).toBeDefined();
    expect(component.find('Button')).toHaveLength(2);
  });
});`;


const testClick = `
const clickFn = jest.fn();

it('Verify Buttons', () => {
  const component = mount(<FormButtons debug cancel={clickFn} />);
  component.find('Button').at(1).simulate('click');
  expect(clickFn).toHaveBeenCalled();
});
`;


const TestReactPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Tests ReactJS
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Mettre en place des tests ReactJS
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Comment ?
      </Heading>
      <List>
        <ListItem>Composant partagés</ListItem>
        <ListItem>Commencé par les composant simple et indépendant.</ListItem>
        <ListItem>Ensuite les composants auxiliaires</ListItem>
        <ListItem>Terminez par les plus complexes</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Quoi ?
      </Heading>
      tout sauf:
      <List>
        <ListItem>Les bibliothèques</ListItem>
        <ListItem>Les éléments statiques</ListItem>
        <ListItem>Les éléments de styles inline</ListItem>
        <ListItem>Les composants importés</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Lib et outils
      </Heading>
      <List>
        <ListItem>Jest</ListItem>
        <ListItem>Riteway</ListItem>
        <ListItem>Enzyme</ListItem>
        <ListItem>...</ListItem>
      </List>

    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(TestReactPrez);
