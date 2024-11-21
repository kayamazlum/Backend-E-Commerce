const mongoose = require("mongoose");
const db = () => {
  mongoose
    .connect("mongodb://localhost:27017/e-commerce-db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB Connected!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
