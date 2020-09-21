const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const hbs = require("hbs");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(port, ()=>{
    console.log('Server is listening on Port: ' + port);
});