import React, { Component } from "react";
import logo from "@/assets/images/logo.svg";

import "./index.less";
class PageSiderLogo extends Component {
  state = { sidebarLogo: true };
  render() {
    return (
      <div className="sidebar-logo-container">
        <img src={logo} className="sidebar-logo" alt="logo" />
        <h1 className="sidebar-title">DataLayer</h1>
      </div>
    );
  }
}

export default PageSiderLogo;
