import express from "express";
import config from "./src/config/config.js";
import morgan from "morgan";
// import { connectDB } from "./src/libs/db.js"; 
import authRouter from "./src/routes/auth.routes.js";
import shoppingRouter from "./src/routes/shopping.routes.js"
import cookieParser from "cookie-parser";
import { authenticateToken } from "./src/middlewares/jwt.middleware.js";

// memory db
export const memoryDatabase = [
  {
    id: 1,
    name: "Libra Harina de Achira",
    price: 8600
  },
  {
    id: 2,
    name: "Libra de Azucar",
    price: 4500
  },
  {
    id: 3,
    name: "Papeleta Nelmoscada",
    price: 700
  },
  {
    id: 4,
    name: "Papeleta Canela Molida",
    price: 500
  },
];

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev')); 

// connectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shopping", authenticateToken, shoppingRouter);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});