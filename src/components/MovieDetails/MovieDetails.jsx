import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({movies}) => {
  let {id}=useParams()
  const  [chosen ,setChen]=useState({})
  useEffect(() => {
    setChen(movies.filter((movie)=>movie.id===id)[0])
  }, [movies])
  
  return (
    <div>
    <iframe
      width="900"
      height="506"
      src="{chosen.trailer}"
      title="{chosen.Title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h3>{chosen.description}</h3>
  </div>
  );
}

export default MovieDetails

