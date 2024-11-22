const mongoose = require("mongoose");
const db = () => {
  mongoose
    .connect(process.env.DB_URI, {
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
