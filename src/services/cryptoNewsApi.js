import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '31c24c65d4mshd1f625cba8f9b22p19e373jsn996c21921aa8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const cryptoNewsParams = 
    {
        safeSearch: 'Off', 
        textFormat: 'Raw'
    }

const createRequest = (url) =>({
                                    url,
                                    params: cryptoNewsParams,
                                    headers: cryptoNewsHeaders

                                })



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&count=${count}`)
        }),
        
    })
});

export const  { 
    useGetCryptoNewsQuery 
} = cryptoNewsApi;