let user = {};
[,user.username,user.email] = process.argv.slice(2);
console.log(user);