import React from 'react';
import Videos from './Videos';
import ButtonList from './ButtonList'



const FeedContainer = () => {
  return (
    <div className='ml-10  h-[calc(100vh-4.625rem)] overflow-auto mt-2.5 mr-10 w-[85%]'>
        <ButtonList/>

        <Videos />
    </div>
  )
}

export default FeedContainer