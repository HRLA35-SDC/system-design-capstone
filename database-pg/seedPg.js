const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const copyFrom = require('pg-copy-streams').from;

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres'
};

async function uploadFromJSON() {
  console.time('insertTimer');
  var inputFile = path.join(__dirname, './data/dataSet.json');
  var table = 'shoes';

  const client = new Client(connection);
  client.connect().then(() => console.log('second pg connected'));

  var stream = client.query(copyFrom(`COPY ${table} (data) FROM STDIN`));
  var fileStream = fs.createReadStream(inputFile);

  fileStream.on('error', (error) => {
    console.log(`Error in reading file: ${error}`);
  });
  stream.on('error', (error) => {
    console.log(`Error in copy command: ${error}`);
  });
  stream.on('end', () => {
    console.log(`Completed loading data into ${table}`);
    console.timeEnd('insertTimer');
    client.end();
  });
  fileStream.pipe(stream);
}

uploadFromJSON();
