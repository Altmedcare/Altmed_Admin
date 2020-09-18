import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  List,
  Avatar,
  Badge,
  Checkbox,
  Input,
  DatePicker,
  Select,
  Button,
  Divider,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Skeleton,
  Menu,
  Dropdown,
  message,
  Col
} from "antd";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import reqwest from "reqwest";
import styles from "./ChatPage.less";
const data = [
  {
    title: "Inbox",
    titleLable: "Work",
    icona: "download",
    count: "45",
    color: "#FF5630"
  },
  {
    title: "Sent",
    titleLable: "Design",
    icona: "mail",
    count: "35",
    color: "#36B37E"
  },
  {
    title: "Draft",
    titleLable: "Family",
    color: "#00B8D9",
    count: "New",
    icona: "form"
  },
  {
    title: "Important",
    titleLable: "Friends",
    icona: "book"
  },
  {
    title: "Trash",
    titleLable: "Office",
    color: "#6554C0",
    count: "212",
    icona: "delete"
  }
];
const count = 12;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="file-done" theme="outlined" />
      Mark as read
    </Menu.Item>
    <Menu.Item key="1">
      <Icon type="stop" theme="outlined" />
      Spam
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      {" "}
      <Icon type="delete" theme="outlined" />
      Delete
    </Menu.Item>
  </Menu>
);

class MailPage extends PureComponent {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: []
  };
  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results
      });
    });
  }
  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };
  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };
  state = {
    loading: false,
    iconLoading: false
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px"
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    return (
      <Card bordered={false}>
        <div className="gutter-example">
          <Row gutter={24}>
            <Col xl={5} lg={5} md={24} sm={24} xs={24}>
              <AwesomeButton
                style={{ width: "100%" }}
                type="primary"
                size="large"
              >
                Compose
              </AwesomeButton>
              <List
                style={{
                  marginTop: "12px"
                }}
                className="email-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Icon
                      type={item.icona}
                      style={{
                        fontSize: "16px",
                        color: "#08c",
                        marginRight: "20px",
                        marginTop: "-5px"
                      }}
                      theme="outlined"
                    />
                    <List.Item.Meta title={<a href="#">{item.title}</a>} />
                    <Badge
                      count={item.count}
                      style={{ background: `${item.color}` }}
                    />
                  </List.Item>
                )}
              />
              <List
                header={<div>LABELS</div>}
                style={{ marginTop: "24px" }}
                className="email-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <a href="#">
                          <Icon
                            style={{ marginRight: 24, color: `${item.color}` }}
                            type="plus-circle"
                          />
                          {item.titleLable}
                        </a>
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col xl={1} lg={1} md={0} sm={0} xs={0}>
              <div
                style={{
                  background: "#eee",
                  height: "100vh",
                  width: "1px",
                  textAlign: "center",
                  margin: "60px auto 0"
                }}
              />
            </Col>
            <Col xl={18} lg={18} md={24} sm={24} xs={24}>
              <Checkbox>All</Checkbox>

              <Dropdown  overlay={menu} trigger={["click"]}>
                <Button style={{marginRight:12}}>
                  More <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button style={{marginRight:12}}>
                  Move to <Icon type="down" />
                </Button>
              </Dropdown>
              <Button style={{marginRight:12}} type="default" onClick={this.onLoadMore}>
                <Icon type="reload" /> Loading More
              </Button>
              <Divider dashed />
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                  <List.Item
                    actions={[
                      <a>
                        <Icon
                          type="paper-clip"
                          style={{
                            fontSize: "16px",
                            color: "#666",
                            marginRight: "0",
                            marginTop: "-5px"
                          }}
                          theme="outlined"
                        />
                      </a>,
                      <a>
                        <Icon
                          type="edit"
                          style={{
                            fontSize: "16px",
                            color: "#666",
                            marginRight: "0",
                            marginTop: "-5px"
                          }}
                          theme="outlined"
                        />
                      </a>,
                      <a>
                        <Icon
                          type="delete"
                          style={{
                            fontSize: "16px",
                            color: "#666",
                            marginRight: "0",
                            marginTop: "-5px"
                          }}
                          theme="outlined"
                        />
                      </a>
                    ]}
                  >
                    <Skeleton
                      avatar
                      title={false}
                      loading={item.loading}
                      active
                    >
                      <Checkbox style={{ marginRight: "20px" }} />
                      <Icon
                        type="star"
                        style={{
                          fontSize: "16px",
                          color: "#ccc",
                          marginRight: "20px",
                          marginTop: "-5px"
                        }}
                        theme="outlined"
                      />
                      <List.Item.Meta
                        style={{ borderBottom: "1px solid #fff" }}
                        title={<a href="#">{item.name.last}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
              <Divider dashed />
              <Checkbox>All</Checkbox>

              <Dropdown overlay={menu} trigger={["click"]}>
                <Button style={{marginRight:12}}>
                  More <Icon type="down" />
                </Button>
              </Dropdown>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button style={{marginRight:12}}>
                  Move to <Icon type="down" />
                </Button>
              </Dropdown>
              <Button style={{marginRight:12}} type="default" onClick={this.onLoadMore}>
                <Icon type="reload" /> Loading More
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default MailPage;
