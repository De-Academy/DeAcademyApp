"use client";

import { useState } from "react";
import CourseCard from "../../components/CourseCard";


export default function Page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const courses = [
        {id: 1, image: "/images/python_image.png", price: "0.10", title:"Python Course", desc: "You will learn all you need to become a python dev!"},
        {id: 2, image: "/images/solidity.png", price: "0.12", title:"Solidity Course", desc: "Solidity is the most used language for creating smart contracts, lets learn!"},
        {id: 3, image: "/images/bitcoin.png", price: "0.05", title:"Bitcoin Course", desc: "Bitcoin is the digital gold, learn more about it."},
        {id: 4, image: "/images/ethereum.jpg", price: "0.08", title:"Ethereum Course", desc: "Ethereum is a well known blockchain, i will explain everything about it."},
    ]

    return (
        <section>
            

            <div className="flex ">
                <div className="flex flex-col">
                    <button id="toggleCategories"  onClick={toggleMenu} className="bg-purple-600 rounded-full h-10 mx-10 mt-10 mb-2 text-gray-50 px-5 hover:bg-purple-700 font-bold hover:-translate-y-1">Categories</button>
                
                    {isMenuOpen && (
                        <div id="categoriesMenu" className=" mx-auto top-[90px] left-10 mt-0 bg-white shadow-md rounded-2xl p-3 w-30">
                            <ul>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Solidity</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Blockchain</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Bitcoin</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Ethereum</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                
                <div className="m-10">  
                    <input type="search" className="text-xl ps-10 h-10 rounded-xl" placeholder="Search here..."/>
                </div>
            </div>

            <div className="mt-4  h-full w-98 top-4 left-80 flex justify-center ">
                <div className="container p-4">
                    <div className="flex flex-wrap -mx-2">
                        {courses.map((course) => (
                            <CourseCard 
                                id={course.id}
                                image={course.image}
                                title={course.title}
                                desc={course.desc}
                                price={course.price} />
                        ))}
                    </div>
                </div>
            </div>         
        </section>
    );
}