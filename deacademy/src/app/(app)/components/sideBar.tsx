
import logo from "../../../assets/logo e nome 3.png"
import courses from "../../../assets/courses-black.png"
import myCourses from "../../../assets/my courses-black.png"
import marketplace from "../../../assets/marketplace-black.png"
import overview from "../../../assets/painel-black.png"
import Image from "next/image";

const SideBar = () => {
    return (
        <aside className="h-screen w-72 fixed top-0 left-0 justify-center">
            <div className="bg-white border-r-2 border-gray-300 h-full flex flex-col items-center">

                {/*logo e nome*/}
                <div className="flex flex-row justify-center items-center m-4 mb-14">
                    <a href="/"  className="mt-5">
                                <Image src={logo} alt="DeAcademyIcon" className=""/>
                    </a>
                </div>
                

                {/*icones*/}
                <ul>
                    <li>
                        <div className="flex flex-row items-center my-8">
                           <a href="/StudentPages/Courses">
                                <Image src={courses} alt="Courses Icon" className=" h-14 w-14"/>
                            </a>
                            <a href="/student/courses">
                                <h2 className="font-semibold text-2xl text-black mx-2">Courses</h2>
                                </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-8">
                           <a href="/StudentPages/MyCourses">
                                <Image src={myCourses} alt="myCourses Icon" className=" h-14 w-14"/>
                            </a>
                            <a href="/student/mycourses">
                                <h2 className="font-semibold text-2xl text-black mx-2">My courses</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-8">
                           <a href="/student/marketplace">
                                <Image src={marketplace} alt="myCourses Icon" className=" h-14 w-14"/>
                            </a>
                            <a href="/student/marketplace">
                                <h2 className="font-semibold text-2xl text-black mx-2">Marketplace</h2>
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row items-center my-8">
                           <a href="/student/overview">
                                <Image src={overview} alt="myCourses Icon" className=" h-14 w-14"/>
                            </a>
                            <a href="/student/overview">
                                <h2 className="font-semibold text-2xl text-black px-2">Overview</h2>
                            </a> 
                        </div>
                    </li>
                </ul>

                {/*Student/teacher bottom button*/}
                <button className="mt-80 rounded-full bg-gradient-to-r from-violet-700 to-cyan-600 px-10 py-2">
                    <p className="font-bold text-white">Student</p>
                </button>
            </div>

        </aside>
    );
  }

export default SideBar;