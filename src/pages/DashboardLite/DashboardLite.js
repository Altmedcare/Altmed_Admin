import React, {PureComponent} from "react";
import {connect} from "dva";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import {
    ChartCard,
    Field,
    MiniArea,
    MiniBar,
    WaterWave,
    Pie,
    yuan,
    Radar
} from "@/components/Charts";
import Trend from "@/components/Trend";
import NumberInfo from "@/components/NumberInfo";
import ActiveChart from "@/components/ActiveChart";
import {
    Row,
    Col,
    Icon,
    Tooltip,
    Card,
    Table,
    Divider,
    Tag,
    Button,
    List,
    Avatar,
    Comment,
    Steps,
    Progress,
    Timeline,
    Rate
} from "antd";
import numeral from "numeral";
import moment from "moment";
import styles from "./index.less";
import CountDown from "@/components/CountDown";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import AvantDashboardBg from "../../assets/statistic.png";
import {Auth, Hub} from "aws-amplify";
import {AUTH_USER_TOKEN_KEY} from "@/utils/constants";

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1143459_4dll16fwrmd.js"
});
const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: {marginBottom: 0}
};
const {Step} = Steps;
const dataProduct = [
    {
        title: "aPhone V",
        avatar: "https://image.flaticon.com/icons/svg/281/281206.svg",
        rate: 4,
        color: "#472a49",
        tagContent: "245,898",
        percent: 87
    },
    {
        title: "aMak",
        avatar: "https://image.flaticon.com/icons/svg/281/281288.svg",
        rate: 4,
        color: "#2e80f7",
        tagContent: "3.267.003",
        percent: 95
    },
    {
        title: "ISpeaker",
        avatar: "https://image.flaticon.com/icons/svg/124/124097.svg",
        rate: 3,
        color: "#5da8dc",
        tagContent: "12.983",
        percent: 35
    }
];

const dataCountryOne = [
    {
        title: "USA",
        avatar: "https://image.flaticon.com/icons/svg/551/551953.svg",
        color: "#52c41a",
        icon: "caret-up",
        description: "2.309"
    },
    {
        title: "South Korea",
        avatar: "https://image.flaticon.com/icons/svg/197/197582.svg",
        color: "#52c41a",
        icon: "caret-up",
        description: "6.543"
    }
];
const dataCountrySecond = [
    {
        title: "Eurpoean Union",
        avatar: "https://image.flaticon.com/icons/svg/197/197615.svg",
        color: "#52c41a",
        icon: "caret-up",
        description: "6.543"
    },
    {
        title: "United Kingdom",
        avatar: "https://image.flaticon.com/icons/svg/197/197540.svg",
        color: "#f5222d",
        icon: "caret-down",
        description: "1.986"
    }
];

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
    visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
            "YYYY-MM-DD"
        ),
        y: Math.floor(Math.random() * 100) + 10
    });
}
const targetTime = new Date().getTime() + 3900000;
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
    });
}
const salesPieData = [
    {
        x: "Account Balance",
        color: "#222222",
        y: 276747
    },
    {
        x: "Total Sales",
        y: 69690
    },
    {
        x: "Growth / Month",
        y: 31130
    },
    {
        x: "Overall Rank",
        y: 23410
    }
];

class DashboardLite extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {


