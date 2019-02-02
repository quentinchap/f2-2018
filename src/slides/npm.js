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
import { withStyles } from "@material-ui/core";
import { LiveProvider, LiveEditor } from "react-live";


const packagejson = `
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node_modules/.bin/nodemon app.js --exec babel-node --",
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "nodemon": "^1.18.9",
    "@babel/core": "7.1.2",
    "@babel/node": "7.0.0",
    "@babel/preset-env": "*",
    "dotenv": "^6.2.0"
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "helmet": "^3.15.0",
    "mongoose": "^5.4.0",
    "multer": "^1.4.1"
  },
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
      ]
    ]
  }
}`;

const NpmPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        NPM
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Maîtrisez vos dépendances
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Définition
      </Heading>
      <BlockQuote>
      <Quote>
      npm est le gestionnaire de paquets officiel de Node.js. Depuis la version 0.6.3 de Node.js, npm fait partie de l'environnement et est donc automatiquement installé par défaut. npm fonctionne avec un terminal et gère les dépendances pour une application. Il permet également d'installer des applications Node.js disponibles sur le dépôt npm.
      </Quote>
      <Cite>Wikipédia</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Installation
      </Heading>
      https://nodejs.org/en/
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Node packaged modules
      </Heading>
      <p>Deux modes d'installation</p>
      <List>
        <ListItem><strong>Local</strong> à la racine du projet. Possédé par l'utilisateur courant</ListItem>
        <ListItem><strong>Global</strong> installé {'{prefix}'}/lib/node_modules/ et possédé par root</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Maîtriser son installation
      </Heading>
      <List>
        <ListItem>npm config list</ListItem>
        <ListItem>npm config get prefix</ListItem>
        <ListItem>npm config set prefix=/test/.node_modules_global</ListItem>
      </List>
      Possibilité de passer par un fichier .npmrc à la base du projet pour des paramètrages spécifiques au projet.
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les dépendances globales
      </Heading>
      <List>
        <ListItem>npm install toto --global, npm install toto -g, npm i toto -g</ListItem>
        <ListItem>npm list --gobal, npm list -g</ListItem>
        <ListItem>npm list -g --depth=0</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les dépendances locales
      </Heading>
      <List>
        <ListItem>npm install toto --save, npm i toto --save</ListItem>
        <ListItem>npm install, npm i</ListItem>
        <ListItem>npm install toto@1.0.0</ListItem>
      </List>
      <p> --save non obligatoire dans les dernière versions.<br /> --save-dev pour les install concernant des outils de dev.</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Update
      </Heading>
      <List>
        <ListItem>npm outdated</ListItem>
        <ListItem>npm update</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Package.json
      </Heading>
      <LiveProvider code={packagejson}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Semantic Versioning
      </Heading>
      <p>x.y.z</p>
      <List>
        <ListItem>x majeur </ListItem>
        <ListItem>y mineur</ListItem>
        <ListItem>z patch</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Semantic Versioning
      </Heading>
      <List>
        <ListItem><strong>version</strong> Must match version exactly</ListItem>
        <ListItem><strong>>version</strong> Must be greater than version</ListItem>
        <ListItem><strong>>=version</strong> etc</ListItem>
        <ListItem><strong>{'<version'}</strong></ListItem>
        <ListItem><strong>{'<=version'}</strong></ListItem>
        <ListItem><strong>~version</strong> "Approximately equivalent to version"</ListItem>
        <ListItem><strong>^version</strong> "Compatible with version"</ListItem>
        <ListItem>1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0</ListItem>
        <ListItem>...</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Cache
      </Heading>
      <p>ls ~/.npm</p>
      <List>
        <ListItem>npm cache clean</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Ressources
      </Heading>
      <List>
        <ListItem>
          <a href="https://www.sitepoint.com/beginners-guide-node-package-manager/">
            A Beginner’s Guide to npm
          </a>
        </ListItem>
        <ListItem>
          <a href="https://nodejs.org/en/">
            NodesJs
          </a>
        </ListItem>
        <ListItem>
          <a href="https://docs.npmjs.com/files/package.json">
            Doc.
          </a>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(NpmPrez);
