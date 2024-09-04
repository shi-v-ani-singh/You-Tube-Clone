import React from 'react';
import Videos from './Videos';
import ButtonList from './ButtonList'



const FeedContainer = () => {
  return (
    <div className='ml-10 mt-6 mr-10 w-[80%]'>
        <ButtonList/>

        <Videos/>
    </div>
  )
}

export default FeedContainer