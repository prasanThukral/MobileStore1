require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"));

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      unique: true,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const storeSchema = new mongoose.Schema(
  {
    storeId: {
      type: Number,
      unique: true,
      required: true,
    },
    productName: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    osType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
const cartSchema = new mongoose.Schema(
  {
    cartId: {
      type: Number,
      unique: true,
    },
    userId: {
      type: Number,
      unique: true,
    },
    productInCart: {
      type: Array,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
const userrepo = mongoose.model("user", userSchema);
const storeRepo = mongoose.model("store", storeSchema);
const cartRepo = mongoose.model("cart", cartSchema);
module.exports = { userrepo, storeRepo, cartRepo };
