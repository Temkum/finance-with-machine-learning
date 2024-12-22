import { loadType } from 'mongoose-currency';
import mongoose from 'mongoose';

loadType(mongoose);

const TransactionSchema = new mongoose.Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
