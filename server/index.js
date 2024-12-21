import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { kpis, products } from './data/data.js';
import kpiRoutes from './routes/kpi.js';
import productRoutes from './routes/product.js';
import KPI from './models/KPI.js';
import Product from './models/Product.js';

// configurations
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGO_URL || process.env.MONGO_LOCAL;
const MONGODB_NAME = process.env.MONGO_DB_NAME;

// app
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }));
app.use(cors());

// routes
app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);

// mongoose setup
const start = async () => {
  try {
    await mongoose
      .connect(MONGODB_URL, {
        dbName: MONGODB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

    //   seed data ONLY ONCE
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);

    // Product.insertMany(products);
  } catch (error) {
    console.log(error);
  }
};

start();
