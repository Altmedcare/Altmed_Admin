import React, {PureComponent} from "react";
import {Table, Divider, Tag, Card, Row, Col, Button, Icon, Modal, Select, Form} from "antd";
import {performRequest} from "../../../services/api";
import DoctorView from "@/pages/Doctors/DoctorView";
import Link from 'umi/link';
import AWS from "aws-sdk";
import {AUTH_USER_TOKEN_KEY} from "@/utils/constants";


class DoctorsList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            loading: true,
            doctorView: true
        }
    }


    statusChange = (e, key) => {
        const data = this.state.doctors;
        const newData = data.map(item => ({...item}));

        newData.map(function (each) {
            if (each.Username == key) {
                let exist = false;
                each.Attributes.map(function (eachElement) {
                    if (eachElement.Name == 'custom:doctor_status') {
                        eachElement.Value = e;
                        exist = true;
                    }
                })
                if (!exist) {
                    each.Attributes.push({'Name': 'custom:doctor_status','Value':e})
                    console.log('each.Attributes',each.Attributes)

                }


            }


        });
        this.setState({
            doctors: newData,
        })


        const AWSConfig = {
            accessKeyId: 'AKIATUPTMLPP37TGUMEZ',
            secretAccessKey: 'DRbjr5H35X/0HGJ1ZQ+FTQgOwJzhZThOy1SDTImw',
            region: 'ap-south-1',
            sessionToken: null,
            userPoolId: "ap-south-1_p7Jz6LG3T",//YOUR UserPoolID
            username: key,
        }
        AWS.config.correctClockSkew = true;
        AWS.config.update(AWSConfig);
        const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
        cognitoidentityserviceprovider.adminUpdateUserAttributes({

            UserPoolId: "ap-south-1_p7Jz6LG3T",//YOUR UserPoolID
            Username: key,//username
            UserAttributes: [

                {
                    "Name": "custom:doctor_status",
                    "Value": e
                },

            ],
        }, function (res) {
            console.log(res, 'res')
        });


    }

    componentDidMount() {
        if (localStorage.getItem(AUTH_USER_TOKEN_KEY) == null) {
            this.props.history.push({
                pathname: '/user/login'
            })
        }
        performRequest('get', '/api/doctors')
            .then(response => {
                console.log(response.data.data, 'asasd')
                this.setState({
                    doctors: response.data.data,
                    loading: false
                })

            });
    }

    editDoctor = () => {
        this.setState({
            // doctorView:false
        })

    }

    render() {
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
                key: "address",

            },
            {
                title: "Status",
                key: "tags",
                dataIndex: "tags",
                render: (tags, text) => (
                    <span>
        {[tags].map(tag => {
            let color = tag.length > 5 ? "#108ee9" : "#87d068";
            if (tag === "loser") {
                color = "#f50";
            }
            return (
                <Form.Item>
                    <Select placeholder="Please select" style={{width: 100, marginTop: 20}}
                            onChange={(e) => this.statusChange(e, text.key)}
                            value={tag}
                    >
                        <Option value="1">Accept</Option>
                        <Option value="0">Reject</Option>
                    </Select>

                </Form.Item>
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
                    <Link to={{pathname: '/doctor-view', state: {id: text.key}}}>

        <Button icon="edit" style={{float: "left"}}/>
        </Link>
                <Button icon="delete" style={{marginLeft: 8}}/>
      </span>

                )
            }
        ];

        let data = [];
        this.state.doctors.map(function (e) {

            if (e.Attributes.length) {
                console.log(e.Attributes)
                let username = e.Username;
                var name = '';
                var phone = '';
                var email = '';
                var status = '';
                e.Attributes.map(function (each) {
                    if (each.Name === "custom:full_name") {
                        name = each.Value;

                    }
                    if (each.Name === "phone_number") {
                        phone = each.Value;
                    }
                    if (each.Name === "email") {
                        email = each.Value;
                    }
                    if (each.Name === "custom:doctor_status") {
                        status = each.Value;
                    }

                })


                data.push({
                    key: username,
                    name: name,
                    age: phone,
                    address: email,
                    tags: status
                })
            }
            // e.attribute[8].full_name
        })

        return (
            <div>
                {this.state.doctorView ?
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

                                    <Table columns={columns} dataSource={data}
                                           loading={this.state.loading}
                                    />


                                </Col>

                            </Row>
                        </div>
                    </Card>
                    : <DoctorView/>
                }
            </div>

        );
    }
}

export default DoctorsList;
