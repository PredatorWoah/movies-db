import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => {
    const API_KEY = "e41e10a70ecb26587607640ae2112868";

    return {
      getSearch: builder.query({
        query: (query) => {
          return {
            url: `/search/movie?query=${query}&api_key=${API_KEY}&page=1`,
            method: "GET",
          };
        },
      }),

      getById: builder.query({
        query: (id) => {
          return {
            url: `/movie/${id}?language=en-US&api_key=${API_KEY}`,
            method: "GET",
          };
        },
      }),

      getTrending: builder.query({
        query: () => ({
          url: `/movie/299537?language=en-US&api_key=${API_KEY}`,
          method: "GET",
        }),
      }),
    };
  },
});


export const {useGetSearchQuery , useGetByIdQuery , useGetTrendingQuery} = moviesApi;