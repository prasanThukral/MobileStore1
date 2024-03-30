const bcrypt = require("bcrypt");
const { userrepo, storeRepo } = require("../db/schema");
const cartRepository = require("../repository/cartRepository");

exports.hashedPasswd = (passwd) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPasswd = bcrypt.hashSync(passwd, salt);
    return hashedPasswd;
  } catch (error) {
    console.log(`Error is coming from hash ${error.message}`);
    throw error;
  }
};
exports.checkHashedPassword = (passwordFromDb, reqPassword) => {
  try {
    const hash = bcrypt.compareSync(reqPassword, passwordFromDb);
    console.log(hash);
    console.log("material");
    return hash;
  } catch (error) {
    console.log(`Error is coming from compare Hash ${error.message}`);
    throw error;
  }
};
exports.generateUserId = async () => {
  try {
    const users = await userrepo.find({});
    return 1000 + users.length;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
exports.requestSignUpDTO = (reqObject, hashedPassword, userID) => {
  return {
    userID: userID,
    userName: reqObject.userName,
    password: hashedPassword,
    phoneNumber: reqObject.phoneNumber,
    email: reqObject.email,
  };
};
exports.generateStoreId = async () => {
  try {
    const storeItem = await storeRepo.find({});
    return 2000 + storeItem.length;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
exports.generateCartID = async () => {
  try {
    const cartID = await cartRepository.getCartItemAll();
    return 5000 + cartID.length;
  } catch (error) {
    console.log(`${error.message} is being showner while generating cart ID`);
    throw error;
  }
};
