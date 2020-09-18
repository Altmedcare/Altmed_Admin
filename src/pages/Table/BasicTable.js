import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import { Table, Divider, Tag, Card, Row, Col, Button, Icon } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "#108ee9" : "#87d068";
          if (tag === "loser") {
            color = "#f50";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Button icon="sound" style={{ float: "left" }} href="javascript:;">
  
        </Button>
        <Button
          icon="delete"
          style={{ float: "right" }}
          href="javascript:;"
          type="danger"
        >
          Delete
        </Button>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "3",
    name: "Ariana Grande",
    age: 22,
    address: "Sidney No. 1 Lake Park",
    tags: ["singer", "model"]
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  },
  {
    key: "3",
    name: "Ariana Grande",
    age: 22,
    address: "Sidney No. 1 Lake Park",
    tags: ["singer", "model"]
  }
];

class BasicTable extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper
        title="Basic Table"
        content="A table displays rows of data. To display a collection of structured data."
      >
        <Card bordered={false}>
          <div className="gutter-example">
            <Row gutter={24}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <Table columns={columns} dataSource={data} />
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicTable;
