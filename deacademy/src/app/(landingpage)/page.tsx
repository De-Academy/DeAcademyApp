import React from "react";
import Link from "next/link";


const page = () => {
  return (
      <div>
        <div className="md:flex items-center justify-center mt-44">
          <div className="flex flex-col items-center">
            <h1 id="main-text-home-page" className="text-6xl font-bold text-gray-100" >Learn and Earn</h1>
            <h1 id="main-text-home-page" className="text-6xl font-bold text-gray-100">Teach and Reach</h1>
            <div className="flex flex-col items-center mt-8">
              <p className="text-app font-bold text-gray-100">Bringing a new form of promoting education.</p>
              <p id="sub-text-home-page" className="text-6x1 font-bold text-gray-100">Descentralized, Easy and Fun.</p>
            </div>
          </div>
        </div>
      {/* Buttons */}
        <div className="flex items-center justify-center align-center my-20 text-3xl font-bold">
          <Link href="/student/courses">
          <button className="flex flex-col mx-24 bg-clip-padding p-6 bg-violet-600 rounded-full shadow-2xl  hover:bg-violet-700 hover:-translate-y-1"> 
          <p className="text-white">Start Learning</p> </button>
          </Link>

          <Link href="/teacher/create">
          <button className="flex flex-col mx-24 bg-clip-padding p-6 bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:-translate-y-1">
            <p className="text-deacademy-purple">Start Teaching</p>
          </button>
          </Link>
        </div>
      </div>
  )
}

export default page