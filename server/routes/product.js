import express from 'express';
import Product from '../models/Product.js';
import { get } from 'mongoose';

const router = express.Router();

router.get('/products', getProducts);

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;
