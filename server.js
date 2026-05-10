const express = require("express");
const professionalRoute = require("./routes/professional");
const cors = require("cors");
const env = require("dotenv").config();

const app = express();
app.use(cors());

app.use("/professional", professionalRoute);



const port = process.env.PORT;
const host = process.env.HOST;



app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`);
})