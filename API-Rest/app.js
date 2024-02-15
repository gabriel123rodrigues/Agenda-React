const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path")

app.use(cors());

app.use(express.json());
app.use (express.static(path.resolve(__dirname, 'uploads')));

// db connection

const conn = require("./config/conn");
conn();

//rotas
const routes = require ('./routes/router');
app.use("/api", routes);

app.listen(3000,function(){
    console.log("servidor online");
})

