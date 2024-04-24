"use client";

import logo from "../../../assets/logo e nome 3.png"
import coursesBlack from "../../../assets/icon-90x90-black-courses.png"
import myCoursesBlack from "../../../assets/icon-90x90-black-mycourses.png"
import marketplaceBlack from "../../../assets/icon-90x90-black-marketplace.png"
import overviewBlack from "../../../assets/icon-90x90-black-overview.png"
import coursesWhite from "../../../assets/icon-90x90-white-courses.png"
import myCoursesWhite from "../../../assets/icon-90x90-white-mycourses.png"
import marketplaceWhite from "../../../assets/icon-90x90-white-marketplace.png"
import overviewWhite from "../../../assets/icon-90x90-white-overview.png"
import Image from "next/image";
import SideBarElement from "./SideBarElement"
import { useState } from "react"

const SideBar = () => {

    const [active, setActive] = useState<'teacher' | 'student'>('student');




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

                {active === 'student' && (
                <ul className="w-3/4">
                    <SideBarElement 
                     elementIcon={[
                        <Image src={coursesBlack} alt="CoursesIcon"/>,
                        <Image src={coursesWhite} alt="CoursesIcon"/>
                    ]
                     }
                     elementTitle="Courses" 
                     redirectionLink="/student/courses" />

                    <SideBarElement 
                     elementIcon={[
                        <Image src={myCoursesBlack} alt="MyCoursesIcon"/>,
                        <Image src={myCoursesBlack} alt="MyCoursesIcon"/>
                    ] 
                    }
                     elementTitle="My Courses" 
                     redirectionLink="/student/mycourses" />

                    <SideBarElement 
                     elementIcon={[
                        <Image src={marketplaceBlack} alt="MarketplaceIcon"/>,
                        <Image src={marketplaceWhite} alt="MarketplaceIcon"/>
                    ]    
                     }
                     elementTitle="Marketplace" 
                     redirectionLink="/student/marketplace" />
                    
                    <SideBarElement 
                     elementIcon={[
                        <Image src={overviewBlack} alt="OverviewIcon" />,
                        <Image src={overviewWhite} alt="OverviewIcon" />
                    ]
                     }
                     elementTitle="Overview" 
                     redirectionLink="/student/overview"/>
                </ul>
                )}
                {/*Student/teacher bottom button*/}
                <button className="mt-80 rounded-full bg-gradient-to-r from-violet-700 to-cyan-600 px-10 py-2">
                    <p className="font-bold text-white">Student</p>
                </button>
            </div>

        </aside>
        </main>
    );
  }

export default SideBar;