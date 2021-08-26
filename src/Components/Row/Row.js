import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl_img = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(""); // close
        } else {
            movieTrailer(
                movie?.name || movie?.original_title || movie?.title || ""
            )
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            {props.title}
            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                        <img
                            onClick={() => handleClick(movie)}
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

            {/* show only when tariler is available */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
