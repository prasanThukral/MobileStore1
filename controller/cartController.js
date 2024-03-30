const cartService = require("../service/cartService");

class CartController {
  static async getCartItemController(req, res) {
    try {
      const getCartItemService = await cartService.getCartService(req.params);
      res.status(200).json({
        status: "success",
        response: getCartItemService,
      });
    } catch (error) {
      console.log(`${error.message} is being shown at the controller layer`);
      res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }

  static async getCartItemAndAddController(req, res) {
    console.log("inside getCartItemAndAddController");
    try {
      const getCartAndAdd = await cartService.getCartAndAdd(req.body);
      res.status(400).json({
        status: "success",
        response: getCartAndAdd,
      });
    } catch (error) {
      console.log(
        `${error.message} is being displayed at controller of the getCartItemAndAddController`
      );
      res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}
module.exports = CartController;
