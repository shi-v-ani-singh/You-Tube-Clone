import React from 'react';
import Videos from './Videos';
import ButtonList from './ButtonList'



const FeedContainer = () => {
  return (
    <div className='ml-10 mt-2.5 mr-10 w-[85%] '>
        <ButtonList/>

        <Videos />
    </div>
  )
}

export default FeedContainer