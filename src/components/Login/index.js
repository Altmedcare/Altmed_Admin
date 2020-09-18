import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Tabs, Row, Col } from "antd";
import classNames from "classnames";
import LoginItem from "./LoginItem";
import LoginTab from "./LoginTab";
import LoginSubmit from "./LoginSubmit";
import styles from "./index.less";
import LoginContext from "./loginContext";
import LoginBg from "../../assets/scene-wireframe-humans.png";
class Login extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onTabChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    className: "",
    defaultActiveKey: "",
    onTabChange: () => {},
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {}
    };
  }

  onSwitch = type => {
    this.setState({
      type
    });
    const { onTabChange } = this.props;
    onTabChange(type);
  };

  getContext = () => {
    const { tabs } = this.state;
    const { form } = this.props;
    return {
      tabUtil: {
        addTab: id => {
          this.setState({
            tabs: [...tabs, id]
          });
        },
        removeTab: id => {
          this.setState({
            tabs: tabs.filter(currentId => currentId !== id)
          });
        }
      },
      form,
      updateActive: activeItem => {
        const { type, active } = this.state;
        if (active[type]) {
          active[type].push(activeItem);
        } else {
          active[type] = [activeItem];
        }
        this.setState({
          active
        });
      }
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { active, type } = this.state;
    const { form, onSubmit } = this.props;
    const activeFileds = active[type];
    form.validateFields(activeFileds, { force: true }, (err, values) => {
      onSubmit(err, values);
    });
  };

  render() {
    const { className, children } = this.props;
    const { type, tabs } = this.state;
    const TabChildren = [];
    const otherChildren = [];
    React.Children.forEach(children, item => {
      if (!item) {
        return;
      }
      // eslint-disable-next-line
      if (item.type.typeName === "LoginTab") {
        TabChildren.push(item);
      } else {
        otherChildren.push(item);
      }
    });
    return (
      <Row>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div
            style={{
              height: "55vh",
              width:"100%",
              backgroundColor: "#f9f9f9",
              backgroundSize: "contain",
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat",
              backgroundBlendMode: "normal",
              borderRadius:"5px 0 0 5px",
              position: "relative",
              backgroundImage: `url(${LoginBg})`
            }}
          >
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <LoginContext.Provider value={this.getContext()}>
            <div className={classNames(className, styles.login)}>
              <Form style={{width:"100%"}} onSubmit={this.handleSubmit}>
                {tabs.length ? (
                  <React.Fragment>
                    <Tabs
                      animated={false}
                      className={styles.tabs}
                      activeKey={type}
                      onChange={this.onSwitch}
                    >
                      {TabChildren}
                    </Tabs>
                    {otherChildren}
                  </React.Fragment>
                ) : (
                  children
                )}
              </Form>
            </div>
          </LoginContext.Provider>
        </Col>
      </Row>
    );
  }
}

Login.Tab = LoginTab;
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach(item => {
  Login[item] = LoginItem[item];
});

export default Form.create()(Login);
