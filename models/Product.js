import mongoose, { models } from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

//dont over right error problem so  change export type system
// export default mongoose.model("product", productSchema);
export default mongoose.models.product ||
  mongoose.model("product", productsSchema);
