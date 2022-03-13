const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/latihan');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', async () => {
  console.log('Berhasil connect database');
});
