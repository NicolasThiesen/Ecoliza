const express = require('express');
const requireDir = require("require-dir");
const cors = require("cors");
const mongoose = require ('mongoose');


const app = express();

mongoose.connect('mongodb://localhost:27017/noderest',{useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());

requireDir("./models")

const Ponto = mongoose.model("Ponto");

app.use(cors())

app.use(require('./routes'));

app.listen(3333);
