const express = require("express");

const userController = require("../controller/userController");
const StoreController = require("../controller/storeController");
const CartController = require("../controller/cartController");

const router = express.Router();
//user endpoint
router.post("/signup", userController.addUserId);
router.post("/signIn", userController.signInUser);

//store endpoint
router.post("/storeItem", StoreController.storeController);
router.put("/storeItem/delete/:storeId", StoreController.storeDeleteController);

//cartItem
router.get("/cart/:userId", CartController.getCartItemController);
router.put("/cart/add", CartController.getCartItemAndAddController);
//all other endpoints
router.all("/", (req, res) => {
  "failed";
});
module.exports = router;
