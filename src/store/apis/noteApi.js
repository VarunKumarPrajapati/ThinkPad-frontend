import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const noteApi = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL + "/api/notes",
    credentials: "include",
  }),

  endpoints: (builder) => {
    return {
      fetchNotes: builder.query({
        // providesTags: ["NOTE"],
        query: () => ({
          url: "/",
          method: "GET",
        }),
        keepUnusedDataFor: 0,
      }),

      createNote: builder.mutation({
        // invalidatesTags: ["NOTE"],
        query: (data) => ({
          url: "/create",
          method: "POST",
          body: data,
        }),
      }),

      updateNote: builder.mutation({
        query: ({ _id, ...data }) => ({
          url: `/update/${_id}`,
          method: "PATCH",
          body: data,
        }),
      }),

      deleteNote: builder.mutation({
        query: (_id) => ({
          method: "DELETE",
          url: `/delete/${_id}`,
        }),
      }),

      fetchDistinctColors: builder.query({
        query: () => ({
          method: "GET",
          url: "/distinct/colors",
        }),
      }),
    };
  },
});

export { noteApi };
export const {
  useCreateNoteMutation,
  useFetchNotesQuery,
  useUpdateNoteMutation,
  useLazyFetchDistinctColorsQuery,
  useFetchDistinctColorsQuery,
} = noteApi;
