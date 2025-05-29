import userModel from "../models/userModel.js";

const newUser = async (req, res) => {
  const { username, email, number, password, cPassword } = req.body;
  const user = await userModel.create({
    username,
    email,
    number,
    password,
    cPassword,
  });
  res.send(user)
};

export default newUser

