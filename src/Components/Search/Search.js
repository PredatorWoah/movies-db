import React, { useState, useEffect } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/searchSlice";
import { id } from "../../features/idSlice";
import { useGetSearchQuery } from "../../features/Api";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchh = useSelector((state) => state.search.search);
  const title = useSelector((state) => state.title.title)
  const [show, setShow] = useState(false);

  const { data } = useGetSearchQuery(searchh);


  const results = data?.results;


  const queryHanlder = (e) => {
    setQuery(e.target.value);
    dispatch(search(query));
    setShow(true);
  };

  return (
    <>
      <div className="search">
        <SearchIcon />
        <input
          type="text"
          placeholder={title ? `${title}` : 'Search Movie Title'}
          maxLength="50"
          value={query}
          onChange={(e) => queryHanlder(e)}
        />
        <div
          className={show ? "search__results search__show" : "search__results"}
        >
          {results &&
            results.map((data) => (
              <div
                className="search__box"
                key={data?.id}
                onClick={() => {
                  dispatch(id(data?.id));
                  setShow(false);
                  setQuery('')
                }}
              >
                <span>{data?.original_title || data?.title}</span>
              </div>
            ))}
        </div>
      </div>
      <div
        className={show ? "layer_3 layer__index" : "layer_3"}
        onClick={() => setShow(false)}
      ></div>
    </>
  );
}

export default Search;
