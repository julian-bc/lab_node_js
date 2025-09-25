import jwt from "jsonwebtoken";
import config from "../config/config";

function generateTokenAccess(username) {
  return jwt.sign(
    username,
    config.tokenSecret,
    { expiresIn: '1h' });
}

export default generateTokenAccess
