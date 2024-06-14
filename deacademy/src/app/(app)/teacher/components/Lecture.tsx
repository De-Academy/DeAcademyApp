import { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import UploadButton from "./UploadButton";
import { TextInput } from "./textInput";
import TextArea from "./TextArea";

interface LectureProps {
    number: number;
    title: string;
    description: string;
    onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onRemove: () => void;
}

const Lecture = ({ number, title, description, onTitleChange, onDescriptionChange, onRemove }: LectureProps) => {
    const [active, setActive] = useState<'content' | 'description'>('content');

    return (
        <main className="border-gray-300 border-2 rounded-lg m-2 p-4">
            <div className="lg:flex justify-between ">
                <div className="flex justify-start items-center text-purple-800 font-bold">
                    <p>Lecture {number}</p>
                    <TextInput value={title} onChange={onTitleChange} label="" placeholder="Title"></TextInput>
                </div>
                <div className="flex gap-6 text-[#1B1B1B] justify-end items-center ">
                    <Button color={active === 'content' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('content')} className="hover:bg-[#1B1B1B] hover:text-white h-1/2 w-1/3">Content</Button>
                    <Button color={active === 'description' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('description')} className="hover:bg-[#1B1B1B] hover:text-white h-1/2 w-1/3">Description</Button>
                    <button onClick={onRemove} className="hover:bg-[#1B1B1B] rounded-full p-3 m-2"> X </button>
                </div>
            </div>
            {active === 'content' && (
                <div className="flex justify-center m-16">
                    <UploadButton onVideoSelect={(file: File): void => {
                        throw new Error("Function not implemented.");
                    }}></UploadButton>
                    <p className="flex items-center">Add Media</p>
                </div>
            )}
            {active === 'description' && (
                <TextArea value={description} onChange={onDescriptionChange}/>
            )}
        </main>
    );
}

export default Lecture;
