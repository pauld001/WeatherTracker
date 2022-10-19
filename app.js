//imports
require('dotenv').config();
const express = require('express');

const { appendFile } = require('fs');

const bodyParser = require("body-parser");
//creating webserver
const https = require('https');
const app = express();
const path = require("path"); 
const hostname = "127.0.0.1";
const port = 8000;

// view engine ejs
app.set('view engine', 'ejs')


app.use(express.static(path.join(__dirname, "Public")));
app.use(express.static("Public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))



      

// Prints a log once the server starts listening
app.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})
// home
app.get('/', (req, res) => {
   res.render('home')
 })

//pulling list of cities
 app.get('/:location', (req, res) => {
//location from url
location = [req.params.location];
//open weather api api (q="location") (appid="apikey") location 
let url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + process.env.appid + "&units=metric" 
https.get(url, (response) => {
    if (response.statusCode === 200) {    
        response.on("data", (data) => {
        const results = JSON.parse(data);
        //logging results to console
        console.log(results)
        
    }) 
    } else {
        console.log("0")
    }

})
      
 });
