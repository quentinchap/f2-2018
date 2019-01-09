// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import simple_req from "../assets/img/reactAsync/simple_req.png";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

let callBackExample = `setTimeout(function(){ alert("Hello"); }, 3000);`;
let promiseExample = `
let promise1 = new Promise(
  (resolve, reject) =>
  {
    resolve('Success!');    
  }
  //reject('error');
  );

promise1.then(
  res => {
    console.log(res);  
  }
  ,err => {
    console.error(err);
  }
);
`;
let promiseCatchExample = `
promise1.then(
  res => {
    console.log(res);  
  }
  ,err => {
    console.error(err);
  }
)
.then(...)
.catch(error => {
  handleError(error);
});
`;

let asyncExample = `async function myAsyncF() {
  try {
      const result = await promise;
  } catch (err) {
      handleError(err);
  }
  return 'finish'; 
}`;

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
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Basic Auth
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        API Keys
      </Heading>
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
