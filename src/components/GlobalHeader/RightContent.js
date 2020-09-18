import React, { PureComponent } from "react";
import { FormattedMessage, formatMessage } from "umi-plugin-react/locale";
import {
  Spin,
  Tag,
  Menu,
  Icon,
  Avatar,
  Tooltip,
  message,
  Modal,
  Input,
  Button,
  Badge,
  notification
} from "antd";
import moment from "moment";
import groupBy from "lodash/groupBy";
import HeaderDropdown from "../HeaderDropdown";
import SelectLang from "../SelectLang";
import styles from "./index.less";
const Search = Input.Search;
const openNotificationWithIcon = type => {
  notification[type]({
    message: "Congratulation",
    description: "You made new sales !"
  });

  notification.config({
    placement: "bottomRight",
    bottom: 50,
    duration: 3
  });
};
export default class GlobalHeaderRight extends PureComponent {
  state = {
    modal1Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: "",
          processing: "blue",
          urgent: "red",
          doing: "gold"
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, "type");
  }

  getUnreadData = noticeData => {
    const unreadMsg = {};
    Object.entries(noticeData).forEach(([key, value]) => {
      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }
      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter(item => !item.read).length;
      }
    });
    return unreadMsg;
  };

  changeReadState = clickedItem => {
    const { id } = clickedItem;
    const { dispatch } = this.props;
    dispatch({
      type: "global/changeNoticeReadState",
      payload: id
    });
  };

  render() {
    const {
      currentUser,
      fetchingNotices,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
      theme
    } = this.props;
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);
    let className = styles.right;
    if (theme === "dark") {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        <Tooltip title="Search" overlayClassName="sider-tooltip">
          <a
            rel="noopener noreferrer"
            className={styles.action}
            onClick={() => this.setModal1Visible(true)}
          >
            <Avatar
              style={{
                background: "rgb(235, 238, 243, 0.5)",
                color: "#7887a9"
              }}
              icon="search"
            />
          </a>
        </Tooltip>

        <Modal
          footer={null}
          style={{ top: 60 }}
          bodyStyle={{ padding: "0" }}
          closable={false}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <Search
            style={{ height: "48px" }}
            placeholder="Search..."
            onSearch={value => console.log(value)}
            size="large"
          />
        </Modal>
        <Tooltip title="ECommerce">
          <a rel="noopener noreferrer" className={styles.action}>
            <Badge style={{backgroundColor:"#36b37e"}} count={57}>
              <Avatar
                onClick={() => openNotificationWithIcon("success")}
                style={{
                  background: "rgb(235, 238, 243, 0.5)",
                  color: "#7887a9"
                }}
                icon="shopping"
              />
            </Badge>
          </a>
        </Tooltip>

        <SelectLang className={styles.action} />
      </div>
    );
  }
}
