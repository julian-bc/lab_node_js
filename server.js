import express from "express";
import config from "./src/config/config.js"
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan('dev'))

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});