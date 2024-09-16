import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.9:1000' }),
  tagTypes: ["Customer","delete"],
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
      invalidatesTags: ["Customer"]
    }),
    customerget: builder.query({
      query: (body) => ({
        url: '/customer/allCustomerDetails',
        method: 'GET',
        body
      }),
      providesTags: ["Customer","delete"]
      
    }),
  
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customer/delete/${id}`,
        method: 'DELETE',
        body:id
      }),
invalidatesTags:["delete"]
    }),


  }),
});

export const { useLoginMutation,
  useCustomeraddMutation,
  useCustomergetQuery,
  useUpdateCustomerMutation,useDeleteCustomerMutation } = ApiSlice;
