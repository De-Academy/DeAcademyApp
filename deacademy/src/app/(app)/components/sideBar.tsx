
import logo from "../../../assets/logo e nome 3.png"
import courses from "../../../assets/courses-black.png"
import myCourses from "../../../assets/my courses-black.png"
import marketplace from "../../../assets/marketplace-black.png"
import overview from "../../../assets/painel-black.png"
import Image from "next/image";
import SideBarElement from "./SideBarElement"

const SideBar = () => {

    



    return (
        <main>
        <aside className="h-screen w-72 fixed top-0 left-0 justify-center">
            <div className="bg-white h-full flex flex-col items-center">

                {/*logo e nome*/}
                
                <div className="flex flex-row justify-center items-center m-4 mb-14">
                    <a href="/"  className="mt-5">
                                <Image src={logo} alt="DeAcademyIcon" className=""/>
                    </a>
                </div>
                

                {/*Elementos*/}
                <ul>
                    <SideBarElement 
                     elementIcon={
                        <Image src={courses} alt="CoursesIcon" className="h-14 w-14"/>
                     }
                     elementTitle="Courses" 
                     redirectionLink="/student/courses" />

                    <SideBarElement 
                     elementIcon={
                        <Image src={myCourses} alt="MyCoursesIcon" className="h-14 w-14"/>
                     }
                     elementTitle="My Courses" 
                     redirectionLink="/student/mycourses" />

                    <SideBarElement 
                     elementIcon={
                        <Image src={marketplace} alt="MarketplaceIcon" className="h-14 w-14"/>
                     }
                     elementTitle="Marketplace" 
                     redirectionLink="/student/marketplace" />
                    
                    <SideBarElement 
                     elementIcon={
                        <Image src={overview} alt="OverviewIcon" className="h-14 w-14"/>
                     }
                     elementTitle="Overview" 
                     redirectionLink="/student/overview"/>
                </ul>
                {/*Student/teacher bottom button*/}
                <div className="flex ">
                <button className="mt-80 rounded-l-full bg-gradient-to-r from-violet-700 to-cyan-600 px-10 py-2">
                    <p className="font-bold text-white">Student</p>
                </button>
                <button className="mt-80 rounded-r-full bg-gradient-to-r from-cyan-600  to-violet-700 px-10 py-2">
                    <p className="font-bold text-white">Teacher</p>
                </button>
                </div>  

            </div>

        </aside>
        </main>
    );
  }

export default SideBar;