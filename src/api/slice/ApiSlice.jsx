import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.9:1000' }),
  endpoints: (builder) => ({
    getInvoiceHistory: builder.query({
      query: () => '/',
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/user/login',
        method: 'POST',
        body: { email, password }
      }),
    }),
    customeradd: builder.mutation({
      query: (body) => ({
        url: '/customer/register',
        method: 'POST',
        body
      }),
    }),
    customerget: builder.query({
      query: (body) => ({
        url: '/customer/allCustomerDetails',
        method: 'GET',
        body
      }),
    }),
  }),
});

export const { useLoginMutation,
  useCustomeraddMutation,
  useCustomergetQuery } = ApiSlice;
