import Button from "../../components/Button";
import UploadButton from "./UploadButton";
import { TextInput } from "./textInput";

const Lecture = () => {
    return (
        <main className="">
            <div className="flex">
                    <div className="flex justify-center items-center">
                        <p>Lecture 1</p>
                        <TextInput label="" placeholder=""></TextInput>
                    </div>
                    <div className="flex gap-10 ml-20">
                        <Button>Content</Button>
                        <Button >Description</Button>
                    </div>
            </div>
            <div className="flex justify-center mt-10">   
                <UploadButton onVideoSelect={(file: File): void => {
                    throw new Error("Function not implemented.");
                }}></UploadButton>
            </div>
        </main>
    );
}

export default Lecture;