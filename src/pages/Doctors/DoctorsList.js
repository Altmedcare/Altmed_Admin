import React, {PureComponent} from "react";
import {connect} from "dva";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import {Table, Divider, Tag, Card, Row, Col, Button, Icon, Modal} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: "Phone Number",
        dataIndex: "age",
        key: "age"
    },
    {
        title: "Email",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Status",
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
        <Button icon="edit" style={{float: "left"}} href="/doctor-view"></Button>
                <Button icon="delete"  style={{marginLeft: 8}} ></Button>
                {/*<Button*/}
                {/*    icon="delete"*/}
                {/*    style={{ float: "right" }}*/}
                {/*    href="javascript:;"*/}
                {/*    type="danger"*/}
                {/*>*/}
                {/*  Delete*/}
                {/*</Button>*/}
      </span>
        )
    }
];

const data = [
    {
        key: "1",
        name: "John Brown",
        age: 3232323232,
        address: "New York No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "2",
        name: "Jim Green",
        age: 4242442242,
        address: "London No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "3",
        name: "Joe Black",
        age: 3232323232,
        address: "Sidney No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "3",
        name: "Ariana Grande",
        age: 2222222222,
        address: "Sidney No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "1",
        name: "John Brown",
        age: 3232323232,
        address: "New York No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "2",
        name: "Jim Green",
        age: 4242424242,
        address: "London No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "3",
        name: "Joe Black",
        age: 3232323232,
        address: "Sidney No. 1 Lake Park",
        tags: ["status"]
    },
    {
        key: "3",
        name: "Ariana Grande",
        age: 22,
        address: "Sidney No. 1 Lake Park",
        tags: ["status"]
    }
];

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

class DoctorsList extends PureComponent {
    render() {
        return (

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
                            <Table columns={columns} dataSource={data}/>
                        </Col>
                    </Row>
                </div>
            </Card>

        );
    }
}

export default DoctorsList;
