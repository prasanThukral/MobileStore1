const cartRepository = require("../repository/cartRepository");
const { responseGetCartDTO } = require("../Utilities/DTO");

class cartService {
  static async getCartService(reqParams) {
    console.log(`entered the getcart Service`);
    try {
      const validateNumber = /\d/.test(reqParams.userId);
      if (validateNumber) {
        const cartRepo = await cartRepository.getCartUsingUserIdRepository(
          reqParams.userId
        );
        const responseDTO = responseGetCartDTO(cartRepo);
        return responseDTO;
      }
      if (!validateNumber)
        throw new Error("Please enter a Number for the userId");
    } catch (error) {
      console.log(`${error.message} is being shown at get cart service`);
      throw error;
    }
  }

  static async getCartAndAdd(reqObject) {
    try {
      if (reqObject.productInCart.length === 0) {
        throw new Error(`Please enter a product into the cart from the List`);
      }
      const userID = reqObject.userId;
      if (!/\d/.test(userID)) {
        throw new Error(`Please enter a number for the userId field`);
      }
      const cartForUser = await cartRepository.getCartUsingUserIdRepository(
        userID
      );
      let cartForUserProduct = cartForUser.productInCart;
      if (!cartForUserProduct) {
        cartForUserProduct = [...reqObject.productInCart];
      } else {
        cartForUserProduct.concat(reqObject.productInCart);
      }
      const reqGetCartAndUpdateDTO = { productInCart: cartForUserProduct };
      const products = await cartRepository.getCartAndAdd(
        reqGetCartAndUpdateDTO,
        userID
      );
      return products;
    } catch (error) {
      console.log(
        `${error.message}  is being shown at the cart service getCartAndUpdate`
      );
      throw error;
    }
  }
}
module.exports = cartService;
