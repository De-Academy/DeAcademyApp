
import logo from "./assets/logo2.png"
import courses from "./assets/courses.png"
import myCourses from "./assets/my courses.png"
import marketPlace from "./assets/marketplace.png"
import Image from "next/image";

export default function sideBar() {
    return (
        <aside className="h-screen w-52 fixed top-0 left-0 justify-center">
            <div className="bg-gradient-to-b from-violet-700 to-cyan-400 h-full flex flex-col items-center">
                <a href="/"  className="rounded-full h-24 w-24  py-5">
                            <Image src={logo} alt="DeAcademyIcon" className="rounded-full h-24 w-24"/>
                </a>

                <h3 className="py-6 pb-10 font-bold text-white text-2xl">DeAcademy</h3>

                <ul>
                    <li>
                        <a href="/" className="flex flex-row items-center py-2">
                            <Image src={courses} alt="Courses Icon" className=" h-10 w-10"/>
                            <h2 className="font-bold text-white px-2">Courses</h2>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex flex-row items-center py-2">
                            <Image src={myCourses} alt="My Courses Icon" className=" h-10 w-10"/>
                            <h2 className="font-bold text-white px-2">My courses</h2>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex flex-row items-center py-2">
                            <Image src={marketPlace} alt="My Courses Icon" className=" h-10 w-10"/>
                            <h2 className="font-bold text-white px-2">Marketplace</h2>
                        </a>
                    </li>
                </ul>
            </div>

        </aside>
    );
  }