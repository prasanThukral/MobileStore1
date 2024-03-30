const { storeRepo } = require("../db/schema");

class StoreRepository {
  static async createProduct(req) {
    try {
      const storeItem = await storeRepo.create(req);
      return storeItem;
    } catch (error) {
      console.log(`${error.message} is getting thrown at store Repository`);
      throw error;
    }
  }

  static async getProduct() {
    console.log(`entered the get product repository`);
    try {
      const findProduct = await storeRepo.find({});
      return findProduct;
    } catch (error) {
      console.log(
        `getProduct in repository is giving the following error ${error}`
      );
      throw error;
    }
  }

  static async deleteProduct(req) {
    console.log(`enter the delete product in the repository `);
    try {
      const deleteProduct = await storeRepo.deleteOne({ storeId: req });
      return deleteProduct;
    } catch (error) {
      console.log(
        `${error.message} error is being thrown in the delete Product `
      );
      throw error;
    }
  }
}
module.exports = StoreRepository;
