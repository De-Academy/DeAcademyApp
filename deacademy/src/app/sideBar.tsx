
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

                {/*logo e nome*/}
                <a href="/StudentCourses"  className="rounded-full h-20 w-20  mt-5">
                            <Image src={logo} alt="DeAcademyIcon" className="rounded-full h-20 w-20"/>
                </a>

                <a href="/StudentCourses" className="mb-16 h-0 p-0">
                    <h3 className="font-bold text-white text-2xl">DeAcademy</h3>
                </a>

                {/*icones*/}
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

                {/*Student/teacher bottom button*/}
                <button className="mt-48 rounded-full bg-gradient-to-r from-violet-700 to-cyan-600 px-7 py-2">
                    <p className="font-bold text-white">Student</p>
                </button>
            </div>

        </aside>
    );
  }