import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {imgUrl, API_KEY} from '../../constants/constants'



function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      var x= Math.floor(Math.random()*20)
      setMovie(response.data.results[x]);
      
    
    })
  }, [])

 
  
  
  return (
    <div style={{backgroundImage: `url(${imgUrl+movie.backdrop_path})`}}
    className='banner'>
        <div className='content'>
        <h1 className='title'>{movie ? movie.title : null}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : null}</h1>
        </div>
       
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner;
