import React, { useState, useEffect } from "react";
import "./Home.css";
import Info from "./Info/Info";
import Poster from "./Poster/Poster";
import { useSelector , useDispatch } from "react-redux";
import { useGetByIdQuery, useGetTrendingQuery } from "../../features/Api";
import {button} from '../../features/buttonSlice'
const base_url = "https://image.tmdb.org/t/p/original";

function Home() {
  const id = useSelector((state) => state.id.id);

  const { data } = useGetByIdQuery(id);
  const result = useGetTrendingQuery();
  const dispatch = useDispatch();

  const res = result?.data;

  console.log(res);
  console.log(data);
  return (
    <>
      <div
        className="layer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${data?.backdrop_path || res?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="layer_2" onClick={() => dispatch(button(false))}></div>
      <div className="home" onClick={() => dispatch(button(false))}>
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
          production_companies={data?.production_companies.map(
            (data) => data?.name
          ) || res?.production_companies.map(
            (data) => data?.name
          )}
          runtime={data?.runtime || res?.runtime}
          revenue={data?.revenue || res?.revenue}
          release_date={data?.release_date || res?.release_date}
          vote_average={data?.vote_average || res?.vote_average}
          genres={data?.genres.map((data) => data.name) || res?.genres.map((data) => data.name)}
        />
      </div>
    </>
  );
}

export default Home;
