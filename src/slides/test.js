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
import tdd from "../assets/img/test/tdd.png";
import { withStyles } from "@material-ui/core";

const TestPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Startégies et méthodes de tests
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Tester c'est douter, vraiment?
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Pourquoi ?
      </Heading>
      <List>
        <ListItem>La solution implémentée répond-t-elle aux besoins?</ListItem>
        <ListItem>Les fonctionnalités livrées sont-elles valides?</ListItem>
        <ListItem>Les aciennes fonctions sont-elles toujours ok?</ListItem>
        <ListItem>Les utilisateurs comprennent-ils l'application?</ListItem>
        <ListItem>La solution est-elle adaptée à un context réél?</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les tests unitaires
      </Heading>
      <List>
        <ListItem>
          <strong>Quoi ?</strong> Des fonctions, modules ou composants
        </ListItem>
        <ListItem>
          <strong>Comment ?</strong> Framework de test adaptée à la techno
        </ListItem>
        <ListItem>
          <strong>Quand ?</strong> Pendant le développement
        </ListItem>
        <ListItem>
          <strong>Pourquoi ?</strong> Détection des effets de bord et garantir
          la qualité de code
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={6} textColor="tertiary" caps>
        Les bouchons et les mocks
      </Heading>
      <p>
        <strong>Les bouchons</strong> Faux objet implémentant le même
        comportement qu'un objet indispensable aux composants testés.
      </p>
      <p>
        <strong>Les mock</strong> Redéfinis le comportement d'un élément
        existant. Ce comportement sera déclenché durant le test à la place du
        vrai composant.
      </p>
      <p>
        <strong>Exemple</strong> Tester une fonction utilisant le résultat d'une
        requête BDD.
      </p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        TDD
      </Heading>
      <img src={tdd} style={{ maxWidth: "70VW" }} />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les tests d'intégration
      </Heading>
      <p>
        Mise en situation des fonctions, modules et composants. Le but est de
        vérifier que ces éléments se comportent bien entre eux et dans un
        context proche/identique de la cible.
      </p>
      <List>
        <ListItem>Top-down</ListItem>
        <ListItem>Bottom-up</ListItem>
        <ListItem>Sandwich</ListItem>
        <ListItem>Big-bang</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les tests fonctionnels
      </Heading>
      <List>
        <ListItem>
          <strong>Quoi ?</strong> Des fonctionnalités
        </ListItem>
        <ListItem>
          <strong>Quand ?</strong> A chaque livraison
        </ListItem>
        <ListItem>
          <strong>Pourquoi ?</strong> Vérifier que l'application est cohérente
          avec les spécifications et/ou cahier des charges.
        </ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Les tests de non-régression
      </Heading>
      <List>
        <ListItem>
          <strong>Quoi ?</strong> Des fonctionnalités
        </ListItem>
        <ListItem>
          <strong>Comment ?</strong> Outils de test automatisés
        </ListItem>
        <ListItem>
          <strong>Quand ?</strong> Le plus souvent possible
        </ListItem>
        <ListItem>
          <strong>Pourquoi ?</strong> Vérifier que les différentes
          itérations/modifications n'ont pas altéré des fonctionnalités déjà
          présentes.
        </ListItem>
      </List>
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

export default withStyles(theme.matUI)(TestPrez);
