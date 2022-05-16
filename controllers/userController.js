const User = require('../models/user');
const appErrorHandle = require('../service/appErrorHandle');
const bcrypt = require('bcryptjs');
const validator = require('validator');

//index
exports.index = async function (req, res, next) {
  const datas = await User.find();
  res.status(200).json({
    data: datas,
  });
};

//store
exports.store = async function (req, res, next) {
  let data = req.body;
  if (!data.name) {
    next(appErrorHandle(400, 'name is required'), next);
  } else if (!data.email) {
    next(appErrorHandle(400, 'email is required'), next);
  }
  const user = await User.create(data);
  res.status(201).json({
    data: user,
  });
};

//signup
exports.signup = async function (req, res, next) {
  //validator
  if (!validator.isEmail('email')) {
    return next(appErrorHandle(400, 'email format is not correct', next));
  }
};

//signin
exports.signin = async function (req, res, next) {
  const { email, password } = req.body;
  //check email,password is required
  if (!email || !password) {
    return next(appErrorHandle(400, 'email or password is required', next));
  }
  const user = await User.find(email).select('+password');
  const isAuth = await bcrypt.compare(password, user.password);
  if (!isAuth || !user) {
    //failed
    return next(appErrorHandle(400, 'email or password is not correct', next));
  } else {
    //success -> send jwt
  }
};
