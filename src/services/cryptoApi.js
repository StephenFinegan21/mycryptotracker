
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': 'cfb46f14e4mshc29e8bb6b4d31c3p18e819jsne9c885907854'
};

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`),
    }),
    
  
    
  }),
});

export const { useGetCryptosQuery, useGetAthQuery } = cryptoApi;
