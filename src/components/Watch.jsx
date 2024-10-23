import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import API_KEY from '../constants/youTube';
import Avatar from 'react-avatar';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { MdFileDownload } from "react-icons/md";

const Watch = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const getChannelDetails = async (channelId) => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`);
      setChannelDetails(res?.data?.items[0]);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const getSingleVideo = async () => {
      try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
        const videoData = res?.data?.items[0];
        setSingleVideo(videoData);
        if (videoData) {
          getChannelDetails(videoData?.snippet?.channelId);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getSingleVideo();
  }, [videoId]);
  


  console.log(singleVideo);

  return (
    <div className='flex  mt-4 ml-4 w-[100%]'>
    <div className='flex  w-[88%]'>
    <div>
        <iframe
          width="100%"
          height="500"
          src={` https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
        <div className='flex justify-between mt-5'>
          <div className='flex items-center justify-between w-[35%]'>
            <div className='flex '>
              {channelDetails ? (<img
                src={channelDetails.snippet.thumbnails.default.url}
                alt={channelDetails.snippet.title}
                className="rounded-full"
                style={{ width: 34, height: 34 }}
              />) : (
                <Avatar size="34" round={true} />
              )}
              <h1 className='font-bold ml-2'> {singleVideo?.snippet?.channelTitle}</h1>
            </div>
            <button className='px-4 py-1 font-medium bg-black text-white rounded-full '>Subscribe</button>
          </div>
          <div className='flex justify-between gap-3'>
            <div className='flex justify-between gap-6 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer p-3'>
              <div className='flex gap-2'>
                <AiOutlineLike size={24} />
                <p>12k</p>
              </div>
              <div className='w-px h-6 bg-gray-600'></div>

              <BiDislike size={24} />

            </div>
            <div className='flex rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 gap-3'>
              <RiShareForwardLine size={24} />
              <h1 className='font-medium'>share</h1>
            </div>
            <div className='flex rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 gap-3 ' >
              <MdFileDownload size={24} />
              <h1 className='font-medium'>Download</h1>
            </div>
            <div className='flex rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer p-3'>
              <SlOptions size={24} />

            </div>

          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Watch