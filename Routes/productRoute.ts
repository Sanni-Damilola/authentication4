import { Router } from "express";
import { getAllProduct, postProduct } from "../Controllers/productController";

const route = Router();
route.route("/getAllProduct").get(getAllProduct);
route.route("/createProduct").post(postProductValidation, postProduct);

export default route;
