
export default function Page() {
    return (
        <section>
            <div className="pt-10 ml-16">
                <h1 className="text-3xl m-5 font-bold">Overview</h1>
                <p className="text-1xl m-5">Track your progress</p>
            </div>

            <div className="mb-10 ml-20  w-4/5 bg-slate-300 rounded-2xl">
                <div className=" flex flex-row justify-center">
                    <img src="/images/student level.png" alt="Student Level" className="m-10 h-40 w-44 justify-center" />
                    <img src="/images/Areas.png" alt="" className="m-10 h-40 w-[35rem]"/>
                </div>
                    
                    <hr className="bg-gray-600 w-11/12 h-1 rounded-2xl ml-9"/>

                    <div className="flex flex-row mt-3 justify-center pb-7">
                        <div className="bg-white h-52 w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3 text-2xl">Watch Time</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                            <p className="mt-8 text-2xl">Total watch time: 5h 32m</p>
                            <p className="mt-3  text-2xl">Courses watched: 2</p>
                        </div>
                        <div className="bg-white h-52 w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3 text-2xl">Achievements</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                            <div className="flex flex-row"> 
                                <img src="/icons/achievement1.png" className="mt-3 mx-3 justify-center hover:-translate-y-1" />
                                <img src="/icons/achievement2.png" className="mt-3 mx-3 justify-center hover:-translate-y-1" />
                            </div>
                           
                        </div>
                    </div>

                    <div className="flex flex-row mt-3 justify-center pb-7">
                        <div className="bg-white h-52 w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3 text-2xl">Degrees</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                            <div className="my-2 border-2 border-gray-600 p-2 px-5 rounded-xl">
                                 <p className="text-2xl">Python Basic</p>
                                <p className="text-1xl">Token: 5h2sPLm11x9De</p>
                            </div>
                           
                        </div>
                        <div className="bg-white h-72  w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3 text-2xl">Transactions</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                            <div className="m-3 flex flex-row border-2 border-gray-900 p-2 px-5 rounded-xl">
                                <div>
                                    <p className="text-2xl">Python Basic</p>
                                    <p>By: Marketplace</p>
                                </div>
                                <div className="ml-4 flex flex-row">
                                    <p className="text-2xl text-green-500">0.10</p>
                                    <img src="/images/solana.png" className="h-5 w-5 mt-[7px] ml-2" />
                                </div>
                            </div>
                            <div className="m-3 flex flex-row border-2 border-gray-900 p-2 px-5 rounded-xl">
                                <div>
                                    <p className="text-2xl">Python Basic</p>
                                    <p>By: Teacher</p>
                                </div>
                                <div className="ml-4 flex flex-row">
                                    <p className="text-2xl text-red-500">0.14</p>
                                    <img src="/images/solana.png" className="h-5 w-5 mt-[7px] ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
            </div>

            <div className="bg-gray-100 h-24">

            </div>
            
        </section>
    );
}