const { userrepo } = require("../db/schema");

const userRepository = async function (req) {
  try {
    const user = await userrepo.create(req);
    return user;
  } catch (error) {
    console.log(
      `your app is giving this error ${error.message} in user sign repository`
    );
    throw error;
  }
};
const userSignInEmail = async function (email) {
  try {
    const user = await userrepo.find({
      email: email,
    });
    return user;
  } catch (error) {
    console.log(
      `your app is giving this error ${error.message} in email Sign in repository`
    );
    throw error;
  }
};
const userSignInNumber = async function (req) {
  try {
    const user = await userrepo.findOne({
      phoneNumber: req,
    });
    return user;
  } catch (error) {
    console.log(
      `your app is giving this error ${error.message} in email Sign in repository`
    );
    throw error;
  }
};
module.exports = { userRepository, userSignInEmail };
