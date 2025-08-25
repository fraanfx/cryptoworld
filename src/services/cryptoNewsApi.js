import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// }
const baseUrl = 'https://newsdata.io/api/1/';

// const cryptoNewsParams = 
//     {
//         safeSearch: 'Off', 
//         textFormat: 'Raw'
//     }

const createRequest = (url) =>({
                                    url,
                                    method: 'GET',
                                    // params: cryptoNewsParams,
                                    // headers: cryptoNewsHeaders

                                })



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`latest?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&q=${newsCategory}&size=${count}&image=1&language=en&category=technology,business`)
        }),
        
    })
});

export const  { 
    useGetCryptoNewsQuery 
} = cryptoNewsApi;