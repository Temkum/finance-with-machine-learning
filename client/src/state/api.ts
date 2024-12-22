import { GetKpisResponse, GetProductsResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'main',
    tagTypes: ['Kpis', 'Products', 'Transactions'],
    endpoints: (build) => ({
        getKPIs: build.query<GetKpisResponse, void>({
            query: () => 'kpi/kpis',
            providesTags: ['Kpis']
        }),
        getProducts: build.query<GetProductsResponse, void>({
            query: () => 'product/products',
            providesTags: ['Products']
        }),
        getTransactions: build.query<GetProductsResponse, void>({
            query: () => 'transaction/transactions',
            providesTags: ['Transactions']
        }),
    })
})

export const { useGetKPIsQuery, useGetProductsQuery, useGetTransactionsQuery } = api