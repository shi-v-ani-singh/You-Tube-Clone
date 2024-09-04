import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";


const Navbar = () => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        //dispatching the action
        dispatch(toggleSidebar());

    }

    return (
        <div className='flex fixed  justify-center top-0  items-center w-[100%] z-10 mt-[-1rem] pt-4  bg-white mb-4  shadow'>
            <div className='flex justify-between py-3 w-[95%] items-center'>
                <div className='flex gap-5 ml-3 items-center w-[30%]'>
                    <div className='hover:rounded-full hover:bg-gray-100  cursor-pointer p-3'>
                        <RxHamburgerMenu onClick={toggleHandler} size={'24px'} />
                    </div>
                    <div>
                        <img width={'115px'} src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png?20170829160812' alt='yt-logo' />
                    </div>
                </div>
                <div className='flex w-[40%] items-center '>
                    <div className='w-[100%] py-3 px-4 border border-gray-400 rounded-l-full '>
                        <input type='text' placeholder='Search' className='w-full outline-none' />
                    </div>
                    <button className='py-3 px-8 hover:bg-gray-200 bg-gray-100  border-r border-b border-t border-gray-400  rounded-r-full'>
                        <CiSearch className='cursor-pointer' size={'24px'} />
                    </button>
                    <div className='rounded-full hover:rounded-full hover:bg-gray-200 bg-gray-100 cursor-pointer p-3 ml-3'>
                        <FaMicrophone size={'24px'} />
                    </div>
                </div>
                <div className='flex gap-8 w-[12%] items-center'>
                    <div className='rounded-full hover:rounded-full hover:bg-gray-100 cursor-pointer p-3'>
                        <RiVideoAddLine size={'24px'} />
                    </div>
                    <div className='hover:rounded-full hover:bg-gray-100 cursor-pointer p-3'>
                        <IoMdNotificationsOutline size={'24px'} />
                    </div>
                    <div className='hover:rounded-full hover:bg-gray-100 cursor-pointer p-3'>
                        <CgProfile size={'24px'} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar