import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Avatar,
  Button,
  Card,
  InputNumber,
  Radio,
  Divider,
  Icon,
  Tooltip,
  Row,
  Comment,
  Input,
  List,
  Form,
  Col
} from "antd";
import moment from "moment";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);
const data = [
  {
    actions: [<span>Reply to</span>],
    author: "Ben Ten",
    avatar: "https://randomuser.me/api/portraits/men/69.jpg",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(1, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  }
];

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class AvatarElement extends PureComponent {
  state = {
    likes: 0,
    dislikes: 0,
    action: null
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };
  state = {
    comments: [],
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  // reply
  state = {
    comments: [],
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;
    const { comments, submitting, value } = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            style={{ fontSize: "16px", color: "#08c" }}
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            style={{ fontSize: "16px", color: "#08c" }}
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>
    ];

    return (
      <PageHeaderWrapper
        title="Avatar"
        content="Avatars can be used to represent people or objects. It supports images, <code>Icon</code>s, or letters."
      >
        <Row type="flex" gutter={24}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} order={5}>
            <Card
              title="Basic"
              bordered={false}
              style={{ marginBottom: "24px", minHeight: 280 }}
            >
              <div className="avatar-list-avant">
                <p>Three sizes and two shapes are available.</p>
                <Avatar size={64} icon="user" />
                <Avatar size="large" icon="user" />
                <Avatar icon="user" />
                <Avatar size="small" icon="user" />

                <Avatar shape="square" size={64} icon="user" />
                <Avatar shape="square" size="large" icon="user" />
                <Avatar shape="square" icon="user" />
                <Avatar shape="square" size="small" icon="user" />
              </div>
            </Card>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} order={5}>
            <Card
              title="Type"
              bordered={false}
              style={{ marginBottom: "24px", minHeight: 280 }}
            >
              <div className="avatar-list-avant">
                <p>
                  Image, Icon and letter are supported, and the latter two kinds
                  of avatar can have custom colors and background colors
                </p>
                <Avatar style={{ backgroundColor: "#c50e41" }} icon="user" />
                <Avatar style={{ backgroundColor: "#a90ec5" }}>U</Avatar>
                <Avatar style={{ backgroundColor: "#faad14" }}>
                  User Admin
                </Avatar>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: "#650ec5" }}>U</Avatar>
                <Avatar style={{ backgroundColor: "#0e79c5" }} icon="user" />
              </div>
            </Card>
          </Col>
        </Row>
        <Card bordered={false} title="Avatar on Comments">
          <div className="gutter-example">
            <Row type="flex" gutter={24}>
              <Col className="gutter-row" span={18}>
                <div className="avatar-list-avant">
                  <p>
                    Image, Icon and letter are supported, and the latter two
                    kinds of avatar can have custom colors and background colors
                  </p>
                  <Comment
                    actions={actions}
                    author={<a>Veronica</a>}
                    avatar={
                      <Avatar
                        src="https://randomuser.me/api/portraits/women/69.jpg"
                        alt="Veronica"
                      />
                    }
                    content={
                      <p>
                        We supply a series of design principles, practical
                        patterns and high quality design resources (Sketch and
                        Axure), to help people create their product prototypes
                        beautifully and efficiently.
                      </p>
                    }
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                  />
                  <div className="Reply" style={{ marginLeft: "55px" }}>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <List
                      className="comment-list"
                      header={`${data.length} replies`}
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <li>
                          <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                          />
                        </li>
                      )}
                    />
                    ,
                    <Comment
                      avatar={
                        <Avatar
                          src="https://randomuser.me/api/portraits/men/39.jpg"
                          alt="Mark Viduka"
                        />
                      }
                      content={
                        <Editor
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      }
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AvatarElement;
