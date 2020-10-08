import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import axios from 'axios';
import {has} from 'lodash';
import {connect} from "react-redux";

// const API_URL = "https://mydine-backend.herokuapp.com/";

/** Live */
// const API_URL = 'http://3.91.181.192/';
/** Test */
// const API_URL = 'http://34.233.124.241/';
/**Local*/
// const API_URL = "https://5f598e3c.ngrok.io/";
/**Current API*/
// const API_URL = "https://backend-testing.mydigimenu.com";
const API_URL = "https://backend.altmed.care";

export const performRequest = (method, url, params, data, login = true) => {
    const body = method === 'get' || method === 'delete' || method === 'put' || method == 'patch' ? 'params' : 'data';
    const config = {
        method,
        url,
        baseURL: API_URL,
        [body]: params || {},

        /** 01/08/2019
         * calculating uploading ratio
         */
        // onUploadProgress: progressEvent => {
        //     let progress = progressEvent.loaded * 100 / progressEvent.total;
        //     localStorage.getItem('progress') >= 100 ? localStorage.removeItem('progress') :
        //         localStorage.setItem('progress', progress.toFixed(0));
        //     localStorage.setItem('progress', progress.toFixed(0));
        //     console.log(progressEvent.loaded * 100 / progressEvent.total, 'apihandler')
        // }
    };
    if (method === 'put' || method == 'patch') {
        config.data = data
    }
    config.headers = {
        "Content-Type": "application/json; charset=utf-8",
        // Authorization: "Bearer " + localStorage.getItem('accessToken')
    };

    if (login) {
        config.headers.Authorization = "Bearer " + localStorage.getItem('accessToken')
    }
    return axios.request(config)
    // Add a request interceptor

};

// axios.interceptors.response.use((response) => {
//     return response
// }, function (error) {
//
//     // this.props.history.push('/signin');
//
//
//     let token = localStorage.getItem('accessToken');
//
//     const {config, response: {status}} = error
//     const originalRequest = config;
//     if (status === 403) {
//         performRequest('post', 'api-token-refresh/', {'token': token})
//             .then(response => {
//                 localStorage.setItem('accessToken', response.data.token)
//             })
//             .catch(error => {
//                 localStorage.removeItem('accessToken');
//                 // console.log(this.props, 'LLLLLLLLL');
//                 window.location = '/';
//             })
//         // if (!isAlreadyFetchingAccessToken) {
//         // isAlreadyFetchingAccessToken = true
//         // store.dispatch(fetchAccessToken()).then((access_token) => {
//         //     isAlreadyFetchingAccessToken = false
//         //     onAccessTokenFetched(access_token)
//         // })
//         // }
//
//         // const retryOriginalRequest = new Promise((resolve) => {
//         //     addSubscriber(access_token => {
//         //         originalRequest.headers.Authorization = 'Bearer ' + access_token
//         //         resolve(axios(originalRequest))
//         //     })
//         // });
//         // return retryOriginalRequest
//     }
//     return Promise.reject(error)
// });
connect(null)(performRequest);
