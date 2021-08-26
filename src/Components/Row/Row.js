import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

const baseUrl_img = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    return (
        <div className="row">
            {props.title}

            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                        <img
                            src={`${baseUrl_img}${
                                props.isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                            key={movie.id}
                            className={`row_poster ${
                                props.isLargeRow && "row_poster_large"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
