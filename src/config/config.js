import dotenv from "dotenv"
dotenv.config();

const {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
}= process.env

export default {
  port: PORT || 3000,
  databaseUrl: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin` 
}