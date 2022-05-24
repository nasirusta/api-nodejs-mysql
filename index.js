const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Include Routes
const indexRouter = require("./routes/indexRouter");
const postRouter = require("./routes/postRouter");
const kategorilerRouter = require("./routes/kategorilerRouter");

// Run Routes
app.use("/api", indexRouter);
app.use("/api/post", postRouter);
app.use("/api/data", kategorilerRouter);

// Server Port
const PORT = process.env.PORT || 5000;

// Server Testinng
app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT} port`);
});
