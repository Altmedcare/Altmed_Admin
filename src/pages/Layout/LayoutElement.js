import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Input,
  Alert,
  DatePicker,
  Divider,
  PageHeader,
  Select,
  Button,
  Card,
  InputNumber,
  Menu,
  Radio,
  Icon,
  Layout,
  Tooltip,
  Breadcrumb,
  Row,
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import "react-awesome-button/dist/themes/theme-blue.css";
import styles from "./style.less";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class LayoutElement extends PureComponent {
  render() {
    const codeString = '(num) => num + 1';
    return (
      <PageHeaderWrapper
        title="Alert"
        style={{ background: "#333" }}
        content={
          <div>
            <h3 >When To Use#</h3>
            <ul style={{ listStyle: "inherit" }}>
              <li>
                <p>
                  <code>Layout</code> The layout wrapper, in which{" "}
                  <code>Header</code> <code>Sider</code> <code>Content</code>{" "}
                  <code>Footer</code> or <code>Layout</code> itself can be
                  nested, and can be placed in any parent container
                </p>
              </li>
              <li>
                <p>
                  <code>Header</code>The top layout with the default style, in
                  which any element can be nested, and must be placed in{" "}
                  <code>Layout</code>
                </p>
              </li>
              <li>
                <p>
                  <code>Sider</code>The sidebar with default style and basic
                  functions, in which any element can be nested, and must be
                  placed in <code>Layout</code>
                </p>
              </li>
              <li>
                <p>
                  <code>Content</code>The content layout with the default style,
                  in which any element can be nested, and must be placed in{" "}
                  <code>Layout</code>
                </p>
              </li>
              <li>
                <p>
                  <code>Footer</code>The bottom layout with the default style,
                  in which any element can be nested, and must be placed in{" "}
                  <code>Layout</code>
                </p>
              </li>
            </ul>
          </div>
        }
      >
        <div className="gutter-example">
          <Row type="flex" gutter={24}>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={1}>
              <Card
                title="Basic"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                  </Layout>
       
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={2}>
              <Card
                title="Left Sidebar"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Layout>
                    <Header>Header</Header>
                    <Layout>
                      <Sider>Sider</Sider>
                      <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                  </Layout>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={3}>
              <Card
                title="Right Sidebar"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Layout>
                    <Header>Header</Header>
                    <Layout>
                      <Content>Content</Content>
                      <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                  </Layout>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={4}>
              <Card
                title="Alternate Sidebar"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                      <Header>Header</Header>
                      <Content>Content</Content>
                      <Footer>Footer</Footer>
                    </Layout>
                  </Layout>
                </div>
              </Card>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24} order={5}>
              <Card
                title="Example"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 280 }}
              >
                <div className="componentsButtonDemo">
                  <Layout>
                    <Header className="header">
                      <div className="logo" />
                      <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "66px" }}
                      >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                      </Menu>
                    </Header>
                    <Layout>
                      <Sider width={200}>
                        <Menu
                          mode="inline"
                          defaultSelectedKeys={["1"]}
                          defaultOpenKeys={["sub1"]}
                          style={{ height: "100%", borderRight: 0 }}
                        >
                          <SubMenu
                            key="sub1"
                            title={
                              <span>
                                <Icon type="user" />
                                subnav 1
                              </span>
                            }
                          >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                          </SubMenu>
                          <SubMenu
                            key="sub2"
                            title={
                              <span>
                                <Icon type="laptop" />
                                subnav 2
                              </span>
                            }
                          >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                          </SubMenu>
                          <SubMenu
                            key="sub3"
                            title={
                              <span>
                                <Icon type="notification" />
                                subnav 3
                              </span>
                            }
                          >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                          </SubMenu>
                        </Menu>
                      </Sider>
                      <Layout
                        style={{ padding: 24, background: "#f5f5f5!important" }}
                      >
                        <Breadcrumb style={{ margin: "16px 0" }}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>List</Breadcrumb.Item>
                          <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                          style={{
                            background: "#fff",
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                          }}
                        >
                          Content
                        </Content>
                      </Layout>
                    </Layout>
                  </Layout>
                  <code>

                    
                  </code>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default LayoutElement;
