# Google Stock Price Analysis Using Node.js and D3.js

This App gives a Graphical Representation of the Data stored in any format. In this particular Implementation **JSON** format has been   used. This App uses **`Node.js` and `D3.js` Frameworks** as it follows.

> If you don't have any prior idea about these frameworks then refer to [Node.js](https://nodejs.org/en/) or [D3.js](https://d3js.org/).

## Different Modules Of this App

    1. Server Module
    2. Client Module
    3. Front End

### Server Module
  The server module is a javascript application(`Node.js` application mainly). It Uses `3 inbuilt modules` present in the `Node.js` framework namely:-  
  
   * http - To parse HTTP requests  
   * url - To parse and use the URL requests  
   * fs - To access the File System    
  
Modules are imported as follows:-
    
    _var http = require('http');_

Firstly, Start by `Creating a HTTP server`. It is created as follows  

    _http.createServer(function(req, res){_    
       _res.writeHead(404,{'Content-Type':'text/html'});_  
       _res.end();_  
    _}).listen(8080);_  

But This won't Suffice our needs We need More Functionalities to be provided by our Server. Hence we use the `URL` Parser to Relate the Webpage to a specific Filename to be opened in the Local Computer. Also, we append a `.` to the url to search for the file in the same directory or append it with `\path\` to search in any specific directory.

    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;

Finally, We end the result by writing the data read recieved from file to thr result.

    fs.readFile(filename,function (err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':ctype});
        res.write(data);
        return res.end();
    });
**This app Runs on Port : `8080` You can change it to any port in the range of (0 to 65535)**

    **Note:-** Our Front end/Client Side Contains Both HTML and CSS hence The Write Head Is Varying.  
