require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection file
connectDB();
app.use("/v1", routes);


//port
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});