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
import apiStruct2 from "../assets/img/apiStruct2.png";
import apiStruct from "../assets/img/apiStruct.png";
import apiRestful from "../assets/img/apiRestful.png";
import apiResful2 from "../assets/img/apiResful2.png";

export default class RestFullPrez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Les API Restfull
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Qu'est ce que c'est? Pourquoi les utiliser ?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <p>
            <strong>API</strong> Application Programming Interface
            <br />
            Moyen de communication entre deux applications
            <br />
            Moyen d'utiliser un framework
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Pourquoi?
          </Heading>
          <List>
            <ListItem>Utiliser des services externes</ListItem>
            <ListItem>Mutualiser une traitement</ListItem>
            <ListItem>Multi-device</ListItem>
            <ListItem>Automatisation</ListItem>
            <ListItem>Développement de service</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            REST
          </Heading>
          <p>
            <strong>REST</strong> Representational state transfert, inventé en
            2000.
          </p>
          <List>
            <ListItem>Basé sur http</ListItem>
            <ListItem>Sans état</ListItem>
            <ListItem>Orienté client-serveur</ListItem>
            <ListItem>Uniforme</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les ressources
          </Heading>
          <List>
            <ListItem>Médias</ListItem>
            <ListItem>Objets</ListItem>
            <ListItem>Data</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les requêtes
          </Heading>
          <img src={apiStruct} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les réponses
          </Heading>
          <img src={apiStruct2} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Exemple de services disponible
          </Heading>
          <List>
            <ListItem>
              <strong>Instagram</strong>: https://www.instagram.com/developer
            </ListItem>
            <ListItem>
              <strong>Facebook</strong>:
              https://developers.facebook.com/?locale=fr_FR
            </ListItem>
            <ListItem>
              <strong>Github</strong>: https://developer.github.com/v3/
            </ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Utiliser des noms
          </Heading>
          <BlockQuote>
            <Quote>/cars : ok </Quote>
            <Quote>/getAllCars : ko </Quote>
          </BlockQuote>
          <br />
          <img src={apiRestful} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Les sous ressources
          </Heading>

          <BlockQuote>
            <Quote>
              GET /cars/711/drivers/ Returns a list of drivers for car 711
            </Quote>
            <Quote>GET /cars/711/drivers/4 Returns driver #4 for car 711</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - HATEOAS
          </Heading>
          <p>Hypermedia as the Engine of Application State</p>
          <img src={apiResful2} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Filter, sorting, selection & pagin
          </Heading>
          <BlockQuote>
            <Quote>
              <p>GET /cars?color=red</p>
              <p>GET /cars?sort=-manufactorer,+model</p>
              <p>GET /cars?fields=manufacturer,model,id,color</p>
              <p>GET /cars?offset=10&limit=5</p>
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Version
          </Heading>
          <p>/api/v1/...</p>
          <p>/api/v1.5/...</p>
          <p>/api/v2/...</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Allow overriding HTTP method
          </Heading>
          <List>
            <ListItem>GET ne doit pas générer d'update</ListItem>
            <ListItem>Utiliser le pluriel</ListItem>
            <ListItem>Headers Content-type et Accept</ListItem>
            <ListItem>Implémenter les bons codes d'erreurs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Restful - Autres régles
          </Heading>
          <List>
            <ListItem>GET ne doit pas générer d'update</ListItem>
            <ListItem>Utiliser le pluriel</ListItem>
            <ListItem>Headers Content-type et Accept</ListItem>
            <ListItem>Implémenter les bons codes d'erreurs</ListItem>
            <ListItem>Autoriser la surcharge des méthodes HTTP X-HTTP-Method-Override</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
