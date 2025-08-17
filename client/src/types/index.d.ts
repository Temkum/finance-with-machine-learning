import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface Palette {
    grey: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: {
      500: string;
    };
    background: {
      light: string;
      main: string;
    };
  }

  interface PaletteOptions {
    grey?: Partial<PaletteColor>;
    primary?: Partial<PaletteColor>;
    secondary?: Partial<PaletteColor>;
    tertiary?: {
      500?: string;
    };
    background?: {
      light?: string;
      main?: string;
    };
  }

  interface Theme {
    palette: Palette;
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

// Export all your custom interfaces
export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpenseByCategory;
  monthlyData: Month[];
  dailyData: Day[];
}

export interface Product {
  _id: string;
  __v: number;
  name: string;
  price: number;
  expense: number;
  transactions: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse extends Array<Product> {}

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
  productIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface MonthlyData {
  month: string;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

// Re-export common types
export type Props = Record<string, unknown>;
