import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GitPrez from "./slides/git";
import HtmlPrez from "./slides/html";
import GitEval from "./eval/git";
import TPEval from "./eval/tp";
import HtmlEval from "./eval/html";
import BasePrez from './slides/base';
import React1Prez from './slides/react1';

ReactDOM.render(
  <Router basename='/f2-2018/'>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/f2-2018/" exact component={Home} />
      <Route path="/git/" component={GitPrez} />
      <Route path="/react1/" component={React1Prez} />
      <Route path="/html/" component={HtmlPrez} />
      <Route path="/base/" component={BasePrez} />
      <Route path="/eval/html/" component={HtmlEval} />
      <Route path="/eval/git/" component={GitEval} />
      <Route path="/eval/tp/" component={TPEval} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
