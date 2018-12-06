import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GitPrez from "./slides/git";
import HtmlPrez from "./slides/html";
import GitEval from "./eval/git";
import TPEval from "./eval/tp";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/git/" component={GitPrez} />
      <Route path="/html/" component={HtmlPrez} />
      <Route path="/eval/git/" component={GitEval} />
      <Route path="/eval/tp/" component={TPEval} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
