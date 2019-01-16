//function html(strings,username,comment)
// var html = (normalStrings,username,comment)=> `${normalStrings[0]}${username}${normalStrings[1]}${comment.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;')}${normalStrings[2]}`;
// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

var html = (normalStrings,username,comment)=> `${normalStrings[0]}${username}${normalStrings[1]}${comment.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;')}${normalStrings[2]}`;
module.exports = ()=>html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`;