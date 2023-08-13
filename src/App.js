import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import Onboarding from "./components/Onboarding";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// const crumbs = [{label:'Orgs', key:'orgs'},{label:'39103', key: '39103'}]
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("WELCOME", "sub2", <TeamOutlined />, [
    getItem("1. School Setup", "6"),
    getItem("2. Schools & Photos", "7"),
    getItem("3. Ready for SALES", "8"),
    getItem("4. SALES Info", "9"),
    getItem("5. Ready for PRODUCTION", "10"),
    getItem("6. PRODUCTION Info", "11"),
    getItem("7. Ready for INVOICING", "12"),
    getItem("8. INVOICING Info", "13"),
  ]),
  getItem("Files", "20", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
    items={[
      {
        title: 'Orgs',
      },
      {
        title: <a href="/">Application Center</a>,
      },
      {
        title: <a href="/">Application List</a>,
      },
      {
        title: '39103',
      },
    ]}
  />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Onboarding />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          PixFirst ©2023 Made with ❤️
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
