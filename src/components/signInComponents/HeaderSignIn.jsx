import React from 'react'
import { MdAppRegistration } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const HeaderSignIn = () => {
  return (
    <div className="">
          <div className="flex gap-1 mb-15">
            <div className="bg-black p-1 rounded-lg"><MdAppRegistration className="w-5 h-5 text-white"/></div>
            <h3 className="font-bold text-xl">My Tor</h3>
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <h1 className="font-semibold text-6xl">Sign in to<br /> business organized</h1>
            <span className="text-gray-400 text-sm">Sign up to start your skills</span>
          </div>
          <div className="border-1 border-gray-300 w-full rounded-lg p-5 flex items-center gap-2 justify-center cursor-pointer">
            <FcGoogle className="w-5 h-5"/>
            <p className="font-semibold text-md text-gray-500">Sign in with google</p>
          </div>
        </div>
  )
}

export default HeaderSignIn
