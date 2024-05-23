"use client";

import { useState } from "react";


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
        <main className="bg-[#F4F6F9] h-lvh">
            
            /* Texto de cima */
            <div className="fixed top-4 left-80 flex justify-start z-50">
                <div className="flex flex-col">
                    <button id="toggleCategories"  onClick={toggleMenu} className="z-50 bg-purple-600 rounded-full h-10 mx-10 mt-10 mb-2 text-gray-50 px-5 hover:bg-purple-700 font-bold hover:-translate-y-1">Categories</button>
                
                    {isMenuOpen && (
                        <div id="categoriesMenu" className="absolute mx-auto top-[90px] left-10 mt-0 bg-white shadow-md rounded-2xl p-3 w-30 z-50">
                            <ul>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Solidity</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Blockchain</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Bitcoin</a></li>
                                <li className="z-50 py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Ethereum</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                
                
                <div className="m-10 h-10 z-0">
                    <div className="absolute inset-y-12 start-60 ps-3 pointer-events-none mt-0.5">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    
                    <input type="search" className="text-xl ps-10 h-10 rounded-xl" placeholder="Search here..."/>
                </div>
            </div>

            /* courses */
            <div className=" mt-28 h-full w-98 fixed top-4 left-80 flex justify-start bg-[#F4F6F9]">
                <div className="container mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        {images.map((src, index) => (
                            <div key={index} className="w-80 p-2 mx-2">
                                <div className="bg-white p-4 rounded shadow-md h-60 cursor-pointer hover:-translate-y-1 drop-shadow-xl hover:drop-shadow-2xl flex justify-start place-items-start flex-col">
                                    <img src={src.image} alt={`Imagem ${index + 1}`} className="w-72 h-32 rounded"/>
                                    <p>{src.title}</p>
                                    <p className="text-[14px]">{src.desc}</p>
                                    <div className="flex flex-row place-self-end justify-self-end h-5 w-10 align-middle items-center mx-4">
                                        <p className="mx-2">{src.price}</p>
                                        <img src="/images/solana.png" alt="" className="h-4 w-4 "/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </main>
    );
}