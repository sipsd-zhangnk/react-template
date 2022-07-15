import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Tooltip } from "antd";
import { toggleSettingPanel } from "@/store/actions";

import "./index.less";

class Settings extends React.Component {
  render() {
    const { toggleSettingPanel } = this.props;
    return (
      <div className="settings-container">
        <Tooltip placement="bottom" title="系统设置">
          <Icon type="setting" onClick={toggleSettingPanel} />
        </Tooltip>
      </div>
    );
  }
}

export default connect(null, { toggleSettingPanel })(Settings);
