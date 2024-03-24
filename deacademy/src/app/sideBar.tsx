
import logo from "./assets/logo2.png"
import courses from "./assets/courses.png"
import myCourses from "./assets/my courses.png"
import marketplace from "./assets/marketplace.png"
import overview from "./assets/painel.png"
import Image from "next/image";

export default function sideBar() {
    return (
        <aside className="h-screen w-52 fixed top-0 left-0 justify-center">
            <div className="bg-gradient-to-b from-violet-700 to-cyan-400 h-full flex flex-col items-center">
                <a href="/StudentCourses"  className="rounded-full h-24 w-24  mt-5">
                            <Image src={logo} alt="DeAcademyIcon" className="rounded-full h-24 w-24"/>
                </a>

                <a href="/" className=" mb-20 h-0 p-0">
                    <h3 className=" mb-10 font-bold text-white text-2xl">DeAcademy</h3>
                </a>

                <ul>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentCourses">
                                <Image src={courses} alt="Courses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentCourses">
                                <h2 className="font-bold text-white mx-2">Courses</h2>
                                </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentCourses">
                                <Image src={myCourses} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentCourses">
                                <h2 className="font-bold text-white mx-2">My courses</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentCourses">
                                <Image src={marketplace} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentCourses">
                                <h2 className="font-bold text-white mx-2">Marketplace</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentCourses">
                                <Image src={overview} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentCourses">
                                <h2 className="font-bold text-white px-2">Overview</h2>
                            </a> 
                        </div>
                    </li>
                </ul>
            </div>

        </aside>
    );
  }