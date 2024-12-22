import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.get('/transactions', getTransactions);

async function getTransactions(req, res) {
  try {
    const transactions = await Transaction.find().limit(50).sort({ _id: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;
