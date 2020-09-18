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
  Modal,
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

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}
class AlertElement extends PureComponent {
  state = {
    visible: false,
    modal1Visible: false,
    modal2Visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <PageHeaderWrapper
        title="Modal"
        style={{ background: "#333" }}
        content={
          <div style={{ width: "50%" }}>
            <h3 >When To Use#</h3>
            <p>
              When requiring users to interact with the application, but without
              jumping to a new page and interrupting the user's workflow, you
              can use Modal to create a new floating layer over the current page
              to get user feedback or display information. Additionally, if you
              need show a simple confirmation dialog, you can use
              antd.Modal.confirm(), and so on.
            </p>
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
                  <Button type="primary" onClick={this.showModal}>
                    Open Modal
                  </Button>
                  <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                  <Button
                    type="primary"
                    onClick={() => this.setModal1Visible(true)}
                  >
                    Display a modal dialog at 20px to Top
                  </Button>
                  <Modal
                    title="20px to Top"
                    style={{ top: 20 }}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                  >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                  </Modal>
                
                  <Button
                    type="primary"
                    onClick={() => this.setModal2Visible(true)}
                  >
                    Vertically centered 
                  </Button>
                  <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                  >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                  </Modal>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={8} md={24} sm={24} xs={24} order={2}>
              <Card
                title="Information modal dialog"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
                </div>
              </Card>
            </Col>
            
          
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default AlertElement;
