import React, { Component } from "react";
import { Layout } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Logo from "./Logo";
import Menu from "./Menu";
import "./index.less";

const { Sider } = Layout;
class PageSider extends Component {
  state = { sidebarLogo: true };
  render() {
    const { sidebarLogo } = this.state;
    const { sidebarCollapsed } = this.props;
    return (
      <Sider collapsible collapsed={sidebarCollapsed} style={{ zIndex: "10" }}>
        {sidebarLogo ? <Logo /> : null}
        <Menu />
      </Sider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
  };
};

export default connect(mapStateToProps, null, null, {
  pure: true,
})(PageSider);
