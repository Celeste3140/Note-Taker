const fs = require("fs");
const path = require ("path");
const express = require("require");

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);