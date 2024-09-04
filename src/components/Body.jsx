import React from 'react';
import LeftSidebar from './LeftSidebar';
// import FeedContainer from './FeedContainer';
import {Outlet}from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex mt-16'>
      <LeftSidebar />
      <Outlet/>
    </div>
  )
}

export default Body