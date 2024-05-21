import SideBar from "../../components/sideBar";


export default function Page() {
    return (
        <main className="bg-[#F4F6F9] h-lvh">
            <div className="flex justify-center align-middle self-center h-screen">
                <div className="flex justify-center align-middle flex-col">
                    <p className="text-gray-400 text-5xl">No courses yet!</p>
                    <img src="/images/surprised.png" alt="" className="h-20 w-20 flex justify-center align-middle self-center mt-10 opacity-45"/>
                </div>
                
            </div>
        </main>
    );
}