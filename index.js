/**
 * Created by fm369 on 6/5/2016.
 */

/*
var user = {
    name : "gggin", 
    password : "123456",
    salt : "xxxxx",
    mobile : "17001105570",
    registerTime : 124332432432,
    email : "1123@163.com",
    role : "xx",
    extras : "{}"
};
*/
var cryptor = require('oneline-crypto');
var _ = require('lodash');

function checkPassword(user, password) {
    return cryptor.SHA256(user.salt + password) === user.password;
}

function genSalt_() {
    return Math.random().toString(36).substring(7);
}

function createUser(user, salt) { // no salt and real password
    var u = _.clone(user);
    if (!u.name)
        throw new Error('no user name');
    if (!u.email)
        throw new Error('no email');
    if (!u.password)
        throw new Error('no password');
    u.salt = salt;
    u.password = cryptor.SHA256(salt + u.password);
    u.registerTime = Number(new Date);
    return u;
}

module.exports = {
    checkPassword: checkPassword,
    genSalt : genSalt_,
    createUser: createUser
};