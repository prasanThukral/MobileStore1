const { cartRepo } = require("../db/schema");

class cartRepository {
  static async createCartRepository(reqBody) {
    try {
      const cart = await cartRepo.create(reqBody);
      return cart;
    } catch (error) {
      console.log(`${error.message} is being showned at the repository level`);
      throw error;
    }
  }

  static async getCartUsingUserIdRepository(userId) {
    try {
      const getcart = await cartRepo.find(
        {
          userId: userId,
        },
        { _id: 0, __v: 0 }
      );
      return getcart;
    } catch (error) {
      console.log(`${error.message} is being showned at the repo level`);
      throw error;
    }
  }

  static async getCartItemAll() {
    console.log(`in the get getCartItemAll`);
    try {
      const getCartItem = await cartRepo.find({});
      return getCartItem;
    } catch (error) {
      console.log(
        `${error.message} is being invoked at the cartRepository level`
      );
      throw error;
    }
  }

  static async getCartAndAdd(reqObject, userId) {
    console.log(`entering the cartReposiotry`);
    try {
      const getCartUpdated = await cartRepo.findOneAndUpdate(
        {
          userId: userId,
        },
        reqObject,
        {
          new: true, //to return new doc back
          runValidators: true, //to run the validators which specified in the model
        }
      );
    } catch (error) {
      console.log(
        `${error.message} is being shown at the get cartAnd add at the repository level`
      );
      throw error;
    }
  }
}
module.exports = cartRepository;
