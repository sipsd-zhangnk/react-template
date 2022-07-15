import React, { Component } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";

import { toggleSiderBar } from "@/store/actions";
import "./index.less";

class Hamburger extends Component {
  render() {
    const { sidebarCollapsed, toggleSiderBar } = this.props;
    return (
      <div className="hamburger-container">
        <Icon
          type={sidebarCollapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggleSiderBar}
        />
      </div>
    );
  }
}

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
