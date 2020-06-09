// require('newrelic');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const router = express.Router();
const PORT = 3002;
const morgan = require("morgan");

//mongo
// const MongoClient = require("mongodb").MongoClient;
// const { find, mongoFindById, mongoFindByPrice } = require('../database/dbHelpers.js');

//set up raw mongodb
// const url = 'mongodb://localhost:27017';
// const dbName = 'nikeShoes';
// const mongo_client = new MongoClient(url);
// var mongo_db;

//pg
const pg = require("pg").Client;
const { pgFind, pgFindById, pgFindLessThanPrice } = require('../database-pg/pgHelpers.js')

//set up postgres connection
const pgConnection = require('../database-pg/index.js');
const pgClient = new pg(pgConnection);
pgClient.connect()
.then(console.log('pg connected'))
app.listen(PORT, (err) => {
	if (err) {
			console.log(err);
	}
	else {
			console.log(`Server is listening on port ${PORT}`);
	}
})

// mongo_client.connect((err) => {
// 	if (err) throw err;
// 	console.log("MongoDb client connected")
// 	mongo_db = mongo_client.db(dbName);

// // Start the application after the database connection is ready
// 	app.listen(PORT, (err) => {
// 			if (err) {
// 					console.log(err);
// 			}
// 			else {
// 					console.log(`Server is listening on port ${PORT}`);
// 			}
// 	})
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname + "/../client-react/dist")));
app.use('/', router);

//get loader page

router.get('/loaderio-c9b8a37215ae77f039572e022a5a61b3/', (req, res) => {
	res.sendFile(path.join(__dirname + "/../client-react/dist/loader.txt"));
})

//pg GET

router.get(`/pg_search_id/:id`, (req, res) => {
	console.log('pg searching nikeID: ', req.params.id);
	console.time('PostGres search by nikeID time')
	pgFindById(pgClient, req.params.id)
			.then((result) => {
					console.log('success');
					console.timeEnd('PostGres search by nikeID time')
					res.status(200).send(result.rows.map(row => row.data));
			})
			.catch((err) => {
					res.status(400).send(err);
			})
})

//mongo GET

router.get(`/search_mongo_id/:id`, (req, res) => {
	console.log('mongo searching nikeID: ', req.params.id);
	console.time('mongo search by NikeID time')
	mongoFindById(mongo_db, req.params.id)
			.then((result) => {
					console.log('success');
					console.timeEnd('mongo search by NikeID time')
					res.status(200).send(result);
			})
			.catch((err) => {
					res.status(400).send(err);
			})
})