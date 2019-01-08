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
import React2Prez from './slides/react2';
import UxPrez from './slides/ux';
import NodePrez from './slides/node';
import RestFullPrez from './slides/RestFull';
import MongoPrez from './slides/mongo';
import MongoPrez2 from './slides/mongo2';
import testApi from "./slides/testApi";

ReactDOM.render(
  <Router basename='/f2-2018/'>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/f2-2018/" exact component={Home} />
      <Route path="/git/" component={GitPrez} />
      <Route path="/react1/" component={React1Prez} />
      <Route path="/react-async/" component={React2Prez} />
      <Route path="/test-api/" component={testApi} />
      <Route path="/node/" component={NodePrez} />
      <Route path="/mongo/" component={MongoPrez} />
      <Route path="/mongo2/" component={MongoPrez2} />
      <Route path="/apiRest/" component={RestFullPrez} />
      <Route path="/html/" component={HtmlPrez} />
      <Route path="/ux/" component={UxPrez} />
      <Route path="/base/" component={BasePrez} />
      <Route path="/eval/html/" component={HtmlEval} />
      <Route path="/eval/git/" component={GitEval} />
      <Route path="/eval/tp/" component={TPEval} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
