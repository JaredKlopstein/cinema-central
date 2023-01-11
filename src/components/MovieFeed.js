import React, {useState,useEffect} from 'react'
import './MovieFeed.css'
import axios from 'axios';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MovieFeed({category,url}) {
    const [movies, setMovies] = useState([])

    async function fetchMovies() {
        const movieData = await axios.get(`${url}`);
        setMovies(movieData.data.results)
        
    }
      useEffect(() => {
        fetchMovies();
}, []);

  return (
    <div className="scroll__container">
        <div className="scrollTitleContainer">
        <h2 className='scrollTitle'>{category}</h2>
        <ArrowForwardIcon className='Title__arrow'/>
        </div>
    <div className='scroll'>
    {movies.map((post) => (  
             
    <div className="item" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${post.poster_path})`}} key={post.id}>
    </div>
    ))}
    </div>
    </div>
  )
}

export default MovieFeed