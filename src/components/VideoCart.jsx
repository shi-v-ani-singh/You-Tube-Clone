import React, { useEffect, useState, useCallback } from 'react';
import Avatar from 'react-avatar';
import API_KEY from '../constants/youTube';
import axios from 'axios';


const VideoCart = ({ item }) => {
  const [ytIcon, setYtIcon] = useState("");

  const getYtChannelName = useCallback(async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
      
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
     
    }
  }, [item.snippet.channelId]); // Add channelId as a dependency

  useEffect(() => {
    getYtChannelName();
  }, [getYtChannelName]);

  return (
    <div className='w-94 cursor-pointer my-2'>
      <img
        className='rounded-xl w-full'
        src={item.snippet.thumbnails.medium.url}
        alt='ytvideo'
      />
      <div>
        <div className='flex mt-2 items-start'>
          <Avatar src={ytIcon} size="35" round={true} />
          <div className='ml-2 flex-1'>
            <h1 className='font-bold m-0 p-0 leading-tight text-base'>
              {item.snippet.title}
            </h1>
            <p className='text-sm text-gray-500 m-0 p-0'></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCart;
