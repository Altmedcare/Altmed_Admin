import React, { Component } from "react";
import {
  Form,
  DatePicker,
  Select,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Input,
  Button,
  Col
} from "antd";
import FeatherIcon from "feather-icons-react";
class TestArea extends Component {
  render() {
    return (
      <div className="demo-test-area--wrapper">
        <form
          className="demo-test-area"
          onSubmit={e => {
            e.preventDefault();
            this.props.onMessage(this.textArea.value);
            this.textArea.value = "";
          }}
          showEmoji={true}
        >
          <Row gutter={24}>
            <Col xl={21} lg={21} md={21} sm={24} xs={24}>
              <textarea
                ref={e => {
                  this.textArea = e;
                }}
                className="demo-test-area--text"
                placeholder="Write a test message...."
              />
            </Col>
            <Col xl={3} lg={3} md={3} sm={24} xs={24}>
              <button className="demo-test-area--button">
        
                <FeatherIcon icon="send" />
              </button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default TestArea;
