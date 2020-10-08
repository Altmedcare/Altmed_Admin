'use strict';

const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

const ADMIN_CLIENT_ID = "<admin app client id>";
const ADMIN_GROUP_NAME = "super-admins";

function checkGroups(err, groups) {
    if (err) {
        return false;
    }

    return groups.Groups.map(g => g.GroupName).indexOf(ADMIN_GROUP_NAME) >= 0;
}

module.exports.handler = (event, context, callback) => {
    const clientId = event.callerContext.clientId;
    // request from admin app
    if (clientId === ADMIN_CLIENT_ID) {
        cognito.adminListGroupsForUser({UserPoolId: event.userPoolId, Username: event.userName}, function (err, data) {
            checkGroups(err, data) ? callback(null, event) : callback(new Error("Access denied"), event);
        });
    } else {
        // successful authentication
        callback(null, event);
    }
};
