const userService = require("../service/userService");

exports.addUserId = async (req, res) => {
  try {
    const user = await userService.userSignUpService(req.body);
    res.status(200).json({
      status: "success",
      message: { user },
    });
  } catch (error) {
    console.log(`user sign Up is producing the following error ${error}`);
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
};
exports.signInUser = async (req, res) => {
  try {
    const user = await userService.userSignInService(req.body);
    res.status(200).json({
      status: "success",
      message: { user },
    });
  } catch (error) {
    console.log(`user sign Up is producing the following error ${error}`);
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
};
