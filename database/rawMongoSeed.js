const {getData} = require('./generateData.js');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient
const dbName = 'nikeShoes';

// Connection URL
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);
let collection;

client.connect(function(err) {
  console.log('CONNECTED');

  const db = client.db(dbName);
  collection = db.collection('shoes');

  console.time('insert timer');
  seedData(collection).then(()=> {
    console.timeEnd('insert timer')
    client.close()
  });
});

async function seedData(db){
  const limit = 1900000
  const threshold = 1
  var counter = 0

  let cache = [];
  for (let x = 0; x < limit; x += 1) {
    cache = getData(threshold, counter);
    counter += 5;
    await db.insertMany(cache).then(() => {
      console.log(`${x+1} documents inserted`);
      cache = [];
    })
    .catch(err => console.log(err))
  }
}

//seeds MongoDB with shoe artifacts, each with a unique nikeID