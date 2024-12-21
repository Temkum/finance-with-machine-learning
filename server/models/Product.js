import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

loadType(mongoose);

const productSchema = new mongoose.Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
