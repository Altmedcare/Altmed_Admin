import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
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
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";

class BlankPage extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper
        title="Map"
        content="A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."
      >
        <Card bordered={false}>
          <div className="gutter-example">
            <Row gutter={10}>
              <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12} xl={12}>
                Map  https://react-leaflet.js.org/docs/en/examples.html
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BlankPage;
