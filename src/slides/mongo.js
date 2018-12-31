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
import cap from "../assets/img/mongo/cap.png";
import normalization from "../assets/img/mongo/normalization.png";
import normalization2 from "../assets/img/mongo/normalization2.png";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

let conf = `
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
  process.env.MONGO,
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "error:"));
db.once("open", function() {

  app.use("/", routes);
  let listener = app.listen(process.env.PORT, function() {
    console.log("Your run on " + listener.address().port);
  });
});
`;

let postModel = `
import mongoose from "mongoose";
const Schema = mongoose.Schema;

var PostSchema = new Schema({
  description: String,
  author: {
    name: String,
    ref: { type: Schema.Types.ObjectId, ref: "User" },
  }
});

PostSchema.index({ name: 1});
let Post = mongoose.model("Post", PostSchema);

export default Post;
`;

let userModel = `
import mongoose from "mongoose";
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String
});

UserSchema.index({ name: 1});
let User = mongoose.model("User", UserSchema);

export default User;
`;
let userModelUnique = `
import mongoose from "mongoose";
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  pseudo: {
    type: String,
    index: true,
    unique: true
  }
});

UserSchema.index({ name: 1 });
let User = mongoose.model("User", UserSchema);
User.createIndexes();

export default User;
`;

let createPostService = `  
import Post from "./model";
export async function createPost(post) {
  if (post) {
    if (!post._id) {
      return Post.create({ ...post });
    }
  }
}`;

let createPostRoute = `
import express from 'express';
import * as service from './service';

const posts = express.Router();
posts.use(bodyParser.json());

posts.post("/posts", (req, res) => {
  service.createPost(req.body).then(
    users => res.status(200).json(users),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});`;

let getPostService = `  
import Post from "./model";

export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await Post.find({})
    .populate({
      path: "author.ref",
      model: "User"
    })
    .skip(start)
    .limit(parseInt(per_page));
  return result;
}
`;

let getPostRoute = `
import express from 'express';
import * as service from './service';

const posts = express.Router();

posts.get("/posts", (req, res) => {
  service
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(posts => res.status(200).json({ posts }));
});
`;

let createUserService = `  
import User from "./model";
export async function createUser(user) {
  if (user) {
    if (!user._id) {
      console.log("[user] - Creation");
      return User.create({ ...user });
    }
  }
};`;

let createUserRoute = `
import express from 'express';
import * as service from './service';

const users = express.Router();
users.use(bodyParser.json());

users.post("/users", (req, res) => {
  service.createUser(req.body).then(
    users => res.status(200).json(users),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});`;

let getUserService = `  
import User from "./model";
export async function getByPage(page, per_page) {
  var start = (parseInt(page) - 1) * parseInt(per_page);
  let result = await User.find({})
    .skip(start)
    .limit(parseInt(per_page));
  return result;
};
`;

let getUserRoute = `
import express from 'express';
import * as service from './service';

const users = express.Router();

users.get("/users", (req, res) => {
  // console.log(req,res);
  service
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(users => res.status(200).json({ users }));
});
`;

let envFile = `
MONGO=mongodb://<user>:<password>@url_BDD_mongo:port_BDD
PORT=5000`;

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
        <strong>Description</strong> Stockage sous forme de graphes. Sauvegarde
        de noeuds, liens et de propriétés.
      </p>
      <p className={classes.leftAlign}>
        <strong>Avantages</strong> Problèmatiques typé analyse de graphes
        (distances, liens, etc.)
      </p>
      <p className={classes.leftAlign}>
        <strong>Inconvénients</strong> Compliqué à appréhender et pour des
        usages très spécifiques
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
        Pourquoi le relationnel à encore sa place ?
      </Heading>

      <List>
        <ListItem>Jointures</ListItem>
        <ListItem>Requêtes complexes de haut niveau</ListItem>
        <ListItem>Intégrité des données</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        ACID
      </Heading>
      <List>
        <ListItem>
          <strong>Atomicité</strong> transaction OK ou KO mais pas partielle
        </ListItem>
        <ListItem>
          <strong>Cohérence</strong> Cohérence de la BDD avant et après
          transaction
        </ListItem>
        <ListItem>
          <strong>Isolation</strong> Modifications visible qu'après validation
        </ListItem>
        <ListItem>
          <strong>Durabilité</strong> Etat de la base permanent après
          modification
        </ListItem>
      </List>
      <p>Pb: Peu adapté au contexte distribuée</p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        BASE
      </Heading>
      <List>
        <ListItem>
          <strong>Basically Available</strong> Garantir un taux de réponse peu
          importe la charge
        </ListItem>
        <ListItem>
          <strong>Soft-state</strong> La base n'a pas à être cohérente en
          permanence.
        </ListItem>
        <ListItem>
          <strong>Eventually consistent</strong> Etat cohérent à moyen/long
          terme
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Thèorême de CAP
      </Heading>
      <img src={cap} />
      <p>2000, Eric A. Brewer</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        MongoDB
      </Heading>
      <BlockQuote>
        <Quote>
          système de gestion de base de données orientée documents,
          répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant
          pas de schéma prédéfini des données. Il est écrit en C++.
        </Quote>
        <Cite>Wikipédia</Cite>
      </BlockQuote>
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
        Dénormalisation
      </Heading>
      <List>
        <ListItem>Fréquence de mises à jour</ListItem>
        <ListItem>Données beaucoup utilisées</ListItem>
        <ListItem>Données indépendantes</ListItem>
        <ListItem>Relations 1-n / 1-n</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Dénormalisation
      </Heading>
      <img src={normalization} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Dénormalisation
      </Heading>
      <img src={normalization2} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose
      </Heading>
      <h5>Installation</h5>
      <LiveProvider code="npm i dotenv --savedev">
        <LiveEditor />
      </LiveProvider>
      <LiveProvider code="npm i mongoose --save">
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose
      </Heading>
      <LiveProvider code={conf}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose
      </Heading>
      <h5>.env</h5>
      <LiveProvider code={envFile}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Model simple
      </Heading>
      <LiveProvider code={userModel}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Get service
      </Heading>
      <LiveProvider code={getUserService}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Get route
      </Heading>
      <LiveProvider code={getUserRoute}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Creation service
      </Heading>
      <LiveProvider code={createUserService}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Creation route
      </Heading>
      <LiveProvider code={createUserRoute}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Model complex
      </Heading>
      <LiveProvider code={postModel}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Get service
      </Heading>
      <LiveProvider code={getPostService}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Get route
      </Heading>
      <LiveProvider code={getPostRoute}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Creation service
      </Heading>
      <LiveProvider code={createPostService}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Creation route
      </Heading>
      <LiveProvider code={createPostRoute}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Mongoose - Unique
      </Heading>
      <LiveProvider code={userModelUnique}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        TP
      </Heading>
    </Slide>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Maitrisez votre BDD - Part 2
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Choisir la bonne technologie
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Vocabulaire
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

export default withStyles(theme.matUI)(MongoPrez);
