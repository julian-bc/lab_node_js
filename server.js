import express from "express";
import config from "./src/config/config.js";
import morgan from "morgan";
import { connectDB } from "./src/libs/db.js"; 

const app = express();

app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});