import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";

import { toggleSettingPanel } from "@/store/actions";

class RightPanel extends Component {
  render() {
    const { settingPanelVisible,toggleSettingPanel } = this.props;
    return (
      <Drawer
        title="系统设置"
        placement="right"
        width={350}
        onClose={toggleSettingPanel}
        visible={settingPanelVisible}
      >
        <p>配置面板</p>
      </Drawer>
    );
  }
}

const MapStateToProps = (state) => ({
  ...state.app,
});

export default connect(MapStateToProps, { toggleSettingPanel }, null, {
  pure: true,
})(RightPanel);
