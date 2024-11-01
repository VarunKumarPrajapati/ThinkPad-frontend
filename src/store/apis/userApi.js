import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/users",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      signUp: builder.mutation({
        query: (data) => ({
          url: "/",
          method: "POST",
          body: data,
        }),
      }),
      login: builder.mutation({
        query: (data) => ({
          url: "/login",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const { useSignUpMutation, useLoginMutation } = userApi;
export { userApi };
