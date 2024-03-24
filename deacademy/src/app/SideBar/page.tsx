
import logo from "../assets/logo2.png"
import Image from "next/image";

export default function Page() {
    return (
        <aside className="h-screen w-52 fixed top-0 left-0 justify-center">
            <div className="bg-gradient-to-b from-violet-700 to-cyan-400 h-full flex flex-col">
                <a href="/"  className="rounded-full h-24 w-24 flex self-center py-5">
                            <Image src={logo} alt="DeAcademyIcon" className="rounded-full h-24 w-24"/>
                </a>

                <h3 className="py-6 flex self-center font-bold text-white text-2xl">DeAcademy</h3>

                <ul>
                    <li>

                    </li>
                </ul>
            </div>

        </aside>
    );
  }