
import logo from "./assets/logo2.png"
import courses from "./assets/courses.png"
import myCourses from "./assets/my courses.png"
import marketplace from "./assets/marketplace.png"
import overview from "./assets/painel.png"
import Image from "next/image";

const SideBar = () => {
    return (
        <aside className="h-screen w-52 fixed top-0 left-0 justify-center">
            <div className="bg-gradient-to-b from-violet-700 to-cyan-400 h-full flex flex-col items-center">

                {/*logo e nome*/}
                <a href="/"  className="rounded-full h-20 w-20  mt-5">
                            <Image src={logo} alt="DeAcademyIcon" className="rounded-full h-20 w-20"/>
                </a>

                <a href="/" className="mb-16 h-0 p-0">
                    <h3 className="font-bold text-white text-2xl">DeAcademy</h3>
                </a>

                {/*icones*/}
                <ul>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentPages/Courses">
                                <Image src={courses} alt="Courses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentPages/Courses">
                                <h2 className="font-bold text-white mx-2">Courses</h2>
                                </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentPages/MyCourses">
                                <Image src={myCourses} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentPages/MyCourses">
                                <h2 className="font-bold text-white mx-2">My courses</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentPages/Marketplace">
                                <Image src={marketplace} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentPages/Marketplace">
                                <h2 className="font-bold text-white mx-2">Marketplace</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-4">
                           <a href="/StudentPages/Overview">
                                <Image src={overview} alt="myCourses Icon" className=" h-10 w-10"/>
                            </a>
                            <a href="/StudentPages/Overview">
                                <h2 className="font-bold text-white px-2">Overview</h2>
                            </a> 
                        </div>
                    </li>
                </ul>

                {/*Student/teacher bottom button*/}
                <button className="mt-96 rounded-full bg-gradient-to-r from-violet-700 to-cyan-600 px-10 py-2">
                    <p className="font-bold text-white">Student</p>
                </button>
            </div>

        </aside>
    );
  }

export default SideBar;