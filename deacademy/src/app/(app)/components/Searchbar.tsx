
export const SearchBar = () => {
    return (
        <div className="relative w-full max-w-md">
            <input type="text" className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 shadow-sm" placeholder="Search..."/>
            <div className="absolute left-3 top-2.5 text-gray-400">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div>
        </div>
    )
}