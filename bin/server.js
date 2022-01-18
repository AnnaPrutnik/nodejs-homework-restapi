const fs = require('fs/promises');
const app = require('../app');
const db = require('../configs/db');
const PORT = process.env.PORT || 3000;

const UPLOAD_DIR = process.env.UPLOAD_DIR;

db.then(() => {
  app.listen(PORT, () => {
    fs.mkdir(UPLOAD_DIR, {recursive: true});
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(`Server not started with error: ${err}`);
});

process.on('unhandledRejection', (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
});
