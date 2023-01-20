const server = require('./src/app.js');
require('dotenv').config();

let PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`%s listening at ${PORT} `); // eslint-disable-line no-console
});
