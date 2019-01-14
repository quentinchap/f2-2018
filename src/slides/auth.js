// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import sessionAuth from "../assets/img/auth/sessionAuth.png";

const AuthPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Techniques d'authentification
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Contrôler l'accés de vos APIs
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Pourquoi ?
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Session
      </Heading>
      <img src={sessionAuth} />
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Session
      </Heading>
      <List>
        <ListItem>Simple à implémenter</ListItem>
        <ListItem>Utilise la session (cookie server-side)</ListItem>
        <ListItem>Statefull => difficilement scalable</ListItem>
        <ListItem>Vol de session</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Basic Auth
      </Heading>
      <p>Ajout d'un header</p>
      <p>Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</p>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Basic Auth
      </Heading>
      <List>
        <ListItem>Simple à implémenter</ListItem>
        <ListItem>Vol de token</ListItem>
        <ListItem>Passage du mot de passe et du login à chaque requête</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        API Keys
      </Heading>
      <p>Comme basic mais en passant par un token qui sera généré et fournis à l'utilisateur</p>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        OAuth
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading size={6} textColor="tertiary" caps>
        Ressources
      </Heading>
      <List>
        <ListItem>
          <a href="https://nordicapis.com/3-common-methods-api-authentication-explained/">
            3 Common Methods of API Authentication
          </a>
        </ListItem>
        <ListItem>
          <a href="https://medium.com/@sherryhsu/session-vs-token-based-authentication-11a6c5ac45e4">
            Session vs Token Based Authentication
          </a>
        </ListItem>
        <ListItem>
          <a href="https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e">
            Passport
          </a>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(AuthPrez);
