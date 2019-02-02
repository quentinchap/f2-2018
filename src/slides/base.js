// Import React
import React from "react";
import theme from "../theme";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text
} from "spectacle";
import httpSchema from "../assets/img/http-schema.gif";
import webSchema1 from "../assets/img/webSchema1.png";
import { withStyles } from "@material-ui/core";

const BasePrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Le web
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Histoire et principes de base.
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Définition
      </Heading>
      <BlockQuote>
        <Quote size={6}>
          Le Web est le terme communément employé pour parler du World Wide Web,
          ou WWW, traduit en français par la toile d'araignée mondiale. Il fait
          référence au système hypertexte fonctionnant sur le réseau
          informatique mondial Internet. Par abus de langage, le Web désigne de
          façon plus large tout ce qui se rapproche à cet univers internet. On
          ne fait plus toujours aujourd'hui la distinction technique entre ce
          que définit le Web et ce que définit Internet.
        </Quote>
        <Cite>Le journal du net</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Dates clès
      </Heading>
      <ul className={classes.leftAlign}>
        <li>1989 - Première version du web</li>
        <li>1990 - Premier site</li>
        <li>1991 - Le Web s'ouvre à tous</li>
        <li>1994 - Yahoo!</li>
        <li>1995 - Amazon.com et internet explorer</li>
        <li>1998 - Google</li>
        <li>2001 - Wikipedia</li>
        <li>2004 - Firefox & facebook</li>
        <li>2005 - Youtube et Web 2.0</li>
        <li>2008 - Chrome & app mobile</li>
        <li>2010 - Html 5</li>
      </ul>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Fonctionnement du web
      </Heading>
      <img src={webSchema1} alt="html" />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Le client
      </Heading>
      <ul className={classes.leftAlign}>
        <li>Interpréter l’html/CSS</li>
        <li>Moteur JS</li>
        <li>Plugins divers</li>
        <li>Gère un partie de sécuritée</li>
        <li>Envoi et reçoit des requêtes Http</li>
      </ul>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Le serveur
      </Heading>
      <ul className={classes.leftAlign}>
        <li>Différents éléments réseaux</li>
        <li>Serveur http</li>
        <li>Serveur BDD (Mysql, etc)</li>
        <li>Serveur applicatif</li>
        <li>etc.</li>
      </ul>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary" caps>
        Protocole http
      </Heading>
      <img src={httpSchema} alt="html" className={classes.whiteBack} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Structure d'une requête/réponse http
      </Heading>
      <p className={classes.leftAlign}>
        Une requête http est un ensemble de ligne contenant trois sections
        distinctes Une ligne d’entête:
        <ul>
          <li>La méthode, l’url version d’http</li>
          <li>Les headers</li>
          <li>Le corps de la requête</li>
        </ul>
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Méthodes http
      </Heading>
      <p className={classes.leftAlign}>
        <ul>
          <li>
            <strong>GET</strong> Récupérer une resource.
          </li>
          <li>
            <strong>HEAD</strong> Récupérer des informations sur la ressource,
            sans demander la ressource elle-même.
          </li>
          <li>
            <strong>POST</strong> Permet de modifier/créer une ressource.
          </li>
          <li>
            <strong>OPTIONS</strong> Permet d'obtenir les options de
            communication d'une ressource ou du serveur en général.
          </li>
          <li>
            <strong>CONNECT</strong> Permet d'utiliser un proxy comme tunnel de
            communication.
          </li>
          <li>
            <strong>TRACE</strong> Demande au serveur de retourner ce qu'il a
            reçu, dans le but de tester et d'effectuer un diagnostic sur la
            connexion.
          </li>
          <li>
            <strong>PUT</strong> Permet d'ajouter une ressource sur le serveur.
          </li>
          <li>
            <strong>DELETE</strong> Permet de supprimer une ressource du
            serveur.
          </li>
        </ul>
      </p>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Les codes retours HTTP
      </Heading>
      <ul className={classes.leftAlign}>
        <li>10x: Information</li>
        <li>20x: RAS</li>
        <ul>
          <li>200 OK</li>
          <li>201 CREATED</li>
        </ul>
        <li>30x: Redirection</li>
        <li>40x: Erreurs “client”</li>
        <ul>
          <li>403 FORBIDDEN</li>
          <li>404 NOT FOUND</li>
        </ul>
        <li>50x: Erreurs serveur</li>
        <ul>
          <li>500 INTERNAL ERROR</li>
          <li>503 SERVICE UNAVAILABLE</li>
        </ul>
      </ul>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(BasePrez);
