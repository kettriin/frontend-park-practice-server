const http = require('http');
const fs = require('fs');
//const { error } = require('console');
const debug = require('debug');
const log = debug('server');

const SERVER_PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    log('req urls', url);
    
    const fileName = url === '/' ? '/index.html' : url;
    
    fs.readFile(`${__dirname}/../public${fileName}`, (err, file) => {
        //console.log('async after reading');
        if(err){
            log('some error');
            res.write('smth required');
            res.end();
            return;
        }
        res.write(file);
        res.end();
    });

    //console.log('after calling');
    
    // let indexFile;
    // try {
    //     indexFile = fs.readFileSync(`${__dirname}/..${fileName}`);
    // } catch (e) {
    //     console.log('require icon');
    //     res.write('fav icon required');
    //     res.end();
    //     return;
    // }

    // res.write(indexFile);
    // res.end();
});

server.listen(SERVER_PORT); 