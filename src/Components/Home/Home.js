import React, { useState, useEffect } from "react";
import "./Home.css";
import Info from "./Info/Info";
import Poster from "./Poster/Poster";
import { useSelector, useDispatch } from "react-redux";
import { useGetByIdQuery, useGetTrendingQuery } from "../../features/Api";
import { title } from "../../features/titleSlice";
const base_url = "https://image.tmdb.org/t/p/original";

function Home() {
  const id = useSelector((state) => state.id.id);

  const { data } = useGetByIdQuery(id);
  const result = useGetTrendingQuery();
  const dispatch = useDispatch();

  const res = result?.data;

  dispatch(title(data?.title || data?.original_title));

  return (
    <>
      <div
        className="layer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${
            data?.backdrop_path || res?.backdrop_path
          })`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="layer_2"></div>
      <div className="home">
        <Poster img={data?.poster_path || res?.poster_path} />
        <Info
          title={
            data?.original_title ||
            data?.title ||
            res?.title ||
            res?.original_title
          }
          tagline={data?.tagline || res?.tagline}
          overview={data?.overview || res?.overview}
          production_companies={
            data?.production_companies.map((data) => data?.name) ||
            res?.production_companies.map((data) => data?.name)
          }
          runtime={data?.runtime || res?.runtime}
          revenue={data?.revenue || res?.revenue}
          release_date={data?.release_date || res?.release_date}
          vote_average={data?.vote_average || res?.vote_average}
          genres={
            data?.genres.map((data) => data.name) ||
            res?.genres.map((data) => data.name)
          }
        />
      </div>
      <div className="fork">
        <a
          href="https://github.com/therogersak/movies-db-with-react-js"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
            alt="github"
          />
        </a>
      </div>
    </>
  );
}

export default Home;
