import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  
  const newUser = new User({
    username,
    email,
    password
  });

  try {
    console.log(`${newUser} \n saved!`);
    // await newUser.save();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error is happened");
  }
  
  console.log(newUser);
  res.send("register");
}

export const login = (req, res) => {
  res.send("login");
}
