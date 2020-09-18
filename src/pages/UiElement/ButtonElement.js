import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Input,
  DatePicker,
  Divider,
  PageHeader,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Col
} from "antd";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import "react-awesome-button/dist/themes/theme-blue.css";
import styles from "./style.less";
const ButtonGroup = Button.Group;
class ButtonElement extends PureComponent {
  state = {
    loading: false,
    iconLoading: false
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  render() {
    return (
      <PageHeaderWrapper
        title="Button"
        style={{ background: "#333" }}
        content="A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."
      >
        <div className="gutter-example">
          <Row type="flex" gutter={24}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24} order={1}>
              <Card
                title="Button with type"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <AwesomeButton type="primary">Primary</AwesomeButton>
                  <AwesomeButton type="secondary">Secondary</AwesomeButton>
                  <AwesomeButtonProgress
                    type="primary"
                    onPress={next => {
                      // do a sync/async task then call `next()`
                    }}
                  >
                    Primary Progress
                  </AwesomeButtonProgress>
            
   
                </div>
              </Card>
              <Card
                title="Awesome Social Button"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
         
                  <AwesomeButtonSocial
                    type="facebook"
                    url="https://caferati.me"
                  >
                    Facebook
                  </AwesomeButtonSocial>
                  <AwesomeButtonSocial type="twitter" url="https://caferati.me">
                    Twitter
                  </AwesomeButtonSocial>
                  <AwesomeButtonSocial
                    type="instagram"
                    url="https://caferati.me"
                  >
                    Instagram

                  </AwesomeButtonSocial>
                  <AwesomeButtonSocial
                    type="github"
                    url="https://caferati.me"
                  >
                    github
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                    type="whatsapp"
                    url="https://caferati.me"
                  >
                    whatsapp
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                    type="linkedin"
                    url="https://caferati.me"
                  >
                    Linkedin
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                    type="youtube"
                    url="https://caferati.me"
                  >
                   Youtube
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                    type="reddit"
                    url="https://caferati.me"
                  >
                   Reddit
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                    type="messenger"
                    url="https://caferati.me"
                  >
                   MESSENGER
                    </AwesomeButtonSocial>
                    
                    
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={1}>
              <Card
                title="Button with type"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Button type="primary">Primary</Button>
                  <Button>Default</Button>
                  <Button style={{ background: "#770abb", color: "white" }}>
                    Color
                  </Button>
                  <Button type="dashed">Dashed</Button>
                  <Button type="danger">Danger</Button>
                  <Button type="link">Link</Button>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={2}>
              <Card
                title="Button with icon"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Button type="primary" shape="circle" icon="search" />
                  <Button type="primary" icon="search">
                    Search
                  </Button>
                  <Button shape="circle" icon="search" />
                  <Button icon="search">Search</Button>

                  <Button shape="circle" icon="search" />
                  <Button icon="search">Search</Button>
                  <Button type="dashed" shape="circle" icon="search" />
                  <Button type="dashed" icon="search">
                    Search
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={3}>
              <Card
                title="Blocked Button"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Button type="primary" block>
                    Primary
                  </Button>
                  <Button block>Default</Button>

                  <Button type="dashed" block>
                    Dashed
                  </Button>
                  <Button type="danger" block>
                    Danger
                  </Button>
                  <Button type="link" block>
                    Link
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={4}>
              <Card
                title="Button size"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Radio.Group value="large" onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                  </Radio.Group>
                  <br />
                  <br />
                  <Button type="primary" size="large">
                    Primary
                  </Button>
                  <Button size="large">Normal</Button>
                  <Button type="dashed" size="large">
                    Dashed
                  </Button>
                  <Button type="danger" size="large">
                    Danger
                  </Button>
                  <Button type="link" size="large">
                    Link
                  </Button>
                  <br />
                  <Button
                    type="primary"
                    shape="circle"
                    icon="download"
                    size="large"
                  />
                  <Button
                    type="primary"
                    shape="round"
                    icon="download"
                    size="large"
                  >
                    Download
                  </Button>
                  <Button type="primary" icon="download" size="large">
                    Download
                  </Button>
                  <br />
                  <Button.Group size="large">
                    <Button type="primary">
                      <Icon type="left" />
                      Backward
                    </Button>
                    <Button type="primary">
                      Forward
                      <Icon type="right" />
                    </Button>
                  </Button.Group>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={5}>
              <Card
                title="Button Loading"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 280 }}
              >
                <div className="componentsButtonDemo">
                  <Button type="primary" loading>
                    Loading
                  </Button>

                  <Button type="primary" size="small" loading>
                    Loading
                  </Button>

                  <Button
                    type="primary"
                    loading={this.state.loading}
                    onClick={this.enterLoading}
                  >
                    Click me!
                  </Button>

                  <Button
                    type="primary"
                    icon="poweroff"
                    loading={this.state.iconLoading}
                    onClick={this.enterIconLoading}
                  >
                    Click me!
                  </Button>

                  <Button shape="circle" loading />
                  <Button type="primary" shape="circle" loading />
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={5}>
              <Card
                title="Button Group"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 280 }}
              >
                <div className="componentsButtonDemo">
                  <h4>Basic</h4>
                  <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button>OK</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button disabled>L</Button>
                    <Button disabled>M</Button>
                    <Button disabled>R</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button>L</Button>
                    <Button>M</Button>
                    <Button>R</Button>
                  </ButtonGroup>

                  <h4>With Icon</h4>
                  <ButtonGroup>
                    <Button type="primary">
                      <Icon type="left" />
                      Go back
                    </Button>
                    <Button type="primary">
                      Go forward
                      <Icon type="right" />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button type="primary" size="small" icon="cloud" />
                    <Button type="primary" size="small" icon="cloud-download" />
                  </ButtonGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default ButtonElement;
