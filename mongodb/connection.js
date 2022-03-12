const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = client;
