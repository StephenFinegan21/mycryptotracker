
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'cfb46f14e4mshc29e8bb6b4d31c3p18e819jsne9c885907854'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsAPI = createApi({
    
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(`/news/search?count=10&q=cryptocurrency&safesearch=off&textFormat=Raw`),
    })
  
    
  }),
});

export const { useGetNewsQuery } = newsAPI;
