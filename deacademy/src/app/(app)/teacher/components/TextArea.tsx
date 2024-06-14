
export type TextAreaProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}


const TextArea = ({onChange, value} : TextAreaProps) => {
    return (
    <main>
        <div className="border-2 border-gray-300  p-2 rounded-lg m-2 ">
            <label className="block mb-2 text-sm font-medium text-purple-800">Description</label>
            <input value={value} onChange={onChange} id="message" className="block h-28 p-2.5 w-full overflow-y-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your Description"></input>
        </div>
        
    </main>
    )

};

export default TextArea;