const url = require('url');

const Myurl= new URL('https://mywebsite.com/hello.html?id=100&status=active');

//Serialize URL

// console.log(Myurl.href);
// console.log(Myurl.href.toString());

//host  url (home domain)
// console.log(Myurl.host);

// //host name(dose not get port name)
// console.log(Myurl.hostname);
// //pathname
// console.log(Myurl.pathname);
//Serialize query
// console.log(Myurl.search);

//Param object 
// console.log(Myurl.searchParams);

//Add param
Myurl.searchParams.append('abc','123');
console.log(Myurl.searchParams);

//Loop through params

Myurl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`))