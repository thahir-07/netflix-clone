import React,{useEffect,useState} from 'react'
import './RowPost.css'
import { API_KEY,imageUrl } from '../../constant/constant'
import axios from '../../axios'
function RowPost(props) {
  let [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results);
    })
  },[])
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className="posters">
    {
    movies.map((movie,i)=>{
      return(<img className={props.isSmall?"small-poster":"poster"} src={`${imageUrl+movie.backdrop_path}`} alt="Card" />)
    })
    
  }
    </div>
  
    </div>
  )
}

export default RowPost
