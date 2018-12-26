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
import column1 from "../assets/img/mongo/column1.png";
import column2 from "../assets/img/mongo/column2.png";

const MongoPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Maitrisez votre BDD
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        NoSQL, MongoDB & Mongoose
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Le NoSQL quèsaco ?
      </Heading>
      <p>
        <strong>"Not Only SQL" </strong> Assouplir les contraintes du model
        relationnel au profit de la distribution.
      </p>
      <p>Plusieurs types</p>
      <List>
        <ListItem>Clés / valeurs</ListItem>
        <ListItem>Graphes</ListItem>
        <ListItem>Colonnes</ListItem>
        <ListItem>Documents</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Clés / Valeurs
      </Heading>
      <p className={classes.leftAlign}>
        <strong>Description</strong> Table de hachage distribuée. Derriére
        chaque clé un objet.
      </p>
      <p className={classes.leftAlign}>
        <strong>Avantages</strong> Très simple
      </p>
      <p className={classes.leftAlign}>
        <strong>Inconvénients</strong> Pas de contrôle ou d'exploitation par le
        contenu
      </p>
      <p className={classes.leftAlign}>
        <strong>Techno.</strong> Redis, SimpleDb
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Colonnes
      </Heading>
      <p className={classes.leftAlign}>
        <strong>Description</strong> Structuration autour de l'attribut.
      </p>
      <p className={classes.leftAlign}>
        <strong>Avantages</strong> Calculs analytiques
      </p>
      <p className={classes.leftAlign}>
        <strong>Inconvénients</strong> Recherche / utilisation de données
        ciblées
      </p>
      <p className={classes.leftAlign}>
        <strong>Techno.</strong> BigTable, HBase, Spark, Elastic
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Colonnes
      </Heading>
      <img src={column1} />
      <br />
      <img src={column2} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Graphes
      </Heading>
      <p className={classes.leftAlign}>
        <strong>Description</strong> Stockage sous forme de graphes. Sauvegarde de noeuds, liens et de propriétés.
      </p>
      <p className={classes.leftAlign}>
        <strong>Avantages</strong> Problèmatiques typé analyse de graphes (distances, liens, etc.)
      </p>
      <p className={classes.leftAlign}>
        <strong>Inconvénients</strong> Compliqué à appréhender et pour des usages très spécifiques
      </p>
      <p className={classes.leftAlign}>
        <strong>Techno.</strong> Neo4J
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Documents
      </Heading>
      <p className={classes.leftAlign}>
        <strong>Description</strong> Système type clés / valeurs. Valeurs à
        structure complexe. Possibles traitements sur les valeurs
      </p>
      <p className={classes.leftAlign}>
        <strong>Avantages</strong> Structure sur les documents -> Méthodes
        d'interrogation plus riches.
      </p>
      <p className={classes.leftAlign}>
        <strong>Inconvénients</strong> Peu adapté aux besoins analytiques.
      </p>
      <p className={classes.leftAlign}>
        <strong>Techno.</strong> MongoDB, CouchBase, ...
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        votre première application
      </Heading>

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
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Auto reload
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Première route GET
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Première route POST
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Utilisation de paramètres
      </Heading>
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
        Micro fonctionnalitées qui s'enchaînent en partageant jusqu'à quatres
        paramètres
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
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Organisation projet
      </Heading>
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
          <a href="https://blog.talanlabs.com/etude-comparative-bdd-relationnelle-versus-nosql/">Comparatif techno BDD</a>
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

export default withStyles(theme.matUI)(MongoPrez);
