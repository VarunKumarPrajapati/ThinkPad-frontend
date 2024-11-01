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

      fetchUser: builder.query({
        providesTags: ["USER"],
        query: () => ({
          url: "/me",
          method: "GET",
        }),
      }),

      updateUser: builder.mutation({
        invalidatesTags: ["USER"],
        query: (data) => ({ url: "update/me", method: "PATCH", body: data }),
      }),
    };
  },
});

export const {
  useFetchUserQuery,
  useLoginMutation,
  useSignUpMutation,
  useUpdateUserMutation,
} = userApi;
export { userApi };
