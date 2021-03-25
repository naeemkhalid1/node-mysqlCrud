const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', require('./server/routes'));

const port = 3000;
// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})