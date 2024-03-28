'use client';

import { useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/sideBar";
import TextArea from "../components/TextArea";
import TextInput from "../components/textInput";

export default function Page() {
    const [active, setActive] = useState<'informations' | 'upload'>('informations')




    return (
        <div className="flex flex-col h-screen">
            <SideBar/>
            <div className="flex gap-24 justify-start ml-80 p-4">
                <Button onClick={() => setActive('informations')} className="bg-blue-800">Informations</Button>
                <Button onClick={() => setActive('upload')}>Upload</Button>
            </div>
            <main className="flex-1">
            {active === 'informations' && (
                <div className="flex justify-center items-center h-full">
                    <div className="ml-10 w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput placeholder={"Title"} label={"label"} />
                            <div className="flex flex-col">
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
                    <h1 className="m-96"> UPLOAD </h1>
            )}
            </main>
        </div>
    );
}
