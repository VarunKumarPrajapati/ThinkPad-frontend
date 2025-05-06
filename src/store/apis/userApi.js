import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/users",
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
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
    };
  },
});

export const { useFetchUserQuery, useUpdateUserMutation } = userApi;
export { userApi };
