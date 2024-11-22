const express = require("express");
const {
  allProducts,
  detailProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  createReview,
} = require("../controllers/product");

const router = express.Router();

router.get("/products", allProducts);
router.get("/products/:id", detailProducts);
router.post("/products/new", createProduct);
router.post("/products/newReview", createReview);
router.delete("/products/:id", deleteProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
