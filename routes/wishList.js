const routerWishList = require("express").Router();
const bodyParser = require("body-parser");
const { addToWishlist, wishlist, removeFromWishlist } = require("../controller/wishList");

const User = require("../model/user");
routerWishList.use(bodyParser.json());
routerWishList.use(bodyParser.urlencoded({extended: false}));


// wishlist
routerWishList.post("/add", addToWishlist);
routerWishList.post("/getWishlist", wishlist);
routerWishList.put("/delete", removeFromWishlist);
module.exports = routerWishList;