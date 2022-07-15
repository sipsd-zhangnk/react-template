import React, { Component } from "react";
import { Layout, Icon, Dropdown, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import FullScreen from "@/components/FullScreen";
import Settings from "@/components/Settings";
import Hamburger from "@/components/Hamburger";
// import BreadCrumb from "@/components/BreadCrumb";
import "./index.less";

const { Header } = Layout;
const handleMenuClick = (key) => {
  switch (key) {
    case "logout":
      //   handleLogout(token);
      break;
    default:
      break;
  }
};
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="dashboard">
      <Link to="/dashboard">首页</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">注销</Menu.Item>
  </Menu>
);

class PageHeader extends Component {
  render() {
    return (
      <Header>
        <Hamburger />
        <div className="right-menu">
          {/* <FullScreen /> */}
          <Settings />
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                {/* <Avatar shape="square" size="medium" src={avatar} /> */}
                <Icon style={{ color: "rgba(0,0,0,.3)" }} type="caret-down" />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.app,
});

export default connect(mapStateToProps)(PageHeader);
