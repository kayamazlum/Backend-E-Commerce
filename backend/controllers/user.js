const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {};

const login = async (req, res) => {};

const logout = async (req, res) => {};

const forgetPassword = async (req, res) => {};

const resetPassword = async (req, res) => {};

module.exports = { register, login, forgetPassword, resetPassword };
