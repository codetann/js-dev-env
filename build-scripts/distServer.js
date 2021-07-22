import express from "express";
import path from "path";
import open from "open";

const port = 3000;
const app = express();

app.use(express.static("dist"));

// Hard coded data. Pretend this hits a real database
const testDB = [
  { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
  { id: 1, firstName: "Tammy", lastName: "Norton", email: "tamm@gmail.com" },
  { id: 1, firstName: "Tina", lastName: "Lee", email: "tina@gmail.com" },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", (req, res) => {
  res.json(testDB);
});

app.listen(port, (err) =>
  err ? console.log(err) : open("http://localhost:" + port)
);
