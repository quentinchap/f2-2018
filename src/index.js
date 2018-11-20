import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GitPrez from "./slides/git";
import GitEval from "./eval/git";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/git/" component={GitPrez} />
      <Route path="/eval/git/" component={GitEval} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
