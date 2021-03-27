const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.json()); //{ limit: "50mb" }
// app.use(bodyParser.urlencoded()); //{ limit: "50mb", extended: true }
app.use("/", require("./server/routes"));
// app.use("/user", require("./server/routes"));

const port = 3000;
// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
