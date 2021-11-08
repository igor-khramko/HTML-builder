const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'text.txt');
const stream = new fs.ReadStream(filePath, "utf-8");

stream.on('readable', function(){
    const data = stream.read();
    if(data != null) {
        console.log(data);
    }
});