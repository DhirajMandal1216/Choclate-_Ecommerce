import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


//user registration
const newUser = async (req, res) => {
  const { username, email, number, password, cPassword } = req.body;

  if (password !== cPassword) {
    return res.status(400).send("Passwords and Confirm do not match");
  }

  //password hashing
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const user = await userModel.create({
        username,
        email,
        number,
        password: hash,
      });

      //generate token
      const token = jwt.sign({email:email,username:username},process.env.SECRETE_KEY,{expiresIn:"1h"})

      //set cookie
      res.cookie('token',token)

      res.send(user);
    });
  });
};

export default newUser;
