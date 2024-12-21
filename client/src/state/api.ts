import { GetKpisResponse, GetProductsResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'main',
    tagTypes: ['Kpis', 'Products'],
    endpoints: (build) => ({
        getKPIs: build.query<GetKpisResponse, void>({
            query: () => 'kpi/kpis',
            providesTags: ['Kpis']
        }),
        getProducts: build.query<GetProductsResponse, void>({
            query: () => 'product/products',
            providesTags: ['Products']
        }),
    })
})

export const { useGetKPIsQuery, useGetProductsQuery } = api