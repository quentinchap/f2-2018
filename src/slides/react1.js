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
import gitBranch from "../assets/img/git-branch.png";
import gitFlow from "../assets/img/gitflow.png";

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
            <li>Orienté composant</li>
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
            <ListItem>create-react-app: npm install --global create-react-app</ListItem>
          </List>
          Lancer la création de votre app: create-react-app memory
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Bonus: clients graphiques
          </Heading>
          <List>
            <ListItem>Gitkarken</ListItem>
            <ListItem>Tortoise git</ListItem>
            <ListItem>Plugin IDE</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Bonus: GitFlow
          </Heading>
          <img src={gitFlow} />
        </Slide>
      </Deck>
    );
  }
}
