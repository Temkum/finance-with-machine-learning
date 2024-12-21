import { loadType } from 'mongoose-currency';

loadType(mongoose);

const TransactionSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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

module.exports = Transaction;
