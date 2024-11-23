const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authenticationMid = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(500).json({ message: "Lütfen giriş yapınız!" });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

  if (!decodedData) {
    return res.status(500).json({ message: "Erişim tokeniniz geçersizdir!" });
  }

  req.user = await User.findById(decodedData.id);
  next();
};

const roleChecked = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // tekrar
      return res.status(500).json({ message: "İzniniz bulunmamaktadır." });
    }
    next();
  };
};

module.exports = { authenticationMid, roleChecked };
