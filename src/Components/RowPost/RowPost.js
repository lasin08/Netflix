import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import './RowPost.css'
import {imgUrl, API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [rows, setRow] = useState([]);
  const [urlId, setUrlId]= useState();
 
 
  useEffect(() => {
   axios.get(props.url).then((response)=>{
    
   setRow(response.data.results);
  })
}, [])
  
function handleClick(id){
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US)`).then((response)=>{
    if (response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }
    else{
      console.log("Trailer not available");
    }
  })
 
 
  
}
  
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">

        { rows.map((obj)=>{
          
        
            return <img onClick={()=>{handleClick(obj.id)}} className= {props.isSmall ? 'smallposter' : 'poster'} src= {`${imgUrl+obj.backdrop_path}`} alt="card" />;
})}
            
        </div>
    {urlId && <YouTube opts={opts} videoId= {urlId.key}/>}
    </div>
  )
}

export default RowPost;