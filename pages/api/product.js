// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import initDb from "./../../helpers/initDB";

initDb();
export default function handler(req, res) {
  Product.find().then((product) => {
    res.status(200).json(product);
  });
}
