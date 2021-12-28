const mongoose = require('mongoose');

const {connect, connection} = mongoose;

const uri = process.env.MONGO_URL;

const db = connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('connected', () => {
  console.log('Database connection successful');
});

process.on('SIGINT', async () => {
  connection.close();
  console.log('Connection DB closed');
  process.exit(1);
});

module.exports = db;
