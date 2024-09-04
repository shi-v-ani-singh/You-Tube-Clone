import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { YOUTUBE_VIDEO_API } from '../constants/youTube';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';

const Videos = () => {
  // state variable
  const [video, setVideo] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);

      setVideo(res?.data?.items);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-3 mt-5'>
      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCart item={item} />
            </Link>
          )
        })
      }


    </div>
  )
}

export default Videos