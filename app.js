console.log ("hello world")

const express = require('express');
const { appendFile } = require('fs');

const bodyParser = require("body-parser");

const https = require('https');
const app = express();

const hostname = "127.0.0.1";
const port = 8000;
 
// view engine ejs
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"))

      

// Prints a log once the server starts listening
app.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})
// home
app.get('/', (req, res) => {
   
   res.send('Hello World!')
 })

//pulling list of cities
 app.get('/get', (req, res) => {
//open weather api
let url = "https://api.openweathermap.org/data/2.5/weather?q=Purnia&appid=f7acf97acded1337d827c9793c63907a&units=metric";
https.get(url, (response) => {
    if (response.statusCode === 200) {    
        response.on("data", (data) => {
        const results = JSON.parse(data);
        console.log(results)
    }) 
    } else {
        console.log("0")
    }

})
      
 });
