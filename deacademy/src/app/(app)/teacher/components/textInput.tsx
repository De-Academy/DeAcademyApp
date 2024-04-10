export type TextInputProps = {
    label : string
    placeholder : string
}


export const TextInput = ({label, placeholder} : TextInputProps) => {
    return (
        <main>
            <div className="border-black rounded-lg m-2">
                <label className="block mb-2 text-sm font-medium text-purple-800">{ label }</label>
                    <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                    placeholder={placeholder} 
                    required />
            </div>    
        </main>
    )
};

