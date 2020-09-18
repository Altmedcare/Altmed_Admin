import React, { Component } from "react";
import { List, Card, Avatar, Icon,  Divider } from "antd";
import styles from "./style.less";

const data = [
  {
    titleDirection: "step-backward"
  },
  {
    titleDirection: "step-forward"
  },
  {
    titleDirection: "fast-backward"
  },
  {
    titleDirection: "step-forward"
  },
  {
    titleDirection: "shrink"
  },
  {
    titleDirection: "arrows-alt"
  },
  {
    titleDirection: "down"
  },
  {
    titleDirection: "up"
  },
  {
    titleDirection: "left"
  },
  {
    titleDirection: "right"
  },
  {
    titleDirection: "caret-down"
  },
  {
    titleDirection: "caret-up"
  },
  {
    titleDirection: "caret-left"
  },
  {
    titleDirection: "caret-right"
  },
  { titleDirection: "up-circle" },
  { titleDirection: "down-circle" },
  { titleDirection: "left-circle" },
  { titleDirection: "right-circle" },
  { titleDirection: "up-circle-o" },
  { titleDirection: "down-circle-o" },
  { titleDirection: "right-circle-o" },
  { titleDirection: "left-circle-o" },
  { titleDirection: "double-right" },
  { titleDirection: "double-left" },
  { titleDirection: "forward" },
  { titleDirection: "backward" },
  { titleDirection: "rollback" },
  { titleDirection: "enter" },
  { titleDirection: "retweet" },
  { titleDirection: "swap" },
  { titleDirection: "swap-left" },
  { titleDirection: "swap-right" },
  { titleDirection: "arrow-up" },
  { titleDirection: "arrow-down" },
  { titleDirection: "arrow-left" },
  { titleDirection: "arrow-right" },
  { titleDirection: "play-circle" },
  { titleDirection: "play-circle-o" },
  { titleDirection: "up-square" },
  { titleDirection: "down-square" },
  { titleDirection: "left-square" },
  { titleDirection: "right-square" },
  { titleDirection: "up-square-o" },
  { titleDirection: "left-square-o" },
  { titleDirection: "right-square-o" },
  { titleDirection: "login" },
  { titleDirection: "logout" },
  { titleDirection: "menu-fold" },
  { titleDirection: "menu-unfold" }
];

const dataApp = [
  { titleApp: "lock" },
  { titleApp: "unlock" },
  { titleApp: "bars" },
  { titleApp: "book" },
  { titleApp: "calendar" },
  { titleApp: "cloud" },
  { titleApp: "cloud-download" },
  { titleApp: "code" },
  { titleApp: "copy" },
  { titleApp: "credit-card" },
  { titleApp: "delete" },
  { titleApp: "desktop" },
  { titleApp: "download" },
  { titleApp: "ellipsis" },
  { titleApp: "more" },
  { titleApp: "file" },
  { titleApp: "file-text" },
  { titleApp: "file-unknown" },
  { titleApp: "file-pdf" },
  { titleApp: "file-word" },
  { titleApp: "file-excel" },
  { titleApp: "file-jpg" },
  { titleApp: "file-ppt" },
  { titleApp: "file-markdown" },
  { titleApp: "file-add" },
  { titleApp: "folder" },
  { titleApp: "folder-open" },
  { titleApp: "folder-add" },
  { titleApp: "hdd" },
  { titleApp: "frown" },
  { titleApp: "meh" },
  { titleApp: "smile" },
  { titleApp: "inbox" },
  { titleApp: "laptop" },
  { titleApp: "appstore" },
  { titleApp: "link" },
  { titleApp: "mail" },
  { titleApp: "mobile" },
  { titleApp: "notification" },
  { titleApp: "paper-clip" },
  { titleApp: "picture" },
  { titleApp: "poweroff" },
  { titleApp: "reload" },
  { titleApp: "search" },
  { titleApp: "setting" },
  { titleApp: "share-alt" },
  { titleApp: "shopping-cart" },
  { titleApp: "tablet" },
  { titleApp: "tag" },
  { titleApp: "tags" },
  { titleApp: "to-top" },
  { titleApp: "upload" },
  { titleApp: "user" },
  { titleApp: "video-camera" },
  { titleApp: "home" },
  { titleApp: "loading" },
  { titleApp: "loading-3-quarters" },
  { titleApp: "cloud-upload" },
  { titleApp: "star" },
  { titleApp: "heart" },
  { titleApp: "environment" },
  { titleApp: "eye" },
  { titleApp: "eye-invisible" },
  { titleApp: "camera" },
  { titleApp: "save" },
  { titleApp: "team" },
  { titleApp: "solution" },
  { titleApp: "phone" },
  { titleApp: "filter" },
  { titleApp: "exception" },
  { titleApp: "import" },
  { titleApp: "export" },
  { titleApp: "customer-service" },
  { titleApp: "qrcode" },
  { titleApp: "scan" },
  { titleApp: "like" },
  { titleApp: "dislike" },
  { titleApp: "message" },
  { titleApp: "pay-circle" },
  { titleApp: "calculator" },
  { titleApp: "pushpin" },
  { titleApp: "bulb" },
  { titleApp: "select" },
  { titleApp: "switcher" },
  { titleApp: "rocket" },
  { titleApp: "bell" },
  { titleApp: "disconnect" },
  { titleApp: "database" },
  { titleApp: "compass" },
  { titleApp: "barcode" },
  { titleApp: "hourglass" },
  { titleApp: "key" },
  { titleApp: "flag" },
  { titleApp: "layout" },
  { titleApp: "printer" },
  { titleApp: "sound" },
  { titleApp: "usb" },
  { titleApp: "skin" },
  { titleApp: "tool" },
  { titleApp: "sync" },
  { titleApp: "wifi" },
  { titleApp: "car" },
  { titleApp: "schedule" },
  { titleApp: "user-add" },
  { titleApp: "user-delete" },
  { titleApp: "usergroup-add" },
  { titleApp: "usergroup-delete" },
  { titleApp: "man" },
  { titleApp: "woman" },
  { titleApp: "shop" },
  { titleApp: "gift" },
  { titleApp: "idcard" },
  { titleApp: "medicine-box" },
  { titleApp: "red-envelope" },
  { titleApp: "coffee" },
  { titleApp: "copyright" },
  { titleApp: "trademark" },
  { titleApp: "safety" },
  { titleApp: "wallet" },
  { titleApp: "bank" },
  { titleApp: "trophy" },
  { titleApp: "contacts" },
  { titleApp: "global" },
  { titleApp: "shake" },
  { titleApp: "api" },
  { titleApp: "fork" },
  { titleApp: "dashboard" },
  { titleApp: "table" },
  { titleApp: "profile" },
  { titleApp: "alert" },
  { titleApp: "audit" },
  { titleApp: "branches" },
  { titleApp: "build" },
  { titleApp: "border" },
  { titleApp: "crown" },
  { titleApp: "experiment" },
  { titleApp: "fire" },
  { titleApp: "money-collect" },
  { titleApp: "property-safety" },
  { titleApp: "read" },
  { titleApp: "reconciliation" },
  { titleApp: "rest" },
  { titleApp: "security-scan" },
  { titleApp: "insurance" },
  { titleApp: "interation" },
  { titleApp: "safety-certificate" },
  { titleApp: "project" },
  { titleApp: "thunderbolt" },
  { titleApp: "block" },
  { titleApp: "cluster" },
  { titleApp: "deployment-unit" },
  { titleApp: "dollar" },
  { titleApp: "euro" },
  { titleApp: "pound" },
  { titleApp: "file-done" },
  { titleApp: "file-exclamation" },
  { titleApp: "file-protect" },
  { titleApp: "file-search" },
  { titleApp: "file-sync" },
  { titleApp: "gateway" },
  { titleApp: "gold" },
  { titleApp: "robot" },
  { titleApp: "shopping" }
];
const dataLogo = [
  { titleLogo: "android" },
  { titleLogo: "apple" },
  { titleLogo: "windows" },
  { titleLogo: "ie" },
  { titleLogo: "chrome" },
  { titleLogo: "github" },
  { titleLogo: "aliwangwang" },
  { titleLogo: "dingding" },
  { titleLogo: "weibo-square" },
  { titleLogo: "weibo-circle" },
  { titleLogo: "taobao-circle" },
  { titleLogo: "html5" },
  { titleLogo: "weibo" },
  { titleLogo: "twitter" },
  { titleLogo: "wechat" },
  { titleLogo: "youtube" },
  { titleLogo: "alipay-circle" },
  { titleLogo: "taobao" },
  { titleLogo: "skype" },
  { titleLogo: "qq" },
  { titleLogo: "medium-workmark" },
  { titleLogo: "gitlab" },
  { titleLogo: "medium" },
  { titleLogo: "linkedin" },
  { titleLogo: "google-plus" },
  { titleLogo: "dropbox" },
  { titleLogo: "facebook" },
  { titleLogo: "codepen" },
  { titleLogo: "code-sandbox" },
  { titleLogo: "amazon" },
  { titleLogo: "google" },
  { titleLogo: "codepen-circle" },
  { titleLogo: "alipay" },
  { titleLogo: "ant-design" },
  { titleLogo: "aliyun" },
  { titleLogo: "zhihu" },
  { titleLogo: "slack" },
  { titleLogo: "slack-square" },
  { titleLogo: "behance" },
  { titleLogo: "behance-square" },
  { titleLogo: "dribbble" },
  { titleLogo: "dribbble-square" },
  { titleLogo: "instagram" },
  { titleLogo: "yuque" },
  { titleLogo: "alibaba" },
  { titleLogo: "yahoo" }
];
class TabIconNative extends Component {
  render() {
    return (
      <div>
        <span>
        <Divider> <h3 style={{ fontSize: "14px" }}>Application Icon</h3></Divider>
         
          <List
          className="icon-color-antd"
            grid={{
              gutter: 16,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 8
            }}
            dataSource={dataApp}
            renderItem={item => (
              <List.Item>
                <Card title={item.titleApp} >
                  <Icon
                    type={item.titleApp}
                    style={{ fontSize: "32px", textAlign: "center" }}
                  />
                </Card>
              </List.Item>
            )}
          />
        </span>
        <span>
        <Divider><h3 style={{ fontSize: "14px" }}>Direction</h3></Divider>
          <List
          className="icon-color-antd"
            style={{ textAlign: "center" }}
            grid={{
              gutter: 16,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 8
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.titleDirection}>
                  <Icon
                    type={item.titleDirection}
                    style={{ fontSize: "36px", textAlign: "center" }}
                  />
                </Card>
              </List.Item>
            )}
          />
        </span>
        <span>
        <Divider><h3 style={{ fontSize: "14px" }}>Brand Logo</h3></Divider>
          <List
          className="icon-color-antd"
            style={{ textAlign: "center" }}
            grid={{
              gutter: 16,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 8
            }}
            dataSource={dataLogo}
            renderItem={item => (
              <List.Item>
                <Card title={item.titleLogo}>
                  <Icon
                    type={item.titleLogo}
                    style={{ fontSize: "36px", textAlign: "center" }}
                  />
                </Card>
              </List.Item>
            )}
          />
        </span>
      </div>
    );
  }
}
export default TabIconNative;
