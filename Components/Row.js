import React, { useState, useEffect } from 'react';
import instance from '../Functions/axios';
/*import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';*/
import "../Styles/row.css";

const img_base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
          }
          fetchData();
    } , [fetchUrl]);

    return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
        {movies.map(movie => {
          return <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${img_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        })}
      </div>
    </div>
    );
}

export default Row;