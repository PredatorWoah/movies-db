import React, { useState, useEffect } from "react";
import "./Home.css";
import Info from "./Info/Info";
import Poster from "./Poster/Poster";
import { useSelector, useDispatch } from "react-redux";
import { useGetByIdQuery, useGetTrendingQuery } from "../../features/Api";
import { title } from "../../features/titleSlice";
import { id } from "../../features/idSlice";
const base_url = "https://image.tmdb.org/t/p/original";

function Home() {
  const idd = useSelector((state) => state.id.id);
  const type = useSelector((state) => state.type.type);

  const info = {
    type: type,
    id: idd,
  };

  const results = useGetTrendingQuery();
  const dispatch = useDispatch();

  const res =
    results?.data?.results[
      Math.floor(Math.random() * results?.data?.results.length - 1)
    ];

  useEffect(() => {
    if (res && idd === "") {
      dispatch(id(res.id));
    }
  }, [res]);

  const { data } = useGetByIdQuery(info);
  console.log(data)

  dispatch(title(data?.title || data?.original_title));
  document.title = data?.original_title || data?.original_name || data?.name;

  return (
    <>
      <div
        className="layer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${data?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="layer_2"></div>
      <div className="home">
        <Poster img={data?.poster_path || data?.profile_path} />
        <Info
          title={
            data?.original_title ||
            data?.title ||
            data?.name ||
            data?.original_name
          }
          tagline={data?.tagline}
          overview={data?.overview || data?.biography}
          production_companies={
            data?.production_companies &&
            data?.production_companies.map((data) => data?.name)
          }
          runtime={data?.runtime}
          revenue={data?.revenue}
          release_date={data?.release_date || data?.first_air_date}
          vote_average={data?.vote_average}
          genres={data?.genres && data?.genres.map((data) => data.name)}
          dob={data?.place_of_birth}
          birthday={data?.birthday}
          popularity={data?.popularity}
          person={data?.profile_path && "person"}
          homepage={data?.homepage}
        />
      </div>
    </>
  );
}

export default Home;
