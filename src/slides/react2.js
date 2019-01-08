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
import hdfs from "../assets/img/mongo/hdfs.png";
import clusteredIndex from "../assets/img/mongo/clusteredIndex.png";
import column2 from "../assets/img/mongo/column2.png";
import cap from "../assets/img/mongo/cap.png";
import normalization from "../assets/img/mongo/normalization.png";
import normalization2 from "../assets/img/mongo/normalization2.png";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

let callBackExample = `setTimeout(function(){ alert("Hello"); }, 3000);`;
let promiseExample = `
let promise1 = new Promise(
  (resolve, reject) =>
  {
    resolve('Success!');    
  }
  //reject('error');
  );

promise1.then(
  res => {
    console.log(res);  
  }
  ,err => {
    console.error(err);
  }
);
`;
let promiseCatchExample = `
promise1.then(
  res => {
    console.log(res);  
  }
  ,err => {
    console.error(err);
  }
)
.then(...)
.catch(error => {
  handleError(error);
});
`;

let asyncExample = `async function myAsyncF() {
  try {
      const result = await promise;
  } catch (err) {
      handleError(err);
  }
  return 'finish'; 
}`;

const React2Prez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React - Part 2
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Asynchrone et API REST
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Qu'est ce que l'asynchrone
      </Heading>
      <List>
        <ListItem>Monothread</ListItem>
        <ListItem>Ne pas bloquer l'execution</ListItem>
        <ListItem>
          Lancer une action y revenir quand le resultat est prêt.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Comment ?
      </Heading>
      <List>
        <ListItem>Callback</ListItem>
        <ListItem>Promesses</ListItem>
        <ListItem>Async/wait</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Callback
      </Heading>
      <p>Fonction passé en paramètre à une autre fonction</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Callback - exemple
      </Heading>
      <LiveProvider code={callBackExample}>
        <LiveEditor />
        <LivePreview />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Callback - Avantages / Inconvénients
      </Heading>
      <List>
        <ListItem>+ Simple</ListItem>
        <ListItem>- Illisible sur des cas complexes</ListItem>
        <ListItem>- Gestion des erreurs</ListItem>
        <ListItem>- Composition compliqué</ListItem>
      </List>
      <p>« Callback Hell », « Pyramide of Doom »</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les promesses
      </Heading>
      <List>
        <ListItem>JS natif depuis l'ES6</ListItem>
        <ListItem>
          Objet non disponible pour le moment mais qui le sera prochainement
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les promesses
      </Heading>
      <p>
        p.then((valeur) =>{" "}
        {
          // Promesse tenue
        }
        , (raison) =>{" "}
        {
          // Rejet de la promesse
        }
        );
      </p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les promesses - exemple
      </Heading>
      <LiveProvider code={promiseExample}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les promesses - exemple
      </Heading>
      <LiveProvider code={promiseCatchExample}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les promesses - Avantages / Inconvénients
      </Heading>
      <List>
        <ListItem>+ Gestion d'erreurs plus simple en utilisant catch</ListItem>
        <ListItem>+ Composable</ListItem>
        <ListItem>+ Lisible</ListItem>
        <ListItem>+ Fiabilité</ListItem>
        <ListItem>- Lisibilité</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Async / wait
      </Heading>
      <List>
        <ListItem>Apparait avec ES7</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Async / wait - Exemple
      </Heading>
      <LiveProvider code={asyncExample}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Async / wait - Avantages
      </Heading>
      reprend les avantages des promesses en rapprochant la syntaxe de problèmes
      synchrones
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Consommer une API
      </Heading>
      <LiveProvider code="npm install axios --save">
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Consommer une API - Get
      </Heading>
      <LiveProvider
        code={`
      import axios from 'axios';
      import React, {Component} from 'react';

      export default class PersonList extends Component {
        state = {
          persons: []
        }
      
        componentDidMount() {
          axios.get('url/api/users')
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
            })
        }
      
        render() {
          return (
            <ul>
              { this.state.persons.map(
                person =>
                 <li>{person.name}</li>
                 )}
            </ul>
          )
        }
      }
      `}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Consommer une API - Post/Delete
      </Heading>
      <LiveProvider
        code={`
        axios.post('ulr/api/users', { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        axios.delete('url/api/users/\${this.state.id}')
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      `}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Consommer une API - Astuce
      </Heading>
      <LiveProvider
        code={`
import axios from 'axios';

export default axios.create({
  baseURL: 'url/api/'
});

import API from '../api';
      `}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Consommer une API - Async/wait
      </Heading>
      <LiveProvider
        code={`
const res = await API.delete('/users/\${this.state.id}');
      `}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        TP
      </Heading>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(React2Prez);