        if (localStorage.getItem(AUTH_USER_TOKEN_KEY) == null) {
            this.props.history.push({
                pathname: '/user/login'
            })
        }
    }

    render() {
        return (
            <Row gutter={24}>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <ChartCard
                        style={{
                            backgroundColor: "rgba(21, 97, 174)",
                            color: "#ffffff",
                            backgroundSize: "cover",
                            backgroundBlendMode: "soft-light",
                            position: "relative",
                            backgroundImage: `url(${AvantDashboardBg})`
                        }}
                        bordered={false}
                        title={
                            <FormattedMessage
                                id="app.analysis.visits"
                                defaultMessage="Visits"
                            />
                        }
                        action={
                            <Tooltip
                                title={
                                    <FormattedMessage
                                        id="app.analysis.visits"
                                        defaultMessage="Visits"
                                    />
                                }
                            >
                                <Icon type="stock" style={{fontSize: "22px"}}/>
                            </Tooltip>
                        }
                        total={numeral(89432).format("0,0")}
                        footer={
                            <Field
                                label={
                                    <FormattedMessage
                                        id="app.analysis.day-sales"
                                        defaultMessage="Daily Visit"
                                    />
                                }
                                value={`$ ${numeral(73592).format("0,0")}`}
                            />
                        }
                        contentHeight={50}
                    >
                        <ActiveChart/>
                    </ChartCard>
                </Col>
                <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                    <ChartCard
                        title="Percentage"
                        style={{background: "#0052CC", color: "#ffffff"}}
                        bordered={false}
                        action={
                            <Tooltip
                                title={
                                    <FormattedMessage
                                        id="app.analysis.introduce"
                                        defaultMessage="Introduce"
                                    />
                                }
                            >
                                <Icon type="deployment-unit" style={{fontSize: "22px"}}/>
                            </Tooltip>
                        }
                        total="120%"
                        footer={
                            <div style={{whiteSpace: "nowrap", overflow: "hidden"}}>
                                <Trend flag="up" style={{marginRight: 16}}>
                                    <FormattedMessage
                                        id="app.analysis.week"
                                        defaultMessage="Weekly Changes"
                                    />
                                    <span className={styles.trendText}>12%</span>
                                </Trend>
                                <Trend flag="down">
                                    <FormattedMessage
                                        id="app.analysis.day"
                                        defaultMessage="Weekly Changes"
                                    />
                                    <span className={styles.trendText}>11%</span>
                                </Trend>
                            </div>
                        }
                        contentHeight={50}
                    >
                        <MiniBar color="rgba(0,0,0,0.5)" data={visitData}/>
                    </ChartCard>
                </Col>
                <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                    <ChartCard
                        style={{background: "#6554C0", color: "#ffffff"}}
                        title="Operational"
                        bordered={false}
                        title={
                            <FormattedMessage
                                id="app.analysis.payments"
                                defaultMessage="Payments"
                            />
                        }
                        action={
                            <Tooltip
                                title={
                                    <FormattedMessage
                                        id="app.analysis.introduce"
                                        defaultMessage="Introduce"
                                    />
                                }
                            >
                                <Icon type="credit-card" style={{fontSize: "22px"}}/>
                            </Tooltip>
                        }
                        total={numeral(6560).format("0,0")}
                        footer={
                            <Field
                                label={
                                    <FormattedMessage
                                        id="app.analysis.conversion-rate"
                                        defaultMessage="Conversion Rate"
                                    />
                                }
                                value="85%"
                            />
                        }
                        contentHeight={50}
                    >
                        <MiniBar color="rgba(0,0,0,0.5)" data={visitData}/>
                    </ChartCard>
                </Col>
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div
                        className={styles.boxNonTitle}
                        style={{
                            padding: "24px",
                            minHeight: "250px"
                        }}
                    >
                        <h1>
                            Profile Verification
                            <Icon type="more"/>
                            <Icon type="pushpin"/>
                            <Icon type="share-alt"/>
                        </h1>

                        <div className={styles.boxProfileNotf}>
                            <div>
                                {" "}
                                <Avatar
                                    style={{width: 60, height: 60}}
                                    src="https://image.flaticon.com/icons/svg/145/145843.svg"
                                    alt="Han Solo"
                                />
                            </div>
                            <div>
                                <h3>
                                    Han Solo <span>Login 3 day ago</span>
                                </h3>
                                <p>
                                    We supply a series of design principles, practical patterns
                                    and high quality.
                                </p>
                            </div>
                        </div>

                        <Steps current={1} size="small">
                            <Step
                                status="finish"
                                title="Login"
                                icon={
                                    <Icon
                                        theme="twoTone"
                                        twoToneColor="#0052CC"
                                        type="safety-certificate"
                                    />
                                }
                            />
                            <Step
                                status="finish"
                                title="Verification"
                                icon={
                                    <Icon theme="twoTone" twoToneColor="#6554C0" type="bulb"/>
                                }
                            />
                            <Step
                                status="process"
                                title="Pay"
                                icon={
                                    <Icon theme="twoTone" twoToneColor="#00B8D9" type="dollar"/>
                                }
                            />
                            <Step
                                status="wait"
                                title="Done"
                                icon={
                                    <Icon theme="twoTone" twoToneColor="#36B37E" type="check-circle"/>
                                }
                            />
                        </Steps>
                    </div>
                </Col>

                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div
                        className={styles.boxNonTitle}
                        style={{padding: "24px", minHeight: "250px"}}
                    >
                        <h1>
                            My Sales Indicator
                            <Icon type="pushpin"/>
                            <Icon type="share-alt"/>
                            <Icon type="more"/>
                        </h1>

                        <Row>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <List
                                    className={styles.listFlag}
                                    itemLayout="horizontal"
                                    dataSource={dataCountryOne}
                                    renderItem={item => (
                                        <List.Item
                                            extra={
                                                <div className={styles.iconFlag}>
                                                    <Icon
                                                        style={{color: item.color}}
                                                        type={item.icon}
                                                    />
                                                </div>
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar}/>}
                                                title={<a href="#">{item.title}</a>}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <List
                                    className={styles.listFlag}
                                    itemLayout="horizontal"
                                    dataSource={dataCountrySecond}
                                    renderItem={item => (
                                        <List.Item
                                            extra={
                                                <div className={styles.iconFlag}>
                                                    <Icon
                                                        style={{color: item.color}}
                                                        type={item.icon}
                                                    />
                                                </div>
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar}/>}
                                                title={<a href="#">{item.title}</a>}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col
                    xl={12}
                    lg={12}
                    md={24}
                    sm={24}
                    xs={24}
                    style={{marginBottom: 24}}
                >
                    <div className={styles.boxNonTitle} style={{padding: 24}}>
                        <h1 style={{padding: "0 0 35px"}}>
                            Invoice
                            <Button size="small" shape="round">Last 7 days</Button>
                        </h1>
                        <div className={styles.boxReport}>
                            <div>
                                {" "}
                                <h1>
                                    27.674<small style={{backgroundColor: "#1890ff"}}>K</small>
                                </h1>
                                <span>Account Balance (CNY)</span>
                            </div>
                            <div>
                                {" "}
                                <h1>
                                    6.969<small style={{backgroundColor: "#59D4D4"}}>K</small>
                                </h1>
                                <span>Total Sales</span>
                            </div>
                        </div>
                        <div style={{padding: "24px 0"}}>
                            <Pie
                                title="Chart Version"
                                subTitle="Chart Version"
                                total={() => (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: yuan(
                                                salesPieData.reduce((pre, now) => now.y + pre, 0)
                                            )
                                        }}
                                    />
                                )}
                                data={salesPieData}
                                valueFormat={val => (
                                    <span dangerouslySetInnerHTML={{__html: yuan(val)}}/>
                                )}
                                height={245}
                            />
                        </div>
                        <div
                            className={styles.boxReport}
                            style={{borderTop: "1px solid #eeeeee"}}
                        >
                            <div style={{borderBottom: "none", paddingTop: 36}}>
                                <h1>
                                    85<small style={{backgroundColor: "#6BD48E"}}>%</small>
                                </h1>
                                <span>Growth / Month</span>
                            </div>
                            <div style={{borderBottom: "none", paddingTop: 36}}>
                                <h1>
                                    574 <small style={{backgroundColor: "#5243AA"}}>R</small>
                                </h1>
                                <span>Overall Rank</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
                    xl={12}
                    lg={12}
                    md={24}
                    sm={24}
                    xs={24}
                    style={{marginBottom: 24}}
                >
                    <div
                        className={styles.boxNonTitle}
                        style={{
                            padding: 24,
                            color: "#ffffff",
                            backgroundSize: "cover",
                            backgroundBlendMode: "overlay",
                            position: "relative",
                        }}
                    >

                        <h1 style={{padding: "0 0 35px"}}>
                            Top Product
                            <Button size="small" shape="round">Last 7 days</Button>
                        </h1>
                        <List
                            className={styles.ProducaAvant}
                            itemLayout="vertical"
                            dataSource={dataProduct}
                            renderItem={item => (
                                <List.Item style={{position: "relative", margin: "36px 48px"}}>
                                    <List.Item.Meta
                                        style={{padding: 0, margin: 0}}
                                        title={
                                            <a style={{fontWeight: "500", fontSize: 14}} href="#">
                                                {item.title}
                                            </a>
                                        }
                                    />

                                    <h1
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 28,
                                            margin: 0,
                                            color: `${item.color}`
                                        }}
                                    >
                                        {item.tagContent}
                                    </h1>
                                    <h6
                                        style={{
                                            marginLeft: 0,
                                            fontWeight: "700",
                                            fontSize: 14
                                        }}
                                    >
                                        Sales
                                    </h6>
                                    <Rate
                                        style={{
                                            position: "absolute",
                                            top: 10,
                                            right: 0,
                                            fontSize: "14px",
                                            color: "#178FFF"
                                        }}
                                        disabled
                                        defaultValue={item.rate}
                                    />
                                    <Progress
                                        style={{padding: 0}}
                                        strokeColor={item.color}
                                        percent={item.percent}
                                        strokeWidth={8}
                                        status="active"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default DashboardLite;
