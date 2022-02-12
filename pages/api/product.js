// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import initDb from "./../../helpers/initDB";

initDb();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getAllProduct(req, res);
      break;
    case "POST":
      await saveProduct(req, res);
      break;
    default:
      break;
  }
};

const getAllProduct = async (req, res) => {
  try {
    Product.find().then((products) => {
      res.status(200).json(products);
    });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const saveProduct = async (req, res) => {
  const { name, price, description, mediaUrl } = req.body;
  try {
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).json({ error: "please add all fields" });
    }
    const product = await new Product({
      name,
      price,
      description,
      mediaUrl,
    }).save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
};
