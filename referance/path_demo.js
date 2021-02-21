const { basename } = require('path');
const path = require('path');


//basefle name
console.log(path.basename(__filename));


//directory fie name

console.log(path.dirname(__filename));

//file extension name

console.log(path.extname(__filename));

//create path  object 

console.log(path.parse(__filename));

//concatenate path
console.log(path.join(__dirname,'test','hello.html'));