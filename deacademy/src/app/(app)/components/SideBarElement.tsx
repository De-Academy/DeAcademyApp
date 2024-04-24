import { ReactNode } from "react";


interface SideBarElementProps {
    elementIcon: ReactNode[];
    redirectionLink: string;
    elementTitle: string;
}


const SideBarElement = ({elementIcon, redirectionLink, elementTitle} : SideBarElementProps) => {
    return(
        <li>
            <button className="hover:bg-[#1B1B1B] w-full rounded-full p-3 text-black hover:text-white my-5">
            <div className="flex flex-row items-center ">
                <a href={redirectionLink} className="h-12 w-12 ml-2">
                    <div>
                    {elementIcon[0]} 
                    </div>
                    <div className="hover">
                        {elementIcon[1]}
                    </div>
                </a>
                <a href={redirectionLink}>
                    <h2 className="font-semibold text-2xl ml-2">{elementTitle}</h2>
                    </a> 
            </div>
            </button>
        </li>
)
}

export default SideBarElement;