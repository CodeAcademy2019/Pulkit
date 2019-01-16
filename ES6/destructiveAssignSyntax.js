function destructure(){
    let user = {};
[,user.username,user.email] = process.argv.slice(2);
return user;
}
module.exports = destructure