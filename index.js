/**
 * Created by fm369 on 6/5/2016.
 */

var cryptor = require('oneline-crypto');
var _ = require('lodash');

function generateSHA256Password(salt, password) {
    return cryptor.SHA256(salt + password);
}

function checkPassword(user, password) {
    return generateSHA256Password(user.salt, password) === user.password;
}

function genSalt_() {
    return Math.random().toString(36).substring(7);
}

function currentTimeNumber_() {
    return Number(new Date);
}

function createUser(username, password, salt, registerTime) { // no salt and real password
    if (!username)
        throw new Error('no user name');
    if (!password)
        throw new Error('no password');
    if (!salt)
        throw new Error('no salt');
    var u = {};
    u.salt = salt;
    u.password = generateSHA256Password(salt, password);
    u.registerTime = registerTime;
    return u;
}

function changePasswordGenObject(salt, password) {
    // return a new user object
    var u = {};
    u.salt = salt;
    u.password = generateSHA256Password(salt, password);
    return u;
}

function changePassword_(user, password) {
    var t = changePasswordGenObject(genSalt_(), password);
    user.salt = t.salt;
    user.password = t.password;
}

module.exports = {
    checkPassword: checkPassword,
    genSalt_: genSalt_,
    createUser: createUser,
    currentTimeNumber_: currentTimeNumber_,
    changePasswordGenObject: changePasswordGenObject,
    changePassword_: changePassword_,
    generateSHA256Password: generateSHA256Password
};