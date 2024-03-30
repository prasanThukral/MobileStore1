const {
  hashedPasswd,
  generateUserId,
  requestSignUpDTO,
  checkHashedPassword,
  generateCartID,
} = require("../Utilities/helper");
const {
  userRepository,
  userSignInEmail,
} = require("../repository/userRepository");
const StoreRepository = require("../repository/storeRepository");
const cartRepository = require("../repository/cartRepository");
const {
  validateEmail,
  validateNumber,
  validateName,
  validatePassword,
} = require("../Utilities/validator");
const { requestSignInDTO, requestCreateCartDTO } = require("../Utilities/DTO");

class userService {
  static async userSignUpService(reqObject) {
    console.log("entered the userService signup");
    try {
      if (!validateEmail(reqObject.email)) {
        throw new Error("Please enter a vaild email ID");
      }
      if (!validateNumber(reqObject.phoneNumber)) {
        throw new Error("Please enter a valid phone number");
      }
      if (!validateName(reqObject.userName)) {
        throw new Error("Please enter a valid phone number");
      }
      if (!validatePassword(reqObject.password)) {
        throw new Error("Please enter a strong password");
      }
      const hashedPassword = hashedPasswd(reqObject.password);
      const generateUserid = await generateUserId();
      const generateCartId = await generateCartID();
      const requestSignDTO = requestSignUpDTO(
        reqObject,
        hashedPassword,
        generateUserid
      );
      const responseCartDTO = requestCreateCartDTO(
        generateUserid,
        generateCartId
      );
      const cartResponse = await cartRepository.createCartRepository(
        responseCartDTO
      );
      const response = await userRepository(requestSignDTO);
      return { userCreation: response, cartResponse: cartResponse };
    } catch (error) {
      console.log(
        `Error is the userService error getting invoked is ${error.message}`
      );
      throw error;
    }
  }

  static async userSignInService(reqObject) {
    console.log("entered the user service sign form");
    try {
      if (!validateEmail(reqObject.email)) {
        throw new Error("Please enter a vaild email ID");
      }
      const userSignInByEmail = await userSignInEmail(reqObject.email);
      if (userSignInByEmail.length === 0) {
        throw new Error("There is no user by that email id registered");
      }
      if (
        !checkHashedPassword(userSignInByEmail[0].password, reqObject.password)
      ) {
        throw new Error("Password is not matching the ");
      }
      const storeItem = await StoreRepository.getProduct();
      const storeToDTO = storeItem.map((a) => {
        return {
          productName: a.productName,
          Description: a.description,
          price: a.price,
          manufacturer: a.manufacturer,
          osType: a.osType,
        };
      });
      return requestSignInDTO(userSignInByEmail[0], storeToDTO);
    } catch (error) {
      console.log(`${error.message} is at service of signin User`);
      throw error;
    }
  }
}
module.exports = userService;
