# Google Stock Price Analysis Using Node.js and D3.js

This App gives a Graphical Representation of the Data stored in any format. In this particular Implementation **JSON** format has been   used. This App uses **`Node.js` and `D3.js` Frameworks** as it follows.

    If you don't have any prior idea about these frameworks then refer to [Node.js](https://nodejs.org/en/) or [D3.js](https://d3js.org/).

## Different Modules Of this App

    1. Server Module
    2. Client Module
    3. Front End

### 1. Server Module
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

But This won't Suffice our needs We need More Functionalities to be provided by our Server.  

    **Note:-** Our Front end/Client Side Contains Both HTML and CSS hence The Write Head Is Varying.  
