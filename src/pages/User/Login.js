import React, {Component} from "react";
import {connect} from "dva";
import {Avatar, Divider, Button, Col} from "antd";
import {formatMessage, FormattedMessage} from "umi-plugin-react/locale";
import Link from "umi/link";
import {Checkbox, Alert, Icon, Input} from "antd";
import Login from "@/components/Login";
import styles from "./Login.less";
import {Auth} from 'aws-amplify';
import {useHistory} from "react-router-dom";
import {AUTH_USER_TOKEN_KEY} from "@/utils/constants";
import {handler} from '../../services/adminHandler';
import AWS from "aws-sdk";



const {Tab, UserName, Password, Mobile, Captcha, Submit} = Login;


@connect(({login, loading}) => ({
    login,
    submitting: loading.effects["login/login"]
}))
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "account",
            autoLogin: true,
            mobile: '',
            otp: '123456',
            isotp: false,
            user: null,
            detail: null,
            phoneList: [],
            mobileValidation: ''
        };
    }

    onTabChange = type => {
        this.setState({type});
    };


    onGetCaptcha = () =>
        new Promise((resolve, reject) => {
            this.loginForm.validateFields(["mobile"], {}, (err, values) => {
                if (err) {
                    reject(err);
                } else {
                    const {dispatch} = this.props;
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
        const {type} = this.state;
        if (!err) {
            const {dispatch} = this.props;
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
    handleChange = (key, value) => {
        this.setState({mobileValidation: ''});
        this.setState({
            [key.target.id]: key.target.value,
        })
    };
    sentOtp = async () => {

        let username = '+91' + this.state.mobile;
        if (this.state.mobile.length >= 10) {
            try {
                const AWSConfig = {

                }
                AWS.config.update(AWSConfig);
                const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
                const result = await cognitoidentityserviceprovider.listUsersInGroup({

                }, (e, data) => {

                    let phoneList = [];

                    data.Users.map(function (each) {
                        each.Attributes.map(function (e) {
                            if (e.Name == "phone_number") {
                                phoneList.push(e.Value)
                            }
                        })
                    })
                    if (phoneList.some(item => username === item)) {
                        Auth.signIn(username)
                            .then(cognitoUser => {
                                console.log('phoneList',cognitoUser)

                                this.setState({
                                    isotp: true,
                                    user: cognitoUser
                                })
                            });

                    } else {
                        this.setState({
                            mobileValidation: 'Invalid Phone Number'
                        })
                    }


                })


            } catch {

            }

        }

    }
    verifyOtp = async () => {
        let code = this.state.otp;
        let user = this.state.user;
        const cognitoUser = await Auth.sendCustomChallengeAnswer(user, code);

        if (cognitoUser) {
            localStorage.setItem(AUTH_USER_TOKEN_KEY, cognitoUser.Session);

            this.props.history.push({
                pathname: '/dashboardlite',
                state: {detail: cognitoUser.Session}
            })
        }
        if (cognitoUser.signInUserSession) {

        }

    };

    renderMessage = content => (
        <Alert
            style={{marginBottom: 24}}
            message={content}
            type="error"
            showIcon
        />
    );

    render() {
        const {login, submitting} = this.props;
        const {type, autoLogin} = this.state;
        return (
            <div className={styles.main}>
                ----- {process.env.REACT_APP_SECRET_NAME} -----------

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
                        tab={formatMessage({id: "app.login.tab-login-mobile"})}
                    >
                        {login.status === "error" &&
                        login.type === "mobile" &&
                        !submitting &&
                        this.renderMessage(
                            formatMessage({
                                id: "app.login.message-invalid-verification-code"
                            })
                        )}
                        {this.state.isotp ?
                            <Input
                                name="otp"
                                onChange={this.handleChange}
                                placeholder={formatMessage({
                                    id: "OTP"
                                })}
                                style={{marginBottom: 35}}

                            />
                            :
                            <div>
                                <Mobile
                                    name="mobile"
                                    onChange={this.handleChange}
                                    placeholder={formatMessage({
                                        id: "form.phone-number.placeholder"
                                    })}
                                    rules={[
                                        {
                                            required: true,
                                            message: formatMessage({
                                                id: "validation.phone-number.required"
                                            }),

                                        },

                                    ]}
                                /><p style={{color: '#FF0000'}}>{this.state.mobileValidation}</p>
                            </div>

                        }

                    </Tab>

                    {this.state.isotp ?
                        <Button type="primary" size='large' styles={{marginBottom: "30px"}} block
                                onClick={this.verifyOtp}
                        >
                            <FormattedMessage id="Verify"/>
                        </Button>
                        :
                        <Button type="primary" size='large' styles={{marginBottom: "30px"}} block
                                onClick={this.sentOtp}
                        >
                            <FormattedMessage id="Send OTP"/>
                        </Button>
                    }


                    {/*<div styles={{marginBottom: 10}}>*/}
                    {/*    <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>*/}
                    {/*        <FormattedMessage id="app.login.remember-me"/>*/}
                    {/*    </Checkbox>*/}
                    {/*    <a style={{float: "right"}} href="">*/}
                    {/*        <FormattedMessage id="app.login.forgot-password"/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}


                    {/*<Divider styles={{marginTop: "36px"}}><FormattedMessage id="app.login.sign-in-with"/></Divider>*/}
                    {/*<div className={styles.other}>*/}

                    {/*    <Avatar*/}
                    {/*        size={36}*/}
                    {/*        className={styles.icon}*/}
                    {/*        src="https://cdn.worldvectorlogo.com/logos/facebook-3.svg"*/}
                    {/*    />*/}
                    {/*    <Avatar*/}
                    {/*        size={36}*/}
                    {/*        className={styles.icon}*/}
                    {/*        src="https://cdn.worldvectorlogo.com/logos/twitter-3.svg"*/}
                    {/*    />*/}
                    {/*    <Avatar*/}
                    {/*        size={36}*/}
                    {/*        className={styles.icon}*/}
                    {/*        src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"*/}
                    {/*    />*/}

                    {/*</div>*/}

                    {/*<Link style={{marginTop: 24, display: "block", textAlign: "center"}} className={styles.register}*/}
                    {/*      to="/user/register">*/}

                    {/*    Don't Have Account?*/}

                    {/*</Link>*/}
                </Login>
            </div>
        );
    }
}

export default LoginPage;
