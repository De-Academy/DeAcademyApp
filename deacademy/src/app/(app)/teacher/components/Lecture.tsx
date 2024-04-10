import { useState } from "react";
import Button from "../../components/Button";
import UploadButton from "./UploadButton";
import { TextInput } from "./textInput";
import TextArea from "./TextArea";


interface LectureProps {
    number: number;
    onRemove: () => void;
}


const Lecture = ({number, onRemove}: LectureProps) => {
    const [active, setActive] = useState<'content' | 'description'>('content')




    return (
        <main className="border-gray-300 border-2 rounded-lg m-2 p-4">
            <div className="lg:flex justify-center ">
                    <div className="flex justify-center items-center  text-purple-800 font-bold">
                        <p>Lecture {number}</p>
                        <div className="w-4/6">
                        <TextInput label="" placeholder="Title"></TextInput>
                        </div>
                    </div>  
                    <div className="flex gap-6 text-[#1B1B1B] items-center w-1/2">
                        <Button color={active === 'content' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('content')} className="hover:bg-[#1B1B1B] hover:text-white h-1/2 w-1/2">Content</Button>
                        <Button color={active === 'description' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'}  onClick={() => setActive('description')} className="hover:bg-[#1B1B1B] hover:text-white h-1/2 w-1/2">Description</Button>    
                    </div>
                    <div>
                        <button onClick={onRemove} className="hover:bg-[#1B1B1B] rounded-full p-3 ml-2 mt-2"> X </button>
                    </div>
            </div>
            {active === 'content' &&(
            <div className="flex justify-center m-16">   
                <UploadButton onVideoSelect={(file: File): void => {
                    throw new Error("Function not implemented.");
                }}></UploadButton> 
            <p className="flex items-center">Add Media</p>
            </div>)} 
            {active == 'description' && (
                <TextArea ></TextArea>
            )}

        </main>
    );
}

export default Lecture;