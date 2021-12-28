const app = require('../app');
const db = require('../configs/db');
const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => {
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
