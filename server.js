const fs = require("fs");
const path = require ("path");
const express = require("require");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);