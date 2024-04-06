
const TextArea = () => {
    return (
    <main>
        <form className="border-2 border-black p-2 rounded-lg m-2 ">
            <label className="block mb-2 text-sm font-medium text-purple-800">Description</label>
            <textarea id="message" className="block h-28 p-2.5 w-full overflow-y-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your Description"></textarea>
        </form>
        
    </main>
    )

};

export default TextArea;