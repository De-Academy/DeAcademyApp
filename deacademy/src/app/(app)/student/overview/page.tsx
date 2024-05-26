
export default function Page() {
    return (
        <section>
            <div className="pt-10 ml-16">
                <h1 className="text-3xl m-5 font-bold">Overview</h1>
                <p className="text-1xl m-5">Track your progress</p>
            </div>

            <div className="mb-10 ml-20  w-4/5 bg-slate-300 rounded-2xl">
                <div className=" flex flex-row">
                    <img src="/images/student level.png" alt="Student Level" className="m-10 h-40 w-48" />
                    <img src="/images/Areas.png" alt="" className="m-10 h-40 w-[35rem]"/>
                </div>
                    
                    <hr className="bg-gray-600 w-11/12 h-1 rounded-2xl ml-9"/>

                    <div className="flex flex-row mt-3 justify-center pb-7">
                        <div className="bg-white h-52 w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3">Degrees</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                        </div>
                        <div className="bg-white h-52 w-80 m-3 mx-16 rounded-2xl shadow-xl hover:-translate-y-1 flex flex-col items-center">
                            <p className="text-center m-3">Transactions</p>
                            <hr className="bg-gray-600 w-3/4 h-1 rounded-2xl"/>
                        </div>
                    </div>
                    
                
            </div>

            <div className="bg-gray-100 h-24">

            </div>
            
        </section>
    );
}