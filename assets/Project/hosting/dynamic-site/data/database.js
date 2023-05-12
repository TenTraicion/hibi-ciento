const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;
let mongoUrl = "mongodb://127.0.0.1:27017/"

if (process.env.MONGODB_URL) {
  mongoUrl = process.env.MONGODB_URL;
}

async function initDatabase() {
  const client = await MongoClient.connect(mongoUrl);
  database = client.db('deployment');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
