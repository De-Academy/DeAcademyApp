const textInput = ({label, placeholder}) => {
    return (
        <main>
            <div className="p-2 border-2 border-black rounded-lg m-2">
                <label className="block mb-2 text-sm font-medium text-purple-800 dark:text-white">{ label }</label>
                    <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder={placeholder} 
                    required />
            </div>    
        </main>
    )
};

export default textInput;