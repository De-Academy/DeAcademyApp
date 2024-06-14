import { ChangeEvent } from "react";
import { TextInput } from "./textInput";
import Lecture from "./Lecture";

interface LectureProps {
    id: number;
    title: string;
    description: string;
}

interface SectionProps {
    sectionTitle: string;
    handleSectionTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    number: number;
    onRemove: () => void;
    lectures: LectureProps[];
    handleLectureTitleChange: (sectionId: number, lectureId: number, title: string) => void;
    handleLectureDescriptionChange: (sectionId: number, lectureId: number, description: string) => void;
    handleAddLecture: (sectionId: number) => void;
    handleRemoveLecture: (sectionId: number, lectureId: number) => void;
}

const Section = ({
    handleSectionTitleChange,
    sectionTitle,
    number,
    onRemove,
    lectures,
    handleLectureTitleChange,
    handleLectureDescriptionChange,
    handleAddLecture,
    handleRemoveLecture
}: SectionProps) => {

    return (
        <section className="border-gray-300 border-2 mb-4 rounded-lg pr-10 pl-10">
            <div className="flex justify-between mb-4 mt-4 text-purple-800 font-bold">
                <div className="flex justify-start items-center">
                    <p>Section {number}</p>
                    <TextInput onChange={handleSectionTitleChange} value={sectionTitle} label="" placeholder="Title" />
                </div>
                <div>
                    <button onClick={onRemove} className="hover:bg-[#1B1B1B] rounded-full p-3 mt-2 mb-2"> X </button>
                </div>
            </div>
            <div>
                {lectures.map(lecture => (
                    <Lecture
                        key={lecture.id}
                        number={lecture.id}
                        title={lecture.title}
                        description={lecture.description}
                        onTitleChange={(event) => handleLectureTitleChange(number, lecture.id, event.target.value)}
                        onDescriptionChange={(event) => handleLectureDescriptionChange(number, lecture.id, event.target.value)}
                        onRemove={() => handleRemoveLecture(number, lecture.id)}
                    />
                ))}
            </div>
            <button
                type="button"
                className="w-full flex justify-center items-center border-gray-300 border-2 rounded-lg p-4 mt-5 mb-3 h-6"
                onClick={() => handleAddLecture(number)}
            >
                + Lecture
            </button>
        </section>
    );
};

export default Section;