// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import react1 from "../assets/img/react1.png";
import react1Archi from "../assets/img/react1-archi.png";
import react1Archi2 from "../assets/img/react1Archi.png";
import react1Package from "../assets/img/react1-package.png";
import react1Class from "../assets/img/react1-class.png";
import react1ArrowFunction from "../assets/img/react1ArrowFunction.png";
import react1Spread from "../assets/img/react1Spread.png";
import react1Var from "../assets/img/react1Var.png";
import react1lifCycle from "../assets/img/react1lifCycle.png";
import react1Export from "../assets/img/react1Export.png";
import react1State from "../assets/img/react1State.png";
import react1Prop from "../assets/img/react1Prop.png";
import react1DefThis from "../assets/img/react1DefThis.png";
import react1Router from "../assets/img/react1Router.png";
import react1Form from "../assets/img/react1Form.png";
import react1Form2 from "../assets/img/react1Form2.png";

import react1PropDrilling from "../assets/img/react1PropDrilling.png";
import react1Consumer from "../assets/img/react1Consumer.png";
import react1Provider from "../assets/img/react1Provider.png";
import react1Jss from "../assets/img/react1Jss.png";
import react1jest from "../assets/img/react1jest.png";
import { LiveProvider } from "react-live";
import { LiveEditor } from "react-live";

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  test() {
    alert(this.state.message);
  }

  updateMessage(message) {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.updateMessage(event.target.value)}
        />
        <button onClick={() => this.test()}>Valider</button>
      </div>
    );
  }
}
let startProject = `npx create-react-app mon-app
cd mon-app
npm start`;

let react1FirstComponent = `
import React, {Component} from "react";

export default class FirstComponent extends Component {
  render(){
    return(<div>Bonjour</div>);
  }
}
`;

let reactToAnEvent = `
class FirstComponent extends Component {
  ...
  update(message) {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={
            event => this.update(event.target.value)}
        />
        <button onClick={
          () => alert(this.state.message)
          update}>Valider</button>
      </div>
    );
  }
}
`;

let reactFirstComponentPureFunction = `
import React from "react";

const FirstComponent = () => (<div>Bonjour</div>);
export default FirstComponent;

`;
let reactFirstComponentPureFunctionParam = `
import React from "react";

const FirstComponent = ({name}) => (<div>Bonjour {name}</div>);
export default FirstComponent;

// Utilisation
<FirstComponent name="toto" />
// Bonjour toto

`;
let hookUseState = `
import React, { useState } from 'react';

const Example = () => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
`;

