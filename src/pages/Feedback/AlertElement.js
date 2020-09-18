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

const onClose = e => {
  console.log(e, "I was closed.");
};
class AlertElement extends PureComponent {
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
        title="Alert"
        style={{ background: "#333" }}
        content={
          <div>
            <h3 >When To Use#</h3>
            <ul style={{ listStyle: "inherit" }}>
              <li>When you need to show alert messages to users</li>
              <li>
                {" "}
                When you need a persistent static container which is closable by
                user actions.
              </li>
            </ul>
          </div>
        }
      >
        <div className="gutter-example">
          <Row type="flex" gutter={24}>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={1}>
              <Card
                title="Simple"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Alert
                    message="Well done! You successfully read this important alert message."
                    type="success"
                    showIcon
                  />
                  <Alert
                    message="Heads up! This alert needs your attention, but it's not super important."
                    type="info"
                    showIcon
                  />
                  <Alert
                    message="Warning! Better check yourself, you're not looking too good."
                    type="warning"
                    showIcon
                  />
                  <Alert
                    message="Oh snap! Change a few things up and try submitting again."
                    type="error"
                    showIcon
                  />
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={2}>
              <Card
                title="Closeable"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <Alert
                    message="Well done! You successfully read this important alert message."
                    type="success"
                    closable
                    onClose={onClose}
                  />
                  <Alert
                    message="Heads up! This alert needs your attention, but it's not super important."
                    type="info"
                    closable
                    onClose={onClose}
                  />
                  <Alert
                    message="Warning! Better check yourself, you're not looking too good."
                    type="warning"
                    closable
                    onClose={onClose}
                  />
                  <Alert
                    message="Oh snap! Change a few things up and try submitting again."
                    type="error"
                    closable
                    onClose={onClose}
                  />
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={3}>
              <Card
                title="With Description"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Alert
                    message="Success Text"
                    description="Success Description Success Description Success Description"
                    type="success"
                  />
                  <Alert
                    message="Info Text"
                    description="Info Description Info Description Info Description Info Description"
                    type="info"
                  />
                  <Alert
                    message="Warning Text"
                    description="Warning Description Warning Description Warning Description Warning Description"
                    type="warning"
                  />
                  <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description"
                    type="error"
                  />
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={4}>
              <Card
                title="Description Icons"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 385 }}
              >
                <div className="componentsButtonDemo">
                  <Alert
                    message="Success Tips"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                  />
                  <Alert
                    message="Informational Notes"
                    description="Additional description and information about copywriting."
                    type="info"
                    showIcon
                  />
                  <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                  />
                  <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                  />
                </div>
              </Card>
            </Col>
            {/* <Col xl={12} lg={8} md={24} sm={24} xs={24} order={5}>
              <Card
                title="Button Loading"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 280 }}
              >
                <div className="componentsButtonDemo" />
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={5}>
              <Card
                title="Button Group"
                bordered={false}
                style={{ marginBottom: "24px", minHeight: 280 }}
              >
                <div className="componentsButtonDemo" />
              </Card>
            </Col> */}
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default AlertElement;
