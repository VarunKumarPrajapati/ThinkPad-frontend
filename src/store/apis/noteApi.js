import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const noteApi = createApi({
  reducerPath: "note",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/notes",
    credentials: "include",
  }),

  endpoints: (builder) => {
    return {
      fetchNotes: builder.query({
        providesTags: ["NOTE"],
        query: () => ({
          url: "/",
          method: "GET",
        }),
        keepUnusedDataFor: 0,
      }),

      createNote: builder.mutation({
        invalidatesTags: ["NOTE"],
        query: (data) => ({
          url: "/create",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export { noteApi };
export const { useCreateNoteMutation, useFetchNotesQuery } = noteApi;
