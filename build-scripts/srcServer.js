import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

// Hard coded data. Pretend this hits a real database
const testDB = [
  { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
  { id: 1, firstName: "Tammy", lastName: "Norton", email: "tamm@gmail.com" },
  { id: 1, firstName: "Tina", lastName: "Lee", email: "tina@gmail.com" },
];

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", (req, res) => {
  res.json(testDB);
});

app.listen(port, (err) =>
  err ? console.log(err) : open("http://localhost:" + port)
);
