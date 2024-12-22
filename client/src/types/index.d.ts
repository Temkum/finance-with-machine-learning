import { Palette } from '@mui/material/styles/createPalette';
interface PrimaryPalette {
  100: string;
  200: string;
  300: string;
  400: string,
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

type Palette = {
  palette: PrimaryPalette
}

type Props = Record<string, unknown>;

type Theme = {
  palette: Palette;
};

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpenseByCategory
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

export interface Product {
  _id: string;
  __v: number;
  name: string;
  price: number;
  expense: number;
  transactions: Array<string>;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
 id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface ExpenseByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
