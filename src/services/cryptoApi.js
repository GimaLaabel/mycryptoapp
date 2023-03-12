import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const axios = require("axios");


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'   
};
// process.env.REACT_APP_RAPIDAPI_KEY

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    }),
});

export const { useGetCryptosQuery } = cryptoApi;


