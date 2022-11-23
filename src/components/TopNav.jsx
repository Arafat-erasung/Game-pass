import React from 'react'
import {TbMessageCircle } from "react-icons/tb";
import {HiUserGroup} from "react-icons/hi";
import logo from "../assets/logo.png";
import { Avata } from "../components/Avata";

export const TopNav = () => {
  return (
    <div className= ' bg-blue-900 w-full'>
      <nav className='flex justify-between'>
        <div className='flex'>
        <div className='flex items-center'>
          <img src={logo} alt="gamelogo" width="50px"/>
            <a href='#'>GamePhase</a>
        </div>
          
          <ul className='flex items-center space-x-4'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Streams</a></li>
            <li><a href='#'>CyberSport</a></li>
            <li><a href='#'>GameStore</a></li>
            <li><a href='#'>News</a></li>
          </ul>
        </div>
        <div className='flex p-4 items-center'><TbMessageCircle className='text-gray-600' size={30}/> <p className='p-4'>|</p>
              <HiUserGroup className = "m-2 text-gray-600" size={30}/>
              <p className='p-4'>|</p>
              <Avata />
        </div>
      </nav>
    </div>
  )
}
