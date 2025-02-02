import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/users",
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

      fetchUser: builder.query({
        providesTags: ["USER"],
        query: () => ({
          url: "/me",
          method: "GET",
        }),
        keepUnusedDataFor: 0,
      }),

      updateUser: builder.mutation({
        invalidatesTags: ["USER"],
        query: (data) => ({ url: "update/me", method: "PATCH", body: data }),
      }),

      logout: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "GET",
        }),
      }),
    };
  },
});

export const {
  useFetchUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useUpdateUserMutation,
} = userApi;
export { userApi };
