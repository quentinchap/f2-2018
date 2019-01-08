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
import { LiveProvider, LiveEditor } from "react-live";

const TestApi = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Maitrisez votre BDD - Part 2
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Technologies et outils
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Généralités
      </Heading>
      <p>
        <strong>But d'un BDD</strong> Fournir des réponses à des requêtes. Mise
        en place d'index pour optimiser ces requêtes.
      </p>
      <p>
        <strong>Comment distribuer les informations ?</strong>
      </p>
      <p>
        <strong>
          Comment conserver un système d'indexation garantissant les performaces
          ?
        </strong>
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Vocabulaire
      </Heading>
      <List>
        <ListItem>
          <strong>Les arbres</strong> Structure courante de l'index.
        </ListItem>
        <ListItem>
          <strong>Sharding</strong> Technique de distribution de donnée.
        </ListItem>
        <ListItem>
          <strong>Chunk</strong> Fragment de donnée.
        </ListItem>
        <ListItem>
          <strong>Elasticité</strong> Capacité à s'adapter dynamiquement au
          nombre de serveur.
        </ListItem>
        <ListItem>
          <strong>Hachage</strong> Structure de données de type clé-valeur
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        HDFS
      </Heading>
      <img src={hdfs} />
      <p>Spark, HBase, ect.</p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Clustered index
      </Heading>
      <img src={clusteredIndex} />
      <p>Mongo DB, ect.</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Table de hachage distribuée (DHT)
      </Heading>
      <List>
        <ListItem>
          <strong>Sharding</strong> Technique de distribution de donnée.
        </ListItem>
        <ListItem>
          <strong>Chunk</strong> Fragment de donnée.
        </ListItem>
        <ListItem>
          <strong>Elasticité</strong> Capacité à s'adapter dynamiquement au
          nombre de serveur.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Choisissez votre base de données NoSQL
      </Heading>
      <List>
        <ListItem>
          <strong>Sharding</strong> Technique de distribution de donnée.
        </ListItem>
        <ListItem>
          <strong>Chunk</strong> Fragment de donnée.
        </ListItem>
        <ListItem>
          <strong>Elasticité</strong> Capacité à s'adapter dynamiquement au
          nombre de serveur.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Mongodb replica set
      </Heading>
      <List>
        <ListItem>
          <strong>Sharding</strong> Technique de distribution de donnée.
        </ListItem>
        <ListItem>
          <strong>Chunk</strong> Fragment de donnée.
        </ListItem>
        <ListItem>
          <strong>Elasticité</strong> Capacité à s'adapter dynamiquement au
          nombre de serveur.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Moteur de recherche - Elastic
      </Heading>
      https://medium.com/@xoor/indexing-mongodb-with-elasticsearch-2c428b676343
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Moteur de recherche - Elastic
      </Heading>
      <List>
        <ListItem>
          <strong>Sharding</strong> Technique de distribution de donnée.
        </ListItem>
        <ListItem>
          <strong>Chunk</strong> Fragment de donnée.
        </ListItem>
        <ListItem>
          <strong>Elasticité</strong> Capacité à s'adapter dynamiquement au
          nombre de serveur.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Liens utiles
      </Heading>
      <List>
        <ListItem>
          <a href="https://blog.talanlabs.com/etude-comparative-bdd-relationnelle-versus-nosql/">
            Comparatif techno BDD
          </a>
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

export default withStyles(theme.matUI)(TestApi);
