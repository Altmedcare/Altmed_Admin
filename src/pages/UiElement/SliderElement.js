import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Input,
  Slider,
  Switch,
  DatePicker,
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
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
function formatter(value) {
  return `${value}%`;
}
const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50"
    },
    label: <strong>100°C</strong>
  }
};
const style = {
  float: "left",
  height: 300,
  marginLeft: 70
};
const styleParagrap = {
  marginBottom: 20
};

class SliderElement extends PureComponent {
  state = {
    disabled: false
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  state = {
    inputValue: 1
  };

  onChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { disabled } = this.state;
    const { inputValue } = this.state;

    return (
      <PageHeaderWrapper
        title="Slider"
        content="A Slider component for displaying current value and intervals in range."
      >
        <div className="gutter-example">
          <Row gutter={10}>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="gutter-box avatar-list-avant">
                <Card
                  title="Basic"
                  bordered={false}
                  style={{ marginBottom: "20px", minHeight:300 }}
                >
                  <div>
                    <p style={styleParagrap}>
                      Basic slider. When <code>range</code> is <code>true</code>
                      , display as dual thumb mode. When <code>disable</code> is{" "}
                      <code>true</code>, the slider will not be interactable.
                    </p>
                    <Slider defaultValue={30} disabled={disabled} />
                    <Slider range defaultValue={[20, 50]} disabled={disabled} />
                    Disabled:{" "}
                    <Switch
                      checked={disabled}
                      onChange={this.handleDisabledChange}
                    />
                  </div>
                </Card>
              </div>

              <div className="gutter-box avatar-list-avant">
                <Card
                  title="Vertical"
                  bordered={false}
                  style={{ marginBottom: "20px", minHeight:300 }}
                >
                  <div>
                    <p style={styleParagrap}>
                      Basic slider. When <code>range</code> is <code>true</code>
                      , display as dual thumb mode. When <code>disable</code> is{" "}
                      <code>true</code>, the slider will not be interactable.
                    </p>
                    <div style={{ height: 383 }}>
                      <div style={style}>
                        <Slider vertical defaultValue={30} />
                      </div>
                      <div style={style}>
                        <Slider
                          vertical
                          range
                          step={10}
                          defaultValue={[20, 50]}
                        />
                      </div>
                      <div style={style}>
                        <Slider
                          vertical
                          range
                          marks={marks}
                          defaultValue={[26, 37]}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="gutter-box avatar-list-avant">
                <Card
                  title="Slider with tooltip"
                  bordered={false}
                  style={{ marginBottom: "20px", minHeight:300 }}
                >
                  <div>
                    <p style={styleParagrap}>
                      Use <code>tipFormatter</code> to format content of{" "}
                      <code>Toolip</code>. If <code>tipFormatter</code> is null,
                      hide it.
                    </p>
                    <Slider
                      range
                      defaultValue={[40]}
                      tipFormatter={formatter}
                    />
                    <Slider
                      range
                      defaultValue={[20, 50]}
                      tipFormatter={formatter}
                    />
                    <Slider
                      range
                      defaultValue={[20, 50, 75]}
                      tipFormatter={formatter}
                    />
                  </div>
                </Card>
              </div>
              <div className="gutter-box avatar-list-avant">
                <Card
                  title="Graduated slider"
                  bordered={false}
                  style={{ marginBottom: "20px" }}
                >
                  <div>
                    <p style={styleParagrap}>
                      Using <code>marks</code> property to mark a graduated
                      slider, use <code>value</code> or{" "}
                      <code>defaultValue</code> to specify the position of
                      thumb. When <code>included</code> is false, means that
                      different thumbs are coordinative. when <code>step</code>{" "}
                      is null, users can only slide the thumbs onto marks.
                    </p>
                    <div style={{ padding: "0 20px 0 0" }}>
                      <p>included=true</p>
                      <Slider marks={marks} defaultValue={37} />
                      <Slider range marks={marks} defaultValue={[26, 37]} />

                      <p>included=false</p>
                      <Slider
                        marks={marks}
                        included={false}
                        defaultValue={37}
                      />

                      <p>marks & step</p>
                      <Slider marks={marks} step={10} defaultValue={37} />

                      <p>step=null</p>
                      <Slider marks={marks} step={null} defaultValue={37} />
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default SliderElement;
