// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import theme from "../theme";
import nodeHttp1 from "../assets/img/nodeHttp1.png";
import nodeInit1 from "../assets/img/nodeInit1.png";
import nodeInit2 from "../assets/img/nodeinit2.png";
import nodeDummyBdd from "../assets/img/nodeDummyBdd.png";
import nodeAutoReload from "../assets/img/nodeAutoReload.png";
import nodeFirstRoute from "../assets/img/nodeFirstRoute.png";
import nodeFirstPost from "../assets/img/nodeFirstPost.png";
import nodeGetPost from "../assets/img/nodeGetPost.png";
import nodeMiddleware from "../assets/img/nodeMiddleware.png";
import apiProjectStruct from "../assets/img/apiProjectStruct.png";
import nodeStruct2 from "../assets/img/nodeStruct2.png";

export default class NodePrez extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Node JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Construisez votre backend
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Qu'est ce que c'est?
          </Heading>
          <p>
            Node.js® est un environnement d’exécution JavaScript construit sur
            le moteur JavaScript V8 de Chrome.
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Pourquoi ?
          </Heading>
          <List>
            <ListItem>Performance</ListItem>
            <ListItem>Simplicité de développement</ListItem>
            <ListItem>Mutualisation avec le front</ListItem>
            <ListItem>Scalablilité</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Une approche différente
          </Heading>
          <img src={nodeHttp1} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Express.js
          </Heading>
          <BlockQuote>
            <Quote>
              Infrastructure d'applications Web Node.js minimaliste et flexible.
              Grâce à cette infrastructure, la création d'une API robuste est
              simple et rapide.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            votre première application
          </Heading>
          <ul style={{ textAlign: "left" }}>
            <li >mkdir myApp</li>
            <li>cd myApp</li>
            <li>touch app.js</li>
            <li>npm init</li>
            <li>npm i express --save</li>
            <li>
              npm i @babel/cli @babel/node @babel/plugin-transform-runtime
              --save-dev
            </li>
            <li>
              npm i @babel/preset-env @babel/core @babel/helper-plugin-utils
              --save-dev
            </li>
          </ul>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            votre première application
          </Heading>
          <img src={nodeInit2} alt="react" />
          <p>
            Création d'un .gitignore{" "}
            <a href="https://github.com/github/gitignore/blob/master/Node.gitignore">
              avec ce modèle
            </a>
          </p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Données factices
          </Heading>
          <img src={nodeDummyBdd} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Auto reload
          </Heading>
          <img src={nodeAutoReload} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Première route GET
          </Heading>
          <img src={nodeFirstRoute} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Première route POST
          </Heading>
          <img src={nodeFirstPost} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Utilisation de paramètres
          </Heading>
          <img src={nodeGetPost} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Exercice
          </Heading>
          Créez vos premières api GET et POST.
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Les middlewares
          </Heading>
          <p>
            Micro fonctionnalitées qui s'enchaînent en partageant jusqu'à
            quatres paramètres
          </p>
          <List>
            <ListItem>
              <strong>err</strong> Les erreurs
            </ListItem>
            <ListItem>
              <strong>req</strong> La requête
            </ListItem>
            <ListItem>
              <strong>res</strong> La réponse
            </ListItem>
            <ListItem>
              <strong>next</strong> Callback vers la prochaine fonction
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Votre premier middleware
          </Heading>
          <img src={nodeMiddleware} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Organisation projet
          </Heading>
          <img src={apiProjectStruct} alt="react" />
          <img src={nodeStruct2} alt="react" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Organisation projet
          </Heading>
          <List>
            <ListItem>
              <strong>Controllers</strong> routes & logique
            </ListItem>
            <ListItem>
              <strong>Utils</strong> code mutualisé
            </ListItem>
            <ListItem>
              <strong>Middlewares</strong> Middleware custom
            </ListItem>
            <ListItem>
              <strong>Models</strong> Représentation de la donnée.
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Mongo DB
          </Heading>
          <p>BDD NoSql orienté document ne nécessitant pas de schéma</p>
          <List>
            <ListItem>Vitesse de développement</ListItem>
            <ListItem>- compléxité</ListItem>
            <ListItem>+ Scalabilité</ListItem>
            <ListItem>+ Performances</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Mongoose : vocabulaire
          </Heading>
          <List>
            <ListItem>
              <strong>Collections</strong>
              <br /> ~ database, regroupement de documents
            </ListItem>
            <ListItem>
              <strong>Documents</strong>~ row
            </ListItem>
            <ListItem>
              <strong>Fields</strong>
            </ListItem>
            <ListItem>
              <strong>Schema</strong>
            </ListItem>
            <ListItem>
              <strong>Models</strong>
              <br />
              Instance d'un schéma
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            "demo"
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            TP
          </Heading>
          <List>
            <ListItem>npm install mongoose --save</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Gestion de fichiers
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Liens utiles
          </Heading>
          <List>
            <ListItem>
              <a href="https://expressjs.com">Doc express</a>
            </ListItem>
            <ListItem>
              <a href="https://mongoosejs.com">Doc mongoose</a>
            </ListItem>
            <ListItem>
              <a href="https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57">
                Article mongoose
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/quentinchap/exempleExpressMongoose">
                Exemples du cours
              </a>
            </ListItem>
            <ListItem>
              <a href="https://mlab.com">Sass Mongo</a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/expressjs/multer">doc. multer</a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
