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

    return (
        <div className="flex flex-col h-screen">
            <SideBar/>
            <div className="flex gap-24 justify-start ml-80 p-4">
            <Button color={active === 'informations' ? 'bg-blue-500' : 'bg-white'} onClick={() => setActive('informations')} className="hover:bg-blue-500">Informations</Button>
            <Button color={active === 'upload' ? 'bg-blue-500' : 'bg-white'} onClick={() => setActive('upload')} className="hover:bg-blue-500"> Upload</Button>
            </div>
            <main className="flex-1">
            {active === 'informations' && (
                <div className="flex justify-center items-center h-full">
                    <div className="ml-10 w-1/2">
                        <div className="grid grid-cols-2 gap-4 m-2">
                            <div className="border-black border-2 rounded-lg">
                            <TextInput placeholder={"Title"} label={"label"} />
                            </div>
                            <div className="flex flex-col border-black border-2 rounded-lg">
                                <TextInput placeholder={"Value"} label={"Value"} />
                                <TextInput placeholder={"Supply"} label={"Supply"} />
                            </div>
                        </div>
                        <div>
                            <TextArea />
                        </div>
                        <Button>teste</Button>
                    </div>
                </div>
            )}
            {active === 'upload' && (
                <main >
                    <div className="flex justify-center items-center h-full ml-36">
                            <div className="">
                                {[...Array(SectionCount)].map((_, index) => (
                                    <Section key={index} number={index + 1} />
                                ))}
                            </div>
                    </div >
                    <div className="">
                        <button
                            className="w-full flex justify-center items-center border-black border-2 rounded-lg p-4  mb-3 h-6"
                            onClick={handleAddSection}>
                            + Section
                        </button>
                    </div>
                </main>
             
            )}


            </main>
        </div>
    );
}
