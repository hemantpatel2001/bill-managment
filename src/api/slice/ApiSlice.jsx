import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getInvoiceHistory: builder.query({
      query: () => '/', 
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = ApiSlice;
