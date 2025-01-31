import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { useSelector } from 'react-redux';


const sidebarItems = [
  {
    icons: <GoHome size={'24px'}  />,
    title: 'Home',
  },
  {
    icons: <SiYoutubeshorts size={'24px'} />,
    title: 'Shorts'
  },
  {
    icons: <MdOutlineSubscriptions size={'24px'} />,
    title: 'Subscription'
  },
  {
    icons: <MdVideoLibrary size={'24px'} />,
    title: 'You'
  },

]


const LeftSidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div className={`
      flex flex-col relative items-start ml-1 gap-1 left-0 p-3 h-[calc(100vh-10rem)] mt-4 pt-0.5  ${open?"w-[20%]":"w-[8%]"} z-10`}>
      {
        sidebarItems.map((item, index) => {


          return (
            <div key={index} className={`flex  ${open ? "flex-row" : "flex-col"} items-center gap-2 cursor-pointer hover:bg-gray-100 p-4 w-full hover:rounded-md`}>
              {item.icons}
              <p className={`${open ? "" : 'hidden'}`}>{item.title}</p>
            </div>
          )
        })
      }
    </div>

  )
}
export default LeftSidebar