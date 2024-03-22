import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png"
import discord_logo from "./assets/discord-logo.png"


const page = () => {
  return (
    <div className="h-dvh bg-gradient-to-b from-purple-900 from-37% to-purple-100 to-80%">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 mt-4">
              {/* Logo and Name */}
              <a href="/" className="text-white font-bold text-xl flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  id="logo"
                  className="mr-2"
                  width={50}
                  height={50}
                />
                DeAcademy
              </a>
            </div>
            <div className="hidden md:flex items-center mt-6">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-100 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">What We Are</a>
                <a href="#" className="text-gray-100 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RoadMap</a>
              </div>

              <a href="https://discord.gg/EFJB3s3U" target="_blank" className="text-white font-bold text-xl flex items-center ml-4  hover:bg-purple-900 rounded-md px-1 py-1">
                <Image
                  src={discord_logo}
                  alt="Logo"
                  className=""
                  width={30}
                  height={15}
                />
              </a>
            </div>
            <div className="md:hidden">
              <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav> 

      {/* Main and Sub Text */}
      <div className="hidden md:flex items-center justify-center mt-44">
        <div className="flex flex-col items-center">
          <h1 id="main-text-home-page" className="text-6xl font-bold text-gray-100" >Learn and Earn</h1>
          <h1 id="main-text-home-page" className="text-6xl font-bold text-gray-100">Teach and Reach</h1>
          <div className="flex flex-col items-center mt-8">
            <p id="sub-text-home-page" className="text-6x1 font-bold text-gray-100">Bringing a new form of promoting education.</p>
            <p id="sub-text-home-page" className="text-6x1 font-bold text-gray-100">Descentralized, Easy and Fun.</p>
          </div>
        </div>
      </div>

     {/* Buttons */}
      <div className="flex items-center justify-center align-center my-20 text-3xl font-bold">

        <button className="flex flex-col mx-24 bg-clip-padding p-6 bg-violet-600 border-2 rounded-full shadow-2xl"> 
        <p className="text-white">Start Learning</p> </button>

        <button className="flex flex-col mx-24 bg-clip-padding p-6 bg-white border-2 rounded-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
          <p className="text-deacademy-purple">Start Teaching</p>
        </button>

      </div>

    
    </div>
  )
}

export default page