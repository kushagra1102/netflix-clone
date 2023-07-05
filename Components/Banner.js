import React, { useEffect, useState } from 'react';
import instance from '../Functions/axios';
import requests from '../Functions/requests';
import '../Styles/Banner.css'

function Banner(){
    const [movie,setMovie] = useState(null);

    useEffect(()=>{
        async function fetchRandomMovie(){
            const request = await instance.get(requests.fetchTopRated);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        }

        fetchRandomMovie();
    },[]);

    return (
        <header className='banner' 
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner-content'>
                   <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                   <div className='banner-buttons'>
                        <button className='banner-button'>Play</button>
                        <button className='banner-button'>My List</button>
                   </div>
                   <h4 className='banner-description'>{movie?.overview}</h4>
            </div>
        </header>
    )
}

export default Banner;