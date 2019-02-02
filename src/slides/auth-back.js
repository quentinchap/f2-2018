// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import { LiveProvider } from "react-live";
import { LiveEditor } from "react-live";

const structure = `
+-- package.json
+-- app.js
+-- routes.js
+-- middlewares
|   +-- myLogger.js
|   +-- auth.js
+-- libs
|   +-- auth.js
+-- Post
|   +-- ...
+-- User
|   +-- ...
`;

const verifyToken = `
import jwt from "jsonwebtoken";

export async function verifyJWTToken(token) {
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      throw new err();
    }
    return decodedToken;
  } catch (err) {
    throw new err();
  }
}`;

const createToken = `
import _ from "lodash";
...
export function createJWToken(details) {
  if (typeof details !== "object") {
    details = {};
  }

  if (!details.maxAge || typeof details.maxAge !== "number") {
    details.maxAge = 3600;
  }

  details.sessionData = _.reduce(
    details.sessionData || {},
    (memo, val, key) => {
      if (typeof val !== "function" && key !== "password") {
        memo[key] = val;
      }
      return memo;
    },
    {}
  );

  let token = jwt.sign(
    {
      data: details.sessionData
    },
    process.env.JWT_SECRET,
    {
      expiresIn: details.maxAge,
      algorithm: "HS256"
    }
  );

  return token;
}`;

const middlewares = `
import { verifyJWTToken } from "../libs/auth";

export function verifyJWT_MW(req, res, next) {
  let token = req.headers.authorization;
  verifyJWTToken(token)
    .then(decodedToken => {
      req.user = decodedToken.data;
      next();
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid auth token provided." });
    });
}`;

const apiLogin = `
routes.post("/api/v1/login", (req, res) => {
  let { email, password } = req.body;
  if (email === "toto" && password === "toto") {
    res.status(200).json({
      success: true,
      token: createJWToken({
        sessionData: { name: "toto", age: 15 },
        maxAge: 3600
      })
    });
  } else {
    res.status(401).json({
      message: "Login ou mot de passe incorrecte."
    });
  }
});`;

const AuthBackPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Sécurisez vos routes
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        Contrôle d'accés à base de token JWT
      </Text>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        structure
      </Heading>
      <LiveProvider code={structure}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Installation
      </Heading>
      <LiveProvider code={`npm install jsonwebtoken lodash --save`}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Vérification token libs/auth.js
      </Heading>
      <LiveProvider code={verifyToken}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Création du token libs/auth.js
      </Heading>
      <LiveProvider code={createToken}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        middlewares/auth.js
      </Heading>
      <LiveProvider code={middlewares}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        middlewares/auth.js
      </Heading>
      <LiveProvider code="router.all('/posts', verifyJWT_MW);">
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        route.js
      </Heading>
      <LiveProvider code={apiLogin}>
        <LiveEditor />
      </LiveProvider>
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

export default withStyles(theme.matUI)(AuthBackPrez);
