import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/auth",
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

      logout: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "GET",
        }),
      }),

      verifyEmail: builder.mutation({
        query: (token) => ({
          url: `/verify-email?token=${token}`,
          method: "GET",
        }),
      }),

      forgotPassword: builder.mutation({
        query: (body) => ({
          url: `/forgot-password`,
          method: "POST",
          body,
        }),
      }),

      resetPassword: builder.mutation({
        query: (body) => ({
          body,
          url: "/reset-password",
          method: "POST",
        }),
      }),
    };
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
export { authApi };
