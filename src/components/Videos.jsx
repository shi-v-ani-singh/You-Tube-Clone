import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { YOUTUBE_VIDEO_API } from '../constants/youTube';
import VideoCart from './VideoCart';

const Videos = () => {
  // state variable
  const [video, setVideo] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-3 mt-5'>
      {
        video.map((item)=>{
          return(
            <VideoCart key={item.id} item={item}/>
          )
        })
      }


    </div>
  )
}

export default Videos