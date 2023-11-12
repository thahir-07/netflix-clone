import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../constant/constant'
import { imageUrl } from '../../constant/constant'
function Banner() {
    const [movie, setMovie] = useState('')
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[parseInt(Math.random()*20)])
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
       <div className="row">
       <div className="col-12">
       </div>
       <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
            <div className='content' >
                <h1 className='title'>{movie?movie.title:''}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <div className="row">
                <div className="col-3">
                <h1 className='description'>{movie?movie.overview:''}</h1>
                <button className='btn btn-danger'>click me</button>
                </div>
                </div>
                
            </div>
            <div className="fade_bottom"></div>
        </div>
        
       </div>

        
    )
}

export default Banner
