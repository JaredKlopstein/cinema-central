import React, {useState,useEffect} from 'react'
import Preview from '../components/Preview'
import axios from 'axios'
import API_KEY from '../keys'
import MovieFeed from '../components/MovieFeed'
import requestURLS from '../requests'
import NavBar from '../components/NavBar'

function Home() {
    const [preview, setPreview] = useState([])
    
    async function fetchPreview() {
        const previewData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        setPreview(previewData.data.results[0])
    }

      useEffect(() => {
        fetchPreview();
}, []);

  return (
  <>
  <NavBar/>
    <Preview title={preview.original_title} plot={preview.overview} image={`https://image.tmdb.org/t/p/original${preview.backdrop_path}`}/>
    <MovieFeed category='Popular' url={requestURLS.Popular}/>
    <MovieFeed category='Upcoming' url={requestURLS.Upcoming}/>
    <MovieFeed category='Top Rated' url={requestURLS.TopRated}/>
    </>
  )
}

export default Home