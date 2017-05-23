# Google Stock Price Analysis Using Node.js and D3.js

This App gives a Graphical Representation of the Data stored in any format. In this particular Implementation **JSON** format has been   used. This App uses **`Node.js` and `D3.js` Frameworks** as it follows.

> If you don't have any prior idea about these frameworks then refer to [Node.js](https://nodejs.org/en/) or [D3.js](https://d3js.org/).

## Description About the App

### Modules
    * Server Module
    * Client Module
    * Front End

### Server Module
  The server module is a javascript application(`Node.js` application mainly). It Uses `3 inbuilt modules` present in the `Node.js` framework namely:-  
  
   * http - To parse HTTP requests  
   * url - To parse and use the URL requests  
   * fs - To access the File System    
  
Modules are imported as follows:-
    
    var http = require('http');
    var url = require('url');
    var fs = require('fs');

Firstly, Start by `Creating a HTTP server`. It is created as follows  

    http.createServer(function(req, res){_    
       res.writeHead(404,{'Content-Type':'text/html'});  
       res.end();  
    }).listen(8080);  

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
> **Note:-** Our Front end/Client Side Contains Both HTML and CSS hence The Write Head Is Varying.  

### Client Module

The Client module is the Actual place through which the User will interact. Initial Start Page is an `HTML` document describing `google` and contains buttons to visit to two pages : `Google April` and `Google May`.

Modules Used Here include :    
    * W3.css - Contains all Css Styling
    * D3.js - Framework for Data-Driven Documents   

> Since Everyone is Quite Aware of the CSS styling   
> and HTML formatting those Parts are skiped.

#### Importing D3.js
The Following Text Needs to be included in the `<Head>` tag of your `HTML` Document.
    
    <script src="http://d3js.org/d3.v3.js"></script>
    
#### Formatting D3.js
The Real Tiring Part is the Formatting, Transforming and Representation part of `D3.js`.   
Initially, We Set the Graphical Environment. 

    <style>
         body { font: 12px Arial;}

        path { 
            stroke: steelblue;
            stroke-width: 2;
            fill: none;
        }

        .axis path,
        .axis line {
            fill: none;
            stroke: grey;
            stroke-width: 1;
            shape-rendering: crispEdges;
        }
        </style>

Secondly, a `<div>` is created to enclose the Canvas as it would be easy to resize and move it all around the screen.

    <div class="w3-content" style="max-width:2000px;margin-top:46px">
        <div id="graph" class="aGraph" style="border: 2px solid red;margin-left:10%;margin-right:10%;"></div>
    </div>

Next goes, `Margin`, `Width` and `Height` of the Canvas. 

      var margin = {top: 30, right: 20, bottom: 30, left: 50},
          width = 1000 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

      // Parse the date / time
      var parseDate = d3.time.format("%d-%b-%y").parse;

      // Set the ranges
      var x = d3.time.scale().range([0, width]);
      var y = d3.scale.linear().range([height, 0]);

We also setup the `axis`, `Line to be Drawn`(Since it is a line graph) and `svg` for the `#graph` division.

      // Define the axes
      var xAxis = d3.svg.axis().scale(x)
          .orient("bottom").ticks(25);

      var yAxis = d3.svg.axis().scale(y)
          .orient("left").ticks(20);

      // Define the line
      var valueline = d3.svg.line()
          .x(function(d) { return x(d.Date); })
          .y(function(d) { return y(d.Close); });

      // Adds the svg canvas
      var svg = d3.select("#graph")
          .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
          .append("g")
              .attr("transform", 
                    "translate(" + margin.left + "," + margin.top + ")");

#### Reading Data and Sketching the Graph
 Data is Downloaded from **[Google Finance](https://www.google.com/finance?q=nasdaq:goog)** in a `JSON` format but you can chhose any format you prefer.
 
 Sketching also includes `Scaling the X and Y Axes` of the input data. `X axes`, `Y axes` and `Valueline path` are also added to **svg**.
 
      // Get the data
      d3.json("./may_data.json", function(error, data) {
          data.forEach(function(d) {
              d.Date = parseDate(d.Date);
              d.Close = +d.Close;
          });

          // Scale the range of the data
          x.domain(d3.extent(data, function(d) { return d.Date; }));
          y.domain([0, d3.max(data, function(d) { return d.Close; })]);

          // Add the valueline path.
          svg.append("path")
              .attr("class", "line")
              .attr("d", valueline(data));

          // Add the X Axis
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          // Add the Y Axis
          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis);

      });

 ## Running the App
 First Launch the `Server`. This can be done by 
 
     node HTTP_SERVER.js
 Then, login to `http://localhost:8080/Startpage.html` and you have Succesfully Deployed the App.
 
