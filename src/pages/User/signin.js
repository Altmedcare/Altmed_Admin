import React, { Component } from "react";
import { connect } from "dva";
import { Avatar, Divider, Button } from "antd";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import Link from "umi/link";
import { Checkbox, Alert, Icon } from "antd";
import Login from "@/components/Login";
import styles from "./Login.less";

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect(({ login, loading }) => ({
    login,
    submitting: loading.effects["login/login"]
}))
class LoginPage extends Component {
    state = {
        type: "account",
        autoLogin: true
    };

    onTabChange = type => {
        this.setState({ type });
    };

    onGetCaptcha = () =>
        new Promise((resolve, reject) => {
            this.loginForm.validateFields(["mobile"], {}, (err, values) => {
                if (err) {
                    reject(err);
                } else {
                    const { dispatch } = this.props;
                    dispatch({
                        type: "login/getCaptcha",
                        payload: values.mobile
                    })
                        .then(resolve)
                        .catch(reject);
                }
            });
        });

    handleSubmit = (err, values) => {
        const { type } = this.state;
        if (!err) {
            const { dispatch } = this.props;
            dispatch({
                type: "login/login",
                payload: {
                    ...values,
                    type
                }
            });
        }
    };

    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked
        });
    };

    renderMessage = content => (
        <Alert
            style={{ marginBottom: 24 }}
            message={content}
            type="error"
            showIcon
        />
    );

    render() {
        const { login, submitting } = this.props;
        const { type, autoLogin } = this.state;
        return (
            <div className={styles.main}>
                <Login
                    defaultActiveKey={type}
                    onTabChange={this.onTabChange}
                    onSubmit={this.handleSubmit}
                    ref={form => {
                        this.loginForm = form;
                    }}
                >
                    <Tab
                        key="account"
                        tab={formatMessage({ id: "app.login.tab-login-credentials" })}
                    >
                        {login.status === "error" &&
                        login.type === "account" &&
                        !submitting &&
                        this.renderMessage(
                            formatMessage({ id: "app.login.message-invalid-credentials" })
                        )}
                        <UserName
                            name="userName"
                            placeholder={`${formatMessage({
                                id: "app.login.userName"
                            })}: admin or user`}
                            rules={[
                                {
                                    required: true,
                                    message: formatMessage({ id: "validation.userName.required" })
                                }
                            ]}
                        />
                        <Password
                            name="password"
                            placeholder={`${formatMessage({
                                id: "app.login.password"
                            })}: admin`}
                            rules={[
                                {
                                    required: true,
                                    message: formatMessage({ id: "validation.password.required" })
                                }
                            ]}
                            onPressEnter={e => {
                                e.preventDefault();
                                this.loginForm.validateFields(this.handleSubmit);
                            }}
                        />
                    </Tab>
                    <Tab
                        key="mobile"
                        tab={formatMessage({ id: "app.login.tab-login-mobile" })}
                    >
                        {login.status === "error" &&
                        login.type === "mobile" &&
                        !submitting &&
                        this.renderMessage(
                            formatMessage({
                                id: "app.login.message-invalid-verification-code"
                            })
                        )}
                        <Mobile
                            name="mobile"
                            placeholder={formatMessage({
                                id: "form.phone-number.placeholder"
                            })}
                            rules={[
                                {
                                    required: true,
                                    message: formatMessage({
                                        id: "validation.phone-number.required"
                                    })
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: formatMessage({
                                        id: "validation.phone-number.wrong-format"
                                    })
                                }
                            ]}
                        />

                    </Tab>


                    <Link to="/dashboardlite">
                        <Button type="primary" size='large' styles={{marginBottom: "30px"}} block>
                            <FormattedMessage id="app.login.login" />
                        </Button>
                    </Link>
                    <div styles={{ marginBottom: 10 }}>
                        <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                            <FormattedMessage id="app.login.remember-me" />
                        </Checkbox>
                        <a style={{ float: "right" }} href="">
                            <FormattedMessage id="app.login.forgot-password" />
                        </a>
                    </div>


                    <Divider styles={{marginTop: "36px"}}><FormattedMessage id="app.login.sign-in-with" /></Divider>
                    <div className={styles.other}>

                        <Avatar
                            size={36}
                            className={styles.icon}
                            src="https://cdn.worldvectorlogo.com/logos/facebook-3.svg"
                        />
                        <Avatar
                            size={36}
                            className={styles.icon}
                            src="https://cdn.worldvectorlogo.com/logos/twitter-3.svg"
                        />
                        <Avatar
                            size={36}
                            className={styles.icon}
                            src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                        />

                    </div>

                    <Link style={{marginTop:24, display: "block", textAlign:"center"}} className={styles.register} to="/user/register">

                        Don't Have Account?

                    </Link>
                </Login>
            </div>
        );
    }
}

export default LoginPage;
