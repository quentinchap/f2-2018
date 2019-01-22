// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide } from "spectacle";
import theme from "../theme";
import { withStyles } from "@material-ui/core";
import { LiveProvider } from "react-live";
import { LiveEditor } from "react-live";

const loginFunction = `
login = async (email, password) => {
  console.log(email, password);
  try {
    let res = await axios.post("http://localhost:5000/api/v1/login", {
      email,
      password
    });
    localStorage.setItem("token", res.data.token);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
`;

const middleWare = `
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.status(200).json({ message: "ok" });
  }
  else {
  //move on
    next();
  }
};

export default allowCrossDomain;`;

const getPosts = `
getPosts = async () => {
  try {
    const access_token = localStorage.getItem("token");
    const options = {
      method: "get",
      headers: {
        Authorization: access_token,
        "Content-Type": "application/json"
      },
      url: "http://localhost:5000/api/v1/posts"
    };
    let res = await axios(options);
    this.setState({ posts: res.data.posts });
  } catch (err) {
    alert("erreur");
  }
};`;

const loginForm = `
const LoginForm = ({ login, mdp, onLogin, handleChange }) => (
  <form
    onSubmit={() => onLogin(login, mdp)}
    style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "80vw",
      margin: "auto",
      marginTop: "20px"
    }}
  >
    <input
      type="text"
      placeholder="login"
      value={login}
      onChange={handleChange("login")}
    />
    <input
      type="password"
      placeholder="password"
      value={mdp}
      onChange={handleChange("mdp")}
    />
    <button type="submit">Login</button>
  </form>
);`;

const AuthFrontPrez = ({ classes }) => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Utilisez des APIs sécurisées
      </Heading>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        middleWare
      </Heading>
      <LiveProvider code={middleWare}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Formulaire de login
      </Heading>
      <LiveProvider code={loginForm}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Fonction de login
      </Heading>
      <LiveProvider code={loginFunction}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Liste de posts
      </Heading>
      <LiveProvider
        code={`<button onClick={this.getPosts}>Get posts</button>
        {this.state.posts.map(p => (
          <div>{p.title}</div>
        ))}`}
      >
        <LiveEditor />
      </LiveProvider>
    </Slide>
    <Slide transition={["fade"]}>
      <Heading size={6} textColor="tertiary" caps>
        Utiliser une route sécurisée
      </Heading>
      <LiveProvider code={getPosts}>
        <LiveEditor />
      </LiveProvider>
    </Slide>
  </Deck>
);

export default withStyles(theme.matUI)(AuthFrontPrez);
