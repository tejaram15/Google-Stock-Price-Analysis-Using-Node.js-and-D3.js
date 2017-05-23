var http = require('http');
var url = require('url');
var fs = require('fs');


console.log('Server Started');
http.createServer(function(req, res){
    var ctype;
    switch(req.url)
    {
        case "/w3.css":
            ctype = "text/css";
            break;
        default:
            ctype = "text/html";
    }
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    fs.readFile(filename,function (err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':ctype});
        res.write(data);
        return res.end();
    });
}).listen(8080);