import React from 'react'
import ButtonList from './ButtonList'
import Videos from './Videos'

const FeedContainer = () => {
  return (
    <div className='mt-8 ml-5 mr-5 w-[80%]'>
        <ButtonList/>
        <Videos/>
    </div>
  )
}

export default FeedContainer