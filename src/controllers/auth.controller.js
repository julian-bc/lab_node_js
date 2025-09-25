import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { authenticateToken } from "../middlewares/jwt.middleware.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  const userSaved = undefined;

  const passwordHashed = bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: passwordHashed
  });

  try {
    console.log(`${newUser} \n saved!`);
    userSaved = await newUser.save();
  }
  
  catch (error) {
    console.error(error);
    res.status(500).send("Error is happened");
  }

  console.log(newUser);
  res.json({
    id: userSaved._id,
    username: userSaved.username,
    email: userSaved.email,
    createdAt: userSaved.createdAt,
    modifyAt: userSaved.modifyAt,
  });
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  const token = undefined;

  try {
    const userSaved = await User.findOne({ email });

    if (!userSaved) return res.status(404).send(`User not founded with email: ${email}`);

    const isMatch = bcrypt.compare(password, userSaved.password);

    if (!isMatch) return res.status(401).send("Incorrect password");
    
    token =  authenticateToken(userSaved.username);
    
    res.send({ token: token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error is happened");
  }
}
