const StoreService = require("../service/storeService");

class storeController {
  static async storeController(req, res) {
    try {
      const request = await StoreService.storeService(req.body);
      res.status(200).json({
        status: "success",
        message: request,
      });
    } catch (error) {
      console.log(`${error} is being shown at controller level`);
      res.status(400).json({
        status: "failure",
        message: error.message,
      });
    }
  }

  static async storeDeleteController(req, res) {
    console.log("In the controller delete");
    try {
      const deleteProduct = await StoreService.deleteProduct(req.params);
      res.status(200).json({
        status: "success",
        message: deleteProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}
module.exports = storeController;
