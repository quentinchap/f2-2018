// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import theme from "../theme";
import react1 from "../assets/img/react1.png";
import react1Archi from "../assets/img/react1-archi.png";
import react1Package from "../assets/img/react1-package.png";
import react1Class from "../assets/img/react1-class.png";
import react1ArrowFunction from "../assets/img/react1ArrowFunction.png";
import react1Spread from "../assets/img/react1Spread.png";
import react1Var from "../assets/img/react1Var.png";
import react1lifCycle from "../assets/img/react1lifCycle.png";
import react1Export from "../assets/img/react1Export.png";
import react1FirstComponent from "../assets/img/react1FirstComponent.png";

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
            React JS - Part. 1
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
          <img src={react1} />
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
          <img src={react1Archi} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            package.json
          </Heading>
          <img src={react1Package} />
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
            <ListItem>Actuellement ES2018</ListItem>
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
            <ListItem>Actuellement ES2018</ListItem>
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
          <img src={react1Var} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Class
          </Heading>
          <img src={react1Class} />
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Arrow function
          </Heading>
          <img src={react1ArrowFunction} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Spread operator
          </Heading>
          <img src={react1Spread} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018) - Module, import & export
          </Heading>
          <img src={react1Export} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Js moderne (ES2018)
          </Heading>
          <a href="https://medium.com/front-end-hacking/javascript-whats-new-in-ecmascript-2018-es2018-17ede97f36d5">
            Et bien plus encore
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Life cycle
          </Heading>
          <img src={react1lifCycle} />
          <br />
          <a href="https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5">
            React Cheatsheet 
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Premier composant
          </Heading>
          <img src={react1FirstComponent} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - State
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Reactions aux événements
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Props
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - React router
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Les formulaires
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            A vous de jouer
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - JSS
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React - Material-ui
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Prop Drilling - Context
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Prop Drilling - Redux
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
