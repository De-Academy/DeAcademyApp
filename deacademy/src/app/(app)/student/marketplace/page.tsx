"use client";

import { useState } from "react";
import { LineGraph } from "../../components/LineGraph";
import { SearchBar } from "../../components/Searchbar";


export default function Page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const images = [
        {image:"/images/python_image.png", price: "0.10", title:"Python Course", desc: "You will learn all you need to become a python dev!"},
        {image:"/images/solidity.png", price: "0.12", title:"Solidity Course", desc: "Solidity is the most used language for creating smart contracts, lets learn!"},
        {image:"/images/bitcoin.png", price: "0.05", title:"Bitcoin Course", desc: "Bitcoin is the digital gold, learn more about it."},
        {image:"/images/ethereum.jpg", price: "0.08", title:"Ethereum Course", desc: "Ethereum is a well known blockchain, i will explain everything about it."},
    ]

    return (
        <main className="bg-[#F4F6F9] h-lvh">

            {/* Texto de cima */}
            <div className="flex justify-start">
                <div className="flex flex-col">
                    <button id="toggleCategories"  onClick={toggleMenu} className="bg-purple-600 rounded-full h-10 mx-10 mt-10 mb-2 text-gray-50 px-5 hover:bg-purple-700 font-bold hover:-translate-y-1">Categories</button>
                
                    {isMenuOpen && (
                        <div id="categoriesMenu" className=" mx-auto top-[90px] left-10 mt-0 bg-white shadow-md rounded-2xl p-3 w-30">
                            <ul>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Solidity</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Blockchain</a></li>
                                <li className="py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Bitcoin</a></li>
                                <li className=" py-1 hover:bg-slate-300 rounded-xl p-2"><a href="#" className="text-black">Ethereum</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="m-10">
                <SearchBar/>
                </div>
            </div>

            {/* courses */}
            <div className="m-flex flex-wrap">
                {images.map((src, index) => (
                    <div key={index} className="w-10/12 p-2 flex flex-row">
                    <div className="bg-white p-4 w-full rounded shadow-md h-60 cursor-pointer transition duration-300 hover:bg-sky-600 hover:translate-y-2 hover:text-gray-200 drop-shadow-xl hover:drop-shadow-2xl flex">
                        <div className="flex flex-col justify-between w-1/2 pr-2">
                        <div>
                            <img src={src.image} alt={`Imagem ${index + 1}`} className="w-72 h-32 rounded"/>
                            <p className="mt-2">{src.title}</p>
                            <p className="text-[14px]">{src.desc}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2">{src.price}</p>
                            <img src="/images/solana.png" alt="" className="h-4 w-4"/>
                        </div>
                        </div>
                        <div className="w-1/2 h-full">
                        <LineGraph/>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </main>
    );
}