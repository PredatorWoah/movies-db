import React, { useState, useEffect } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/searchSlice";
import { id } from "../../features/idSlice";
import { type } from "../../features/typeSlice";
import { useGetSearchQuery } from "../../features/Api";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "react-reveal/Fade";
import Flash from 'react-reveal/Flash';

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchh = useSelector((state) => state.search.search);
  const title = useSelector((state) => state.title.title);
  const [show, setShow] = useState(false);
  const ty = useSelector((state) => state.type.type);
  console.log(ty);

  const { data } = useGetSearchQuery(searchh);

  const results = data?.results;

  const info = {
    query: query,
    type: ty,
  };

  const queryHanlder = (e) => {
    setQuery(e.target.value);
    dispatch(search(info));
    setShow(true);
  };

  const [typee, setType] = useState("movie");

  const typeHandler = (e) => {
    setType(e.target.value);
    dispatch(type(e.target.value));
  };

  return (
    <>
      <div className="search">
        <SearchIcon />
        <input
          type="text"
          placeholder={title ? `${title}` : "Search..."}
          maxLength="50"
          value={query}
          onChange={(e) => queryHanlder(e)}
        />

        <div className="select">
          <select name="type" value={typee} onChange={(e) => typeHandler(e)}>
            <option value="tv">Tv Shows</option>
            <option value="movie">Movies</option>
            <option value="person">Persons</option>
            <option value="collection">Collections</option>
          </select>
        </div>

        <Fade bottom>
          <div
            className={
              show ? "search__results search__show" : "search__results"
            }
          >
            {results &&
              results.map((data) => (
                <Fade>
                  <div
                    className="search__box"
                    key={data?.id}
                    onClick={() => {
                      dispatch(id(data?.id));
                      setShow(false);
                      setQuery("");
                    }}
                  >
                    <span>
                      {data?.original_title ||
                        data?.title ||
                        data?.original_name ||
                        data?.name}
                    </span>
                  </div>
                </Fade>
              ))}
          </div>
        </Fade>
      </div>
      <div
        className={show ? "layer_3 layer__index" : "layer_3"}
        onClick={() => setShow(false)}
      ></div>
    </>
  );
}

export default Search;
