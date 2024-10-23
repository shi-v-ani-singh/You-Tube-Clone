import React from 'react'

const buttonList = ['All', 'Javascript', 'Java','Programming','Java', 'Live', 'Songs', 'Movies', 'Blogs', 'Trending', 'Gaming','Movies']

const ButtonList = () => {
    return (
        <div className='flex fixed bg-slate-50 gap-4 '>

            {
                buttonList.map((items, index) => {

                    return(
                        <button key={index} className='border font-medium rounded-md px-4 py-1  hover:bg-gray-200 bg-gray-100 cursor-pointer'>{items}</button>
                    )

                })
            }     
        </div>
    )
}

export default ButtonList