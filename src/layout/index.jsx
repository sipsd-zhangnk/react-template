import React, { Component } from "react";
import { Layout } from "antd";

import PageHeader from "./Header";
import PageSider from "./Sider";
import PageContent from "./Content";
import RightPanel from './RightPanel'

class PageLayout extends Component {
  render() {
    return (
      <Layout>
        <PageSider />
        <Layout>
          <PageHeader />
          <PageContent />
        </Layout>
        <RightPanel />
      </Layout>
    );
  }
}

export default PageLayout;
