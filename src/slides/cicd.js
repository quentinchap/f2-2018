// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Quote,
  BlockQuote,
  Cite
} from "spectacle";
import theme from "../theme";
import cicdecd from "../assets/img/cicd/cicdecd.png";
import { withStyles } from "@material-ui/core";
import { LiveProvider } from "react-live";
import { LiveEditor } from "react-live";

const CiCdPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        CI / CDE /CD
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Gardez la maîtrise de vos apps
      </Text>
    </Slide>

    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CI vs CDE vs CD
      </Heading>
      <img src={cicdecd} style={{ maxWidth: "900px" }} alt="cicd" />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Pré-requis
      </Heading>
      <List>
        <ListItem>Centralisation des sources</ListItem>
        <ListItem>Ecriture de tests</ListItem>
        <ListItem>Culture DevOps</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CI: Continuous integration
      </Heading>
      <BlockQuote>
        <Quote>
          L'intégration continue est un ensemble de pratiques utilisées en génie
          logiciel consistant à vérifier à chaque modification de code source
          que le résultat des modifications ne produit pas de régression dans
          l'application développée. ... Le principal but de cette pratique est
          de détecter les problèmes d'intégration au plus tôt lors du
          développement. De plus, elle permet d'automatiser l'exécution des
          suites de tests et de voir l'évolution du développement du logiciel.
        </Quote>
        <Cite>Wikipedia</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CI: Continuous integration
      </Heading>
      Récupération du code -> Build -> Test -> Déploiement env de test
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CI: Pourquoi ?
      </Heading>
      <List>
        <ListItem>Simplifier les merges</ListItem>
        <ListItem>Améliorer la qualité</ListItem>
        <ListItem>Automatiser des actions</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
       CDE: Pré-requis
      </Heading>
      <List>
        <ListItem>Tests unitaires robustes</ListItem>
        <ListItem>Equipe organisé et formé à ces pratiques</ListItem>
      </List>
    </Slide>
    <Slide>
      <iframe
        title="cicd"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_zCyLT33moA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CDE: Continuous delivery
      </Heading>
      <BlockQuote>
        <Quote>
          La livraison continue est une approche d’ingénierie logicielle dans
          laquelle les équipes produisent des logiciels dans des cycles courts,
          ce qui permet de le mettre à disposition à n’importe quel moment. Le
          but est de construire, tester et diffuser un logiciel plus rapidement.
        </Quote>
        <Cite>Wikipedia</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CDE: Continuous delivery
      </Heading>
      Etapes CI -> tests d'intégration -> Passe la main
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CDE: Pourquoi ?
      </Heading>
      <List>
        <ListItem>Amélioration des processus inter équipes</ListItem>
        <ListItem>Preuve de qualité de la solution à déployer</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
       CDE: Pré-requis
      </Heading>
      <List>
        <ListItem>Tests d'intégration évolué</ListItem>
        <ListItem>Equipe organisé et formé à ces pratiques</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CD: Continuous deployement
      </Heading>
      <BlockQuote>
        <Quote>
          Approche utilisé par beaucoup de géant du web qui consiste à
          automatiser toutes la chaîne jusqu'à la livraison en production
          à chaque dépôt ou pull request sur le repo git.
        </Quote>
      </BlockQuote>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        CD: Pourquoi ?
      </Heading>
      <List>
        <ListItem>Time to market</ListItem>
        <ListItem>Rencontrer les problèmatiques terrains plus vite</ListItem>
        <ListItem>Apprendre plus vite, mieux s'adapter</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
       CD: Pré-requis
      </Heading>
      <List>
        <ListItem>Tests bout en bout solides</ListItem>
        <ListItem>Capacité de rollback</ListItem>
        <ListItem>Possibilité de faire du deploy partiel</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les solutions
      </Heading>
      <List>
        <ListItem>Travis CI</ListItem>
        <ListItem>Circle CI</ListItem>
        <ListItem>Jenkins</ListItem>
        <ListItem>GitLab CI</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Travis CI
      </Heading>
      <List>
        <ListItem>Inscription</ListItem>
        <ListItem>créez un fichier .travis.yml</ListItem>
      </List>
      <LiveProvider
        code={`
      language: node_js
      node_js: 
        - "stable"
      cache:
        directories:
          - "node_modules"
      `}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Démo
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les tests IHM
      </Heading>
      <List>
        <ListItem>
          <strong>Quoi ?</strong> Les écrans
        </ListItem>
        <ListItem>
          <strong>Comment ?</strong> Outils spécifiques (selenium, etc.) ou
          manuellement
        </ListItem>
        <ListItem>
          <strong>Pourquoi ?</strong> Deux types de tests: <br />
          Tests utilisateurs (UX)
          <br />
          Tests End to end
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les autres
      </Heading>
      <List>
        <ListItem>Tests de configurations</ListItem>
        <ListItem>Tests de performances</ListItem>
      </List>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(CiCdPrez);
