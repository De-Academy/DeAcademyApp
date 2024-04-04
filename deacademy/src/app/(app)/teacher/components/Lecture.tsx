import { useState } from "react";
import Button from "../../components/Button";
import UploadButton from "./UploadButton";
import { TextInput } from "./textInput";
import TextArea from "./TextArea";


interface LectureProps {
    number: number
}


const Lecture = ({number}: LectureProps) => {
    const [active, setActive] = useState<'content' | 'description'>('content')


    return (
        <main className="border-black border-2 rounded-lg m-2 p-4">
            <div className="lg:flex justify-center">
                    <div className="flex justify-center items-center">
                        <p>Lecture {number}</p>
                        <TextInput label="" placeholder="Title"></TextInput>
                    </div>  
                    <div className="flex gap-10">
                        <Button color={active === 'content' ? 'bg-blue-500' : 'bg-white'} onClick={() => setActive('content')} className="hover:bg-blue-500 h-full w-full">Content</Button>
                        <Button color={active === 'description' ? 'bg-blue-500' : 'bg-white'}  onClick={() => setActive('description')} className="hover:bg-blue-500 h-full w-full">Description</Button>
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