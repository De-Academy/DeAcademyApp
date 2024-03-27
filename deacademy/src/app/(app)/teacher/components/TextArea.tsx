
const TextArea = () => {
    return (
    <main>
        <div className="w-full border-2 border-black p-2 rounded-sm">
            <label className="block mb-2 text-sm font-medium text-purple-800">Description</label>
            <textarea id="message" className="block h-28 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description"></textarea>
        </div>
    </main>
    )

};

export default TextArea;