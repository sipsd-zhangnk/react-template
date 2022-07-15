import React, { Component } from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

import routeList from "@/config/routerList";

const { Content } = Layout;

class PageContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          {routeList.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                component={route.component}
              ></Route>
            );
          })}
        </Switch>
      </Content>
    );
  }
}

export default PageContent;
