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
  Menu,
  Radio,
  Icon,
  Layout,
  Tooltip,
  Breadcrumb,
  Row,
  Slider,
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import "react-awesome-button/dist/themes/theme-blue.css";
import styles from "./style.less";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class GridElement extends PureComponent {
  gutters = {};

  colCounts = {};

  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      colCountKey: 2
    };
    [0, 8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.gutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      this.colCounts[i] = value;
    });
  }

  onGutterChange = gutterKey => {
    this.setState({ gutterKey });
  };

  onColCountChange = colCountKey => {
    this.setState({ colCountKey });
  };
  render() {
    const { gutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = "";
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    return (
      <PageHeaderWrapper
        title="24 Grids System"
        style={{ background: "#333" }}
        content={
          <div>
            <h3 >When To Use#</h3>
            <ul style={{ listStyle: "inherit" }}>
              <li>
                <p>
                  Establish a set of <code>column</code> in the horizontal space
                  defined by <code>row</code> (abbreviated col)
                </p>
              </li>
              <li>
                <p>
                  Your content elements should be placed directly in the{" "}
                  <code>col</code>, and only <code>col</code> should be placed
                  directly in <code>row</code>
                </p>
              </li>
              <li>
                <p>
                  The column grid system is a value of 1-24 to represent its
                  range spans. For example, three columns of equal width can be
                  created by <code>.col-8</code> (<code>span=8</code>).
                </p>
              </li>
              <li>
                <p>
                  If the sum of <code>col</code> spans in a <code>row</code> are
                  more than 24, then the overflowing <code>col</code> as a whole
                  will start a new line arrangement.
                </p>
              </li>
            </ul>
          </div>
        }
      >
        <div className="gutter-example">
          <Row type="flex" gutter={24}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24} order={1}>
              <Card
                title="Basic"
                bordered={false}
                style={{ marginBottom: "24px" }}
              >
                <div className="componentsButtonDemo">
                  <div>
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ marginRight: 6 }}>Gutter (px): </span>
                      <div style={{ width: "50%" }}>
                        <Slider
                          min={0}
                          max={Object.keys(this.gutters).length - 1}
                          value={gutterKey}
                          onChange={this.onGutterChange}
                          marks={this.gutters}
                          step={null}
                        />
                      </div>
                      <span style={{ marginRight: 6 }}>Column Count:</span>
                      <div style={{ width: "50%" }}>
                        <Slider
                          min={0}
                          max={Object.keys(this.colCounts).length - 1}
                          value={colCountKey}
                          onChange={this.onColCountChange}
                          marks={this.colCounts}
                          step={null}
                        />
                      </div>
                    </div>
                    <Row gutter={this.gutters[gutterKey]}>{cols}</Row>
                    <pre>{`<Row gutter={${
                      this.gutters[gutterKey]
                    }}>\n${colCode}</Row>`}</pre>
                    <p>
                      Referring to the Bootstrap{" "}
                      <a href="http://getbootstrap.com/css/#grid-media-queries">
                        responsive design
                      </a>
                      , here preset six dimensions: <code>xs</code>{" "}
                      <code>sm</code> <code>md</code> <code>lg</code>{" "}
                      <code>xl</code>.
                    </p>

                    <pre>{`<Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>`}</pre>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default GridElement;
