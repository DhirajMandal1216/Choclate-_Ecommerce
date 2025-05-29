import mongoose from "mongoose";

const DbConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default DbConnection;
