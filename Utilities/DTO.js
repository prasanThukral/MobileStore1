exports.requestSignInDTO = (user, storeItem) => {
  return {
    userID: user.userID,
    email: user.email,
    userName: user.userName,
    phoneNumber: user.phoneNumber,
    storeItem: storeItem,
  };
};
exports.requestCreateProductDTO = (body, storeId, manufacturerName, osType) => {
  return {
    storeId: storeId,
    productName: body.productName,
    description: body.description,
    price: body.price,
    manufacturer: manufacturerName,
    osType: osType,
  };
};
exports.requestCreateCartDTO = (userId, cartId, status) => {
  return {
    cartId: cartId,
    userId: userId,
    productInCart: [],
    status: "CLOSED",
  };
};
exports.responseGetCartDTO = (body) => {
  return { yourProduct: body.productInCart };
};
