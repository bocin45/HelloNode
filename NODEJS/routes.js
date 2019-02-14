const fs = require('fs'); 

const requestHandler = (request,response) =>{
      const url = request.url;
      const method = request.method;
      console.log(url);
      console.log(method);
      if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Node js cuyyyyy aseekk</title></head>');
        response.write('<body><form action=/message method=POST><input type="text" name="message"><button type="Submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {

        const input = [];
        request.on('data', (chunk) => {
            console.log(chunk)
            console.log('ahaha');
            input.push(chunk);
        });

        return request.on('end', () => {
            const buffer = Buffer.concat(input).toString();
            console.log(buffer);
            const inputMessage = buffer.split('=')[1];
            console.log(inputMessage);
            fs.writeFile('message1.txt', inputMessage, err => {
                response.statusCode = 302
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }

    response.setHeader('Conteny-type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Node js cuyyyyy aseekk</title></head>');
    response.write('<body><h1>asekkkkk node js jadi juga</h1></body>');
    response.write('</html>');
    response.end();
    // process.exit();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

module.exports = requestHandler;