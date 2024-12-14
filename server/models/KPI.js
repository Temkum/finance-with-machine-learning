import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

loadType(mongoose);

const monthSchema = new mongoose.Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    operationExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    noneOperationExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    revenuePercent: {
      type: Number,
    },
    expensesPercent: {
      type: Number,
    },
  },
  { toJSON: { getters: true } }
);

const dailySchema = new mongoose.Schema(
  {
    day: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KpiSchema = new mongoose.Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [dailySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model('KPI', KpiSchema);

export default KPI;
