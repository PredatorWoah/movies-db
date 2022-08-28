import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => {
    const API_KEY = "e41e10a70ecb26587607640ae2112868";

    return {
      getSearch: builder.query({
        query: (info) => {
          const { type, query } = info;
          return {
            url: `/search/multi?query=${query}&api_key=${API_KEY}&page=1&language=hi-IN`,
            method: "GET",
          };
        },
      }),

      getById: builder.query({
        query: (info) => {
          const { type, id } = info;
          return {
            url: `/${type}/${id}?language=en-US&api_key=${API_KEY}`,
            method: "GET",
          };
        },
      }),

      getTrending: builder.query({
        query: () => ({
          url: `/trending/movie/week?api_key=${API_KEY}`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetSearchQuery, useGetByIdQuery, useGetTrendingQuery } =
  moviesApi;
