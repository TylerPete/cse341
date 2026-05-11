const {MongoClient} = require("mongodb");

async function getData(req, res, next) {
    // connection string
    const uri = "mongodb://tylerpete16:Plinkming-Bloop%2A247@ac-xb9202g-shard-00-00.behjctk.mongodb.net:27017,ac-xb9202g-shard-00-01.behjctk.mongodb.net:27017,ac-xb9202g-shard-00-02.behjctk.mongodb.net:27017/?ssl=true&replicaSet=atlas-tlg17r-shard-0&authSource=admin&appName=cse341"

    const client = new MongoClient(uri);

    const data = client.db("professional").collection("person").find();

    console.log("Data: ", data)

    return data;
}


module.exports = {getData}