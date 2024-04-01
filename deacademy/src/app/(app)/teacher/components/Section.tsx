import { useState } from "react";
import Lecture from "./Lecture"
import { TextInput } from "./textInput";

interface SectionProps {
    number: number
}


const Section = ({number} : SectionProps) => {
    const [lectureCount, setLectureCount] = useState(1);

    const handleAddLecture = () => {
        setLectureCount(prevCount => prevCount + 1);
    };


    return (
        <main className="border-black border-2 mb-4 rounded-lg pr-10 pl-10">
            <div className="flex justify-start items-center mb-4 mt-4">
                        <p>Section {number}</p>
                        <TextInput label="" placeholder=""></TextInput>
            </div>
            <div>
                {[...Array(lectureCount)].map((_, index) => (
                    <Lecture key={index} number={index+1}/>
                ))}
            </div>
            <button 
                className="w-full flex justify-center items-center border-black border-2 rounded-lg p-4 mt-5 mb-3 h-6"
                onClick={handleAddLecture}
            >
                + Lecture
            </button>
        </main>
    )
}

export default Section;