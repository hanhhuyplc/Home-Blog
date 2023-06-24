const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars').engine;

const router = require('./Routers');
const app = express();

const ListenPort = 3000;

//HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', handlebars({ defaultLayout: 'mainlayout', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//Express Setting
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Web Routing
router(app);

//Expreee Web Listenning Start
app.listen(ListenPort, () => console.log(`My Blog Listenning on Port : ${ListenPort}`));
