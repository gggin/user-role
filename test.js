/**
 * Created by fm369 on 6/5/2016.
 */


var role = require('./index');

var salt = role.genSalt_();
var user = role.createUser("gggin", '1235', salt, role.currentTimeNumber_());

var r1 = role.checkPassword(user, '456');
var r2 = role.checkPassword(user, '123');
var r3 = role.checkPassword(user, '1235');

console.log(user);

role.changePassword_(user, "789");


var r4 = role.checkPassword(user, '1235');
var r5 = role.checkPassword(user, '789');

console.log(r1, r2, r3, r4, r5);

console.log(user);