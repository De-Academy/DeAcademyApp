'use client';

import { useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/sideBar";
import TextArea from "../components/TextArea";
import { TextInput } from "../components/textInput";
import Section from "../components/Section";


export default function Page() {
    const [active, setActive] = useState<'informations' | 'upload'>('informations')

    const [SectionCount, setSectionCount] = useState(1);

    const handleAddSection = () => {
        setSectionCount(prevCount => prevCount + 1);
    };

    const handleRemoveSection = () => {
        setSectionCount(prevCount => prevCount - 1);
    };

    return (
        <div className="flex flex-col h-screen">
            <SideBar/>
            <div className=" ml-72">
                <div className="flex gap-24 justify-start p-4 text-[#1B1B1B]">
                    <Button color={active === 'informations' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('informations')} className="hover:bg-[#1B1B1B] hover:text-white">Informations</Button>
                    <Button color={active === 'upload' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('upload')} className="hover:bg-[#1B1B1B] hover:text-white"> Upload</Button>
                </div>
            <main className="flex-1">
            {active === 'informations' && (
                <div className="flex justify-center items-center h-full">
                    <div className="ml-10 w-3/4">
                        <div className="grid grid-cols-2 gap-4 m-2">
                            <div className="border-gray-300  text-purple-600 border-2 rounded-lg">
                            <TextInput placeholder={"Title"} label={"label"} />
                            </div>
                            <div className="flex flex-col border-gray-300  border-2 rounded-lg">
                                <TextInput placeholder={"Value"} label={"Value"} />
                                <TextInput placeholder={"Supply"} label={"Supply"} />
                            </div>
                        </div>
                        <div>
                            <TextArea />
                        </div>
                    </div>
                </div>
            )}
            {active === 'upload' && (
                <section className="w-full flex justify-center">
                    <div className="flex w-3/4 flex-col justify-center items-center h-full ml-36">
                    <div className="w-full">
                                    {[...Array(SectionCount)].map((_, index) => (
                                        <Section
                                            key={index}
                                            number={index + 1}
                                            onRemove={() => handleRemoveSection()}
                                        />
                                    ))}
                                </div>
                            <button
                                className="w-full flex justify-center items-center border-gray-300  border-2 rounded-lg p-4  mb-3 h-6"
                                onClick={handleAddSection}>
                                + Section
                            </button>
                    </div >
                    
                </section>
             
            )}
            <Button className="text-white font-bold ml-4 mt-20">Upload</Button>

            </main>
            </div>
           
        </div>
    );
}
