import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'main',
    tagTypes: ['KPIs'],
    endpoints: (build) => ({
        getKPIs: build.query<void, void>({
            query: () => 'kpi/kpis/',
            providesTags: ['KPIs']
        })
    })
})

export const { useGetKPIsQuery } = api