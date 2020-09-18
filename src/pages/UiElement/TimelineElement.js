import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Timeline,
  Avatar,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Col,
  Divider
} from "antd";
import FeatherIcon from "feather-icons-react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
const { Meta } = Card;
class TimelineElement extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper
        title="Timeline"
        content="A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."
      >
        <Row gutter={24}>
          <Col span={24}>
            <Card
              title="Alternate"
              bordered={false}
              style={{ marginBottom: 24 }}
            >
              <div style={{ marginBottom: 48, textAlign: "center" }}>
                <h2>HISTORY OF BITCOIN</h2>
                <p>
                  A timeline that shows bitcoin History from the idea all the
                  way to present day.
                </p>
              </div>
              <Timeline mode="alternate">
                <Timeline.Item
                  dot={
                    <Icon
                      type="flag"
                      style={{ fontSize: "22px", color: "#833ab4" }}
                    />
                  }
                >
                  <h1>2007</h1>
                  Satoshi Nakamoto began working on the Bitcoin concept
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="container"
                      style={{ fontSize: "22px", color: "#833ab4" }}
                    />
                  }
                >
                  <h1>2008</h1>
                  <p>
                    Neal Kin, Vladimir Oksman, and Charles Bry file an
                    application for an encryption patent application.
                    <br />
                    Bitcoin.org was registered at anonymousspeech.co
                    <br />
                    <strong>February</strong>
                  </p>
                  <p>
                    Nakamoto describes the Bitcoin currency and solves the
                    problem of double spending.
                    <br />
                    <strong>February</strong>
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="fire"
                      style={{ fontSize: "22px", color: "#833ab4" }}
                    />
                  }
                >
                  <h1>2009</h1>
                  <p>
                    Block 0 is established.
                    <br />
                    Version 0.1 of Bitcoin is released.
                    <br />
                    The first Bitcoin transaction..
                    <br />
                    <strong>Maret</strong>
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="sound"
                      style={{ fontSize: "22px", color: "#833ab4" }}
                    />
                  }
                >
                  <h1>2010</h1>
                  <p>
                    The Bitcoin Market is established as a Bitcoin currency
                    exchange.
                    <br />
                    Encryption patent is published.
                    <br />
                    The first real-world transaction using 10,000 BTC spent on
                    pizza
                    <br />
                    <strong>April</strong>
                  </p>
                  <p>
                    Bitcoind compiled for Nokia N900.
                    <br />
                    First mobile Bitcoin transaction.
                    <br />
                    Difficulty increases.
                    <br />
                    <strong>December</strong>
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <FeatherIcon
                      icon="instagram"
                      style={{ fontSize: "22px", color: "#833ab4" }}
                    />
                  }
                >
                  <h1>2011</h1>
                  <p>
                    Silk Road opens for business.
                    <br />
                    25% of total Bitcoins generated.
                    <br />
                    <strong>January</strong>
                  </p>
                  <p>
                    Bitcoin Market drops PayPal.
                    <br />
                    The largest percentage price decrease to-date became known
                    as the Great Bubble of 2011. Top of bubble at $31.
                    <br />
                    WikiLeaks starts accepting Bitcoin.
                    <br />
                    Major breach of security at MtGox.
                    <br />
                    Difficulty passes 1 million.
                    <br />
                    <strong>June</strong>
                  </p>
                  <p>
                    Bitcoin & Future Technology European Conference in Prague,
                    Czech Republic.
                    <br />
                    <strong>November</strong>
                  </p>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <FeatherIcon
                      icon="map-pin"
                      style={{ fontSize: "22px", color: "c13584" }}
                    />
                  }
                >
                  <h1>2012</h1>
                  <p>
                    London 2012 Bitcoin Conference.
                    <br />
                    Bitcoin Foundation begins.
                    <br />
                    <strong>September</strong>
                  </p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card title="Timeline with color" bordered={false}>
              <p>
                Set the color of circles. <code>green</code> means completed or
                success status, <code>red</code> means warning or error, and{" "}
                <code>blue</code> means ongoing or other default status.
              </p>
              <br />
              <Timeline>
                <Timeline.Item color="#405de6">
                  Create a services site 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="#5851db">
                  Create a services site 2015-09-01
                </Timeline.Item>
                <Timeline.Item color="#833ab4">
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <Card title="Right alternate" bordered={false}>
              <br />
              <Timeline mode="right">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="clock-circle-o"
                      style={{ fontSize: "16px", color: "#405de6" }}
                    />
                  }
                >
                  Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>
                  Network problems being solved 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="alert"
                      style={{ fontSize: "16px", color: "#5851db" }}
                    />
                  }
                >
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <Icon
                      type="video-camera"
                      style={{ fontSize: "16px", color: "#833ab4" }}
                    />
                  }
                >
                  <p>Network problems being solved </p>
                  <p>2015-09-01 Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default TimelineElement;
