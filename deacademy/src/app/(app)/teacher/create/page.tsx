'use client';

import { useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/sideBar";
import TextArea from "../components/TextArea";
import { TextInput } from "../components/textInput";
import Lecture from "../components/Lecture";


export default function Page() {
    const [active, setActive] = useState<'informations' | 'upload'>('informations')


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
                 <div className="flex justify-center items-center h-full ml-36">
                <Lecture></Lecture>
                </div>  
                
            )}
            </main>
        </div>
    );
}
