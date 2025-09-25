import jwt from "jsonwebtoken";
import config from "../config/config";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.status(401).send({ message: "You try access a resource without authentication credentials" });

  jwt.verify(token, config.tokenSecret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).send({ message: "You don't allowed to access it!" });
    }

    console.log(`This is a jwt decoded: ${decoded}`)

    next();
  });
}