/**
 * Created by fm369 on 6/5/2016.
 */


var role = require('./index');

var salt = role.genSalt();
var user = role.createUser({name:"gggin", password:'123', email:'123@163.com'}, salt);

console.log(user);