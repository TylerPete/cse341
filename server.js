const express = require("express");
const professionalRoute = require("./routes/professional");
const cors = require("cors");
const env = require("dotenv").config();

// const MongoClient : typeof MongoClient = require("")
//  const mongodb = require("./db/connect");


const app = express();
app.use(cors());

app.use("/professional", professionalRoute);



const port : string | 8080 = process.env.PORT || 8080;
const host = process.env.HOST;



app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`);
})