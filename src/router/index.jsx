import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "@/views/login";
import Layout from "@/layout";

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
