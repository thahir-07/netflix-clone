import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {API_KEY, imageUrl } from '../../constant/constant'
import axios from '../../axios'
import YouTube from 'react-youtube'
function RowPost(props) {
  let [movies, setMovies] = useState([])
  let [urlId,setUrlId]=useState('')
  
  useEffect(() => {
    // eslint-disable-next-line
    axios.get(props.url).then((response) => {
      console.log(response.data.results)
      setMovies(response.data.results);
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(mId)=>{
    axios.get(`movie/${mId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0].key)
        console.log(response.data.results[0].key)
      }else{
        console.log("key not Available")
      }

    })
    
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((movie, i) => {
            return (<img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? "small-poster" : "poster"} src={`${imageUrl + movie.backdrop_path}`} alt="Card" />)
          })

        }
      </div>
      {urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  )
}

export default RowPost
