const StoreRepository = require("../repository/storeRepository");
const {
  validatePrice,
  validateName,
  validateManufacturer,
  validateOs,
  validateDescription,
} = require("../Utilities/validator");
const { brand, os } = require("../Utilities/validator-constants");
const { generateStoreId } = require("../Utilities/helper");
const { requestCreateProductDTO } = require("../Utilities/DTO");

class StoreService {
  static async storeService(requestBody) {
    console.log(`currently in the store's service layer`);
    try {
      if (!validateName(requestBody.productName)) {
        throw new Error("Enter a valid productName");
      }
      if (!validatePrice(requestBody.price)) {
        throw new Error("Enter a valid price");
      }
      if (!validateDescription(requestBody.description)) {
        throw new Error(`Enter a description that is valid`);
      }
      const manufacturerName = validateManufacturer(requestBody.manufacturer);

      if (manufacturerName.length === 0) {
        // eslint-disable-next-line prettier/prettier
        throw new Error(`Enter from the following list of manufacturer ${brand}`);
      }
      const osList = validateOs(requestBody.osType);

      if (manufacturerName.length === 0) {
        // eslint-disable-next-line prettier/prettier
        throw new Error(`Enter from the following list of manufacturer ${os}`);
      }
      const generateStoreid = await generateStoreId();
      const requestDTO = requestCreateProductDTO(
        requestBody,
        generateStoreid,
        manufacturerName[0],
        osList[0]
      );
      const response = StoreRepository.createProduct(requestDTO);
      return response;
    } catch (error) {
      console.log(
        `${error.message} is being showned in the store service layer of the app`
      );
      throw error;
    }
  }

  static async deleteProduct(reqObject) {
    console.log(`entering product delete in the store repository`);
    try {
      const deleteProduct = await StoreRepository.deleteProduct(
        reqObject.storeId
      );
      return deleteProduct;
    } catch (error) {
      console.log(
        `${error.message} is being shown at the service level of delete product`
      );
      throw error;
    }
  }
}
module.exports = StoreService;