export default class React1Prez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Premiers pas avec reactJS
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Qu'est ce que c'est?
          </Heading>
          <ul>
            <li>Bibliothèque javascript</li>
            <li>Orientée composant</li>
            <li>Flexible</li>
            <li>Open-source piloté par Facebook</li>
          </ul>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Des composants encore des composant
          </Heading>
          Un composant c'est:
          <List>
            <ListItem>Une vue</ListItem>
            <ListItem>Un style</ListItem>
            <ListItem>Un comportement</ListItem>
            <ListItem>Une api</ListItem>
          </List>
          Généralement regroupé dans un unique fichier (JSX)
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Structure d'un front react
          </Heading>
          <img src={react1} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Mutualisation de la donnée
          </Heading>
          <List>
            <ListItem>Chaque composant reçoit des données en entrée</ListItem>
            <ListItem>
              Chaque composant est respossable de l'état remonté à son parent
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Virtual DOM
          </Heading>
          <List>
            <ListItem>Simulation d'un DOM</ListItem>
            <ListItem>Réconciliation avec optimisation</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Get started
          </Heading>
          Les outils nécessaires
          <List>
            <ListItem>Node</ListItem>
            <ListItem>Npm</ListItem>
            <ListItem>
              create-react-app: npm install --global create-react-app
            </ListItem>
          </List>
          Lancer la création de votre app
          <br /> <strong>create-react-app nom-app</strong>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Architecture
          </Heading>
          <img src={react1Archi} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            package.json
          </Heading>
          <img src={react1Package} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            A vous de jouer
          </Heading>
          <p>Si vous avez des problèmes avec npm sur les pc de la salle</p>
          <List>
            <ListItem>
              <strong>glitch.me</strong> https://bit.ly/2Qs4SAU
            </ListItem>
            <ListItem>PC perso</ListItem>
            <ListItem>Modification du package.json</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Le javascript
          </Heading>
          <List>
            <ListItem>Interprété</ListItem>
            <ListItem>Orienté objet</ListItem>
            <ListItem>Impératif ou fonctionnel</ListItem>
            <ListItem>Standard ECMAScript</ListItem>
            <ListItem>Une version / an</ListItem>
            <ListItem>Actuellement ES2019 bientôt ES2020</ListItem>
            <ListItem>Un langage pour tout les besoins</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Javascript - Compatibilité
          </Heading>
          <List>
            <ListItem>Tout les navigateurs sont compatible ES5</ListItem>
            <ListItem>Quelques un ES6</ListItem>
          </List>
          <p>Et les autres ? Et l'ES2018 ?</p>
          <List>
            <ListItem>Transpilleurs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Javascript - Transpilleurs
          </Heading>
          <List>
            <ListItem>BabelJS</ListItem>
            <ListItem>Transforme ESx -> ES5</ListItem>
            <ListItem>Retro compatibilité polyfills</ListItem>
            <ListItem>Standard ECMAScript</ListItem>
            <ListItem>Une version / an</ListItem>
            <ListItem>
              <a href="https://medium.com/front-end-hacking/a-world-of-javascript-transpilers-b3b7b880a1be">
                En savoir plus
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Les variables
          </Heading>
          <img src={react1Var} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Class
          </Heading>
          <img src={react1Class} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Arrow function
          </Heading>
          <img src={react1ArrowFunction} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Spread operator
          </Heading>
          <img src={react1Spread} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Module, import & export
          </Heading>

          <img src={react1Export} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018)
          </Heading>
          <a href="https://medium.com/front-end-hacking/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5">
            [ES2018] bien plus encore
          </a>
          <br />
          <a href="https://medium.com/@selvaganesh93/javascript-whats-new-in-ecmascript-2019-es2019-es10-35210c6e7f4b">
            [ES2019] What's new ?
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Initialisez un projet
          </Heading>
          <LiveProvider code={startProject}>
            <LiveEditor />
          </LiveProvider>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Premier composant
          </Heading>
          <LiveProvider code={react1FirstComponent}>
            <LiveEditor />
          </LiveProvider>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React
          </Heading>
          <img src={react1Archi2} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - State
          </Heading>
          <p>Chaque composant posséde un état (state) qui lui est propre</p>
          <br />
          <img src={react1State} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Reactions aux événements
          </Heading>
          <FirstComponent />
          <LiveProvider code={reactToAnEvent}>
            <LiveEditor />
          </LiveProvider>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Reactions aux événements
          </Heading>
          <a href="https://codesandbox.io/s/optimistic-sun-61ye2?fontsize=14&hidenavigation=1&theme=dark">
            Exemple 1
          </a>
          <br />
          <a href="https://codepen.io/quentChap/full/ebNQwa">Exemple 2</a>
          <br />
          <a href="https://frontarm.com/toolbox/react-events-cheatsheet/">
            Liste d'événements
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Life cycle
          </Heading>
          <img src={react1lifCycle} alt="react" style={{ maxWidth: "80%" }} />
          <br />
          <a href="https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5">
            React Cheatsheet 
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Props
          </Heading>
          <List>
            <ListItem>Passer des paramêtres</ListItem>
            <ListItem>Remonter de mises à jours d'état</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Props
          </Heading>
          <img src={react1Prop} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Definition du this
          </Heading>
          <p>
            Sans prendre de précaution en passant des fonctions en paramètre le
            "this" en vigueur à l'appel disparaît.
          </p>
          <img src={react1DefThis} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Composant pure
          </Heading>
          <LiveProvider code={reactFirstComponentPureFunction}>
            <LiveEditor />
          </LiveProvider>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - les paramètres
          </Heading>
          <LiveProvider code={reactFirstComponentPureFunctionParam}>
            <LiveEditor />
          </LiveProvider>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Les hooks
          </Heading>
          <p>
            Disponible depuis React 16.8. Permet de profiter des avantages des
            classe sans class
          </p>
          <LiveProvider code={hookUseState}>
            <LiveEditor />
          </LiveProvider>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Les hooks
          </Heading>
          <p>
            Deux principaux, le hook d'état (remplacement de this.state et
            this.setState) et d'effet (remplacement des fonctions du lifecycle)
          </p>
          <a href="https://fr.reactjs.org/docs/hooks-intro.html">Doc</a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - React router
          </Heading>
          <p>npm install react-router-dom</p>
          <img src={react1Router} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Les formulaires
          </Heading>
          <img src={react1Form} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Les formulaires
          </Heading>
          <img src={react1Form2} alt="react" />
          <br />
          <p style={{ fontSize: "0.7em" }}>
            &lt;PhoneInput name="Mobile" required={"{true}"} />
          </p>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            A vous de jouer
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Prop Drilling - Context
          </Heading>
          <img src={react1PropDrilling} alt="react" />
          <br />
          <a
            style={{ fontSize: "0.5em" }}
            href="https://www.carlrippon.com/playing-with-the-context-api-in-react-16-3/"
          >
            Source
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Prop Drilling - Context
          </Heading>
          <img src={react1Provider} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Prop Drilling - Context
          </Heading>
          <img src={react1Consumer} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - JSS
          </Heading>
          <img src={react1Jss} alt="react" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Material-ui
          </Heading>
          <a href="https://material-ui.com">
            React components that implement Google's Material Design.
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Eslint
          </Heading>
          <List>
            <ListItem>Aide à l'apprentissage</ListItem>
            <ListItem>Prévient des bugs</ListItem>
            <ListItem>Aide à la standardisation du code</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Tests
          </Heading>
          <List>
            <ListItem>npm run test</ListItem>
            <ListItem>lib utilisée Jest</ListItem>
            <ListItem>
              Doc react:{" "}
              <a href="https://jestjs.io/docs/en/tutorial-react">ici</a>
            </ListItem>
          </List>
          <img src={react1jest} alt="react" />
        </Slide>
      </Deck>
    );
  }
}
