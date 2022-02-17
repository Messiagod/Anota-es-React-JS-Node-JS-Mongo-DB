const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const dbConfig = "mongodb+srv://MatheusLima:harrypotter722@cluster0.ptmxm.mongodb.net/annotations?retryWrites=true&w=majority";
const client = new MongoClient(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log("Conectado ao banco")
});


const connection = mongoose.connect(dbConfig, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
});


/* toda vez q criamos um arquivo exportamos ele para usar em todo app */
module.exports = connection;