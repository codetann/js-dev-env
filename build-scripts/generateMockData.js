/**
  This script generates mock data for local development.

  This way you dont have to point to an actual API,
    but you can enjoy realistic, but randomized data,
    and rapid page loads due to local static data
 */

import { generate, extend } from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

// Extend JSF with the fake libs you want to use
extend("faker", () => require("faker"));
const json = JSON.stringify(generate(schema));

fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) console.log(chalk.red(err));
  if (!err) console.log(chalk.green("Mock data generated."));
});
