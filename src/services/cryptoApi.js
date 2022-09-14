import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '31c24c65d4mshd1f625cba8f9b22p19e373jsn996c21921aa8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';
const cryptoParams = 
    {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '7d',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    }
    



const createRequest = (url, extraParams = {}) => ({ 
                                  url,
                                  headers: cryptoApiHeaders, 
                                  //params: cryptoParams,
                                  ...extraParams,
                                })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`, {
                params: { referenceCurrencyUuid: 'yhjMzLPhuIDl'}
            }
            )
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`, {
                params: { referenceCurrencyUuid: 'yhjMzLPhuIDl'}
            })
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => 
            createRequest(`coin/${coinId}/history`
            , {
                    params: { timePeriod, referenceCurrencyUuid: "yhjMzLPhuIDl"},
               //createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
                },
      )}),
    }),
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,
} = cryptoApi;