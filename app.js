const express = require("express");
require("dotenv").config();
const https = require("https");
const bodyparser = require("body-parser");
const fs = require("fs");
const { requestLogger } = require("./Utilities/requestLogger");
const router = require("./route/route");

const app = express();
app.use(requestLogger);
app.use(bodyparser.json());
app.use("/", router);

const port = process.env.PORT;

app.listen(port, () => console.log(`app is running on the port ${port}`));
