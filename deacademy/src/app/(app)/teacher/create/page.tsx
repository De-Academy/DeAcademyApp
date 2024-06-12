'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/sideBar";
import TextArea from "../components/TextArea";
import { TextInput } from "../components/textInput";
import Section from "../components/Section";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSolana } from "../../context/SolanaContext";

export default function Page() {
    const [active, setActive] = useState<'informations' | 'upload'>('informations')
    const [SectionCount, setSectionCount] = useState(1);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [supply, setSupply] = useState('');
    const wallet = useWallet();
    const userWallet = wallet.publicKey?.toBase58()


    console.log("essa é auserwallet",userWallet)

    const handleAddSection = () => {
        setSectionCount(prevCount => prevCount + 1);
    };

    const handleRemoveSection = () => {
        setSectionCount(prevCount => prevCount - 1);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSupplyChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSupply(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('botao clicado1');
        try {
            fetch('/api/course-upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description, value, supply, userWallet })
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <SideBar/>
            <div className="">
                <div className="flex gap-24 justify-start p-4 text-[#1B1B1B]">
                    <Button color={active === 'informations' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('informations')} className="hover:bg-[#1B1B1B] hover:text-white">Informations</Button>
                    <Button color={active === 'upload' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('upload')} className="hover:bg-[#1B1B1B] hover:text-white"> Upload</Button>
                </div>
                <form onSubmit={handleSubmit} className="flex-1">
                    {active === 'informations' && (
                        <div className="flex justify-center items-center h-full">
                            <div className="w-3/4">
                                <div className="grid grid-cols-2 gap-4 m-2">
                                    <div className="border-gray-300  text-purple-600 border-2 rounded-lg">
                                        <TextInput placeholder={"Title"} label={"label"}  onChange={handleTitleChange}/>
                                    </div>
                                    <div className="flex flex-col border-gray-300  border-2 rounded-lg">
                                        <TextInput placeholder={"Value"} label={"Value"} onChange={handleValueChange}/>
                                        <TextInput placeholder={"Supply"} label={"Supply"} onChange={handleSupplyChange} />
                                    </div>
                                </div>
                                <div>
                                    <TextArea onChange={handleDescriptionChange}/>
                                </div>
                            </div>
                        </div>
                    )}
                    {active === 'upload' && (
                        <section className="w-full flex justify-center">
                            <div className="flex w-3/4 flex-col justify-center items-center h-full">
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
                    <Button type="submit" className="text-white font-bold ml-4 mt-20">Upload</Button>
                </form>
            </div>
        </div>
    );
}
