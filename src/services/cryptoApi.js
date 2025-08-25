import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';
    



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
                params: { referenceCurrencyUuid: '5k-_VTxqtCEI'}
            }
            )
        }),
        
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`, {
                params: { referenceCurrencyUuid: '5k-_VTxqtCEI'}
            })
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => 
            createRequest(`coin/${coinId}/history`
            , {
                    params: { timePeriod, referenceCurrencyUuid: "5k-_VTxqtCEI"},
               //createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
                },
      )}),
    }),
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,
} = cryptoApi;