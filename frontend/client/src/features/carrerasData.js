import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const carrerasApi = createApi({
    reducerPath: "carrerasApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        getCarreras: builder.query({
            query: () => "/api/carreras",
        }) 
    })
})

export const {useGetCarrerasQuery} = carrerasApi