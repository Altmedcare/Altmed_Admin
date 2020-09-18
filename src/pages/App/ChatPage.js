import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  DatePicker,
  Select,
  Card,
  InputNumber,
  Radio,
  Icon,
  Comment,
  Tooltip,
  Row,
  Input,
  Button,
  Col
} from "antd";
import messageHistory from "./messageHistory";
import TestArea from "./TestArea";
import monsterImgUrl from "./assets/monster.png";
import { Launcher } from "react-chat-window";
import {
  ChatList,
  ChatItem,
  Navbar,
  MessageBox,
  Sidebar,
  Avatar,
  LocationMessage,
  SpotifyMessage,
  MessageList
} from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./ChatPage.less";
import AvantChatBG from "../../assets/chat-bg.png";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js"
});
class ChatPage extends PureComponent {
  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 99,
      isOpen: false
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [
        ...this.state.messageList,
        {
          type: "file",
          author: "me",
          data: {
            url: objectURL,
            fileName: fileList[0].name
          }
        }
      ]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen
        ? this.state.newMessagesCount
        : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }
  render() {
    const extraContent = (
      <div className={styles.extraImg}>
        <IconFont type="icon-duihua" />
      </div>
    );
    return (
      <Row gutter={24}>
        <Card
          style={{ margin: 12 }}
          bodyStyle={{ padding: "0" }}
          bordered={false}
        >
          <Col
            xl={6}
            lg={6}
            md={24}
            sm={24}
            xs={24}
            style={{ padding: "24px" }}
          >
            <ChatItem
              avatar={"https://randomuser.me/api/portraits/men/34.jpg"}
              statusColor={"#FF1744"}
              alt={"Reactjs"}
              title={"Tony Stark"}
              subtitle={"How are you?"}
              date={new Date()}
              unread={45}
            />
            <ChatList
              className="chat-list"
              dataSource={[
                {
                  avatar: "https://randomuser.me/api/portraits/men/36.jpg",
                  alt: "Reactjs",
                  title: "Kevin",
                  subtitle: "Zdravstvuyte?",
                  date: new Date(),
                  statusColor: "#FF1744",
                  unread: 2
                },
                {
                  avatar: "https://randomuser.me/api/portraits/men/37.jpg",
                  alt: "Reactjs",
                  title: "Mark",
                  subtitle: "Konnichiwa?",
                  date: new Date(2019, 5, 5),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/women/37.jpg",
                  alt: "Reactjs",
                  title: "Jane",
                  subtitle: "Guten Tag?",
                  date: new Date(2019, 4, 5),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/women/38.jpg",
                  alt: "Reactjs",
                  title: "Kimberly",
                  subtitle: "お元気ですか",
                  date: new Date(2019, 3, 5),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/women/39.jpg",
                  alt: "Reactjs",
                  title: "Scarllet",
                  subtitle: "잘 지냈어요?",
                  date: new Date(2019, 2, 5),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/men/40.jpg",
                  alt: "Reactjs",
                  title: "Jenny",
                  subtitle: "كيف حالكم",
                  date: new Date(2019, 1, 5),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                  alt: "Reactjs",
                  title: "Rogers",
                  subtitle: "Piye kabare?",
                  date: new Date(2019, 7, 15),
                  unread: 0
                },
                {
                  avatar: "https://randomuser.me/api/portraits/men/38.jpg",
                  alt: "Reactjs",
                  title: "Jhonson",
                  subtitle: "你好吗?",
                  date: new Date(2020, 6, 25),
                  unread: 0
                }
              ]}
            />
          </Col>
          <Col
            xl={18}
            lg={18}
            md={24}
            sm={24}
            xs={24}
            style={{ padding: "0", borderLeft: "1px solid #eee" }}
          >
            <Card
              style={{ boxShadow: "none" }}
              bodyStyle={{ padding: "0" }}
              bordered={false}
              title={
                <div>
                  <div style={{ fontSize: 14, display: "flex" }}>
                    <img
                      style={{ borderRadius: "50%", width: 48 }}
                      src="https://randomuser.me/api/portraits/men/36.jpg"
                    />{" "}
                    <span
                      style={{
                        fontSize: 14,
                        marginLeft: 12,
                        lineHeight: "48px"
                      }}
                    >
                      Kevin 
                      <small
                          style={{
                            fontSize: 12,
                            color: "#00000066",
                            marginLeft: 12,
                          
                          }}
                      >
                        20 minute ago
                        </small>
                    </span>
                  </div>
                </div>
              }
              extra={
                <a href="#">
                  <Icon type="more" />
                  <Icon type="pushpin" />
                  <Icon type="share-alt" />
                </a>
              }
            >
              <div
                style={{
                  padding: 20,
                  backgroundImage: `url(${AvantChatBG})`,
                  backgroundSize: 200,
                  backgroundBlendMode: "luminosity",
                  borderTop: "1px solid #eee",
                  backgroundColor: "#cbcbcb"
                }}
              >
                <MessageBox
                  position={"left"}
                  type={"photo"}
                  text={"react.svg"}
                  status={"read"}
                  data={{
                    uri:
                      "https://cdn.dribbble.com/users/612938/screenshots/6486086/artboard_3_2x.jpg",
                    status: {
                      click: true,
                      loading: 1
                    }
                  }}
                />
                <MessageList
                  className="message-list"
                  lockable={true}
                  toBottomHeight={"100%"}
                  dataSource={[
                    {
                      position: "right",
                      type: "text",
                      status: "read",
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                      date: new Date()
                    },
                    {
                      position: "left",
                      type: "file",
                      status: "waiting",
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                      date: new Date()
                    }
                  ]}
                />
                <MessageBox
                  position={"right"}
                  type={"photo"}
                  text={"react.svg"}
                  status={"read"}
                  data={{
                    uri:
                      "https://cdn.dribbble.com/users/404195/screenshots/6290418/bestla_dribbble_2x.jpg",
                    status: {
                      click: true,
                      loading: 0
                    }
                  }}
                />
              </div>
            </Card>
            <div
              style={{
                padding: "24px 0  6px 24px",
                borderRadius: "0 0 5px 5px",
                borderTop: "1px solid #dde5ed",
                width: "100%"
              }}
            >
              <TestArea onMessage={this._sendMessage.bind(this)} />
              <div>
                <Launcher
                  agentProfile={{
                    teamName: "Hi, There!",
                    imageUrl:
                      "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
                  }}
                  onMessageWasSent={this._onMessageWasSent.bind(this)}
                  onFilesSelected={this._onFilesSelected.bind(this)}
                  messageList={this.state.messageList}
                  newMessagesCount={this.state.newMessagesCount}
                  handleClick={this._handleClick.bind(this)}
                  isOpen={this.state.isOpen}
                  showEmoji
                />
              </div>
            </div>
          </Col>
        </Card>
      </Row>
    );
  }
}

export default ChatPage;
