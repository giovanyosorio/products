//definir losdatos de los schemas de los productos
//modelar los datos
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
