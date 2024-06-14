'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button";
import SideBar from "../../components/sideBar";
import TextArea from "../components/TextArea";
import { TextInput } from "../components/textInput";
import Section from "../components/Section";
import { useWallet } from "@solana/wallet-adapter-react";

interface LectureState {
    id: number;
    title: string;
    description: string;
}

interface SectionState {
    id: number;
    title: string;
    lectures: LectureState[];
}

export default function Page() {
    const [active, setActive] = useState<'informations' | 'upload'>('informations');
    const [sections, setSections] = useState<SectionState[]>([{ id: 1, title: "", lectures: [{ id: 1, title: "", description: "" }] }]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [supply, setSupply] = useState('');

    const wallet = useWallet();
    const userWallet = wallet.publicKey?.toBase58();

    const handleAddSection = () => {
        const newSection = { id: sections.length + 1, title: "", lectures: [{ id: 1, title: "", description: "" }] };
        setSections(prevSections => [...prevSections, newSection]);
    };

    const handleRemoveSection = (id: number) => {
        setSections(prevSections => prevSections.filter(section => section.id !== id));
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSupplyChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSupply(event.target.value);
    };

    const handleSectionTitleChange = (id: number, title: string) => {
        setSections(prevSections => prevSections.map(section => 
            section.id === id ? { ...section, title } : section
        ));
    };

    const handleLectureTitleChange = (sectionId: number, lectureId: number, title: string) => {
        setSections(prevSections => prevSections.map(section => 
            section.id === sectionId ? {
                ...section,
                lectures: section.lectures.map(lecture => 
                    lecture.id === lectureId ? { ...lecture, title } : lecture
                )
            } : section
        ));
    };

    const handleLectureDescriptionChange = (sectionId: number, lectureId: number, description: string) => {
        setSections(prevSections => prevSections.map(section => 
            section.id === sectionId ? {
                ...section,
                lectures: section.lectures.map(lecture => 
                    lecture.id === lectureId ? { ...lecture, description } : lecture
                )
            } : section
        ));
    };

    const handleAddLecture = (sectionId: number) => {
        setSections(prevSections => prevSections.map(section => 
            section.id === sectionId ? {
                ...section,
                lectures: [...section.lectures, { id: section.lectures.length + 1, title: "", description: "" }]
            } : section
        ));
    };

    const handleRemoveLecture = (sectionId: number, lectureId: number) => {
        setSections(prevSections => prevSections.map(section => 
            section.id === sectionId ? {
                ...section,
                lectures: section.lectures.filter(lecture => lecture.id !== lectureId)
            } : section
        ));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
        
        try {
            // Transform lectures into a flat array of objects
            const lectures: { title: string; description: string }[] = [];
            sections.forEach(section => {
                section.lectures.forEach(lecture => {
                    lectures.push({
                        title: lecture.title,
                        description: lecture.description
                    });
                });
            });
    
            const data = {
                title,
                description,
                value,
                supply,
                userWallet,
                lectures,
                sections  // Now lectures is a flat array of objects
            };
    
            const response = await fetch('/api/course-upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error('Failed to upload course');
            }
    
            console.log('Course uploaded successfully');
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className="flex flex-col h-screen">
            <SideBar />
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
                                    <div className="border-gray-300 text-purple-600 border-2 rounded-lg">
                                        <TextInput placeholder={"Title"} value={title} label={"Title"} onChange={handleTitleChange} />
                                    </div>
                                    <div className="flex flex-col border-gray-300 border-2 rounded-lg">
                                        <TextInput placeholder={"Value"} value={value} label={"Value"} onChange={handleValueChange} />
                                        <TextInput placeholder={"Supply"} value={supply} label={"Supply"} onChange={handleSupplyChange} />
                                    </div>
                                </div>
                                <div>
                                    <TextArea value={description} onChange={handleDescriptionChange} />
                                </div>
                            </div>
                        </div>
                    )}
                    {active === 'upload' && (
                        <section className="w-full flex justify-center">
                            <div className="flex w-3/4 flex-col justify-center items-center h-full">
                                <div className="w-full">
                                    {sections.map(section => (
                                        <Section
                                            key={section.id}
                                            sectionTitle={section.title}
                                            handleSectionTitleChange={(event) => handleSectionTitleChange(section.id, event.target.value)}
                                            number={section.id}
                                            onRemove={() => handleRemoveSection(section.id)}
                                            lectures={section.lectures}
                                            handleLectureTitleChange={handleLectureTitleChange}
                                            handleLectureDescriptionChange={handleLectureDescriptionChange}
                                            handleAddLecture={handleAddLecture}
                                            handleRemoveLecture={handleRemoveLecture}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="w-full flex justify-center items-center border-gray-300 border-2 rounded-lg p-4 mb-3 h-6"
                                    onClick={handleAddSection}>
                                    + Section
                                </button>
                            </div>
                        </section>
                    )}
                    <Button type="submit" className="text-white font-bold ml-4 mt-20">Upload</Button>
                </form>
            </div>
        </div>
    );
}
