const express = require("express");
const professionalRoute = require("./routes/professional");
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./database/connect");
const cors = require("cors");
const env = require("dotenv").config();


const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use("/professional", professionalRoute);



const port = process.env.PORT || 8080;
const host = process.env.HOST;



app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`);
})