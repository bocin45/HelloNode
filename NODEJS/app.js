const http = require('http');

function rqLister (request, response){

}

const server = http.createServer((request, response) =>{
        console.log(request);
});

server.listen(8080);
server.