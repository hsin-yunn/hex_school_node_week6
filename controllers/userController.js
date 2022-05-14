const User = require('../models/user');
const appErrorHandle = require('../service/appErrorHandle');

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
