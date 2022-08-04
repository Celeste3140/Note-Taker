const fs = require("fs");
const path = require ("path");
const express = require("require");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);
app.get('/api/notes', (req, res) => {
    res.json(`${req.method}`);
})

app.post('/api/notes', (req, res) => {
    res.json(`${req.method} request received to upvote`);

})

app.delete("/api/notes/:id", (req, res) => {
    res.json(fs.readFileSync("./db/db.json"));
    fs.writeFileSync("./db/db.json", JSON.stringify(notelist));
    res.json(notelist);
 })

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);