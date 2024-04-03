import { ReactNode } from "react";


interface SideBarElementProps {
    elementIcon: ReactNode;
    redirectionLink: string;
    elementTitle: string;
}


const SideBarElement = ({elementIcon, redirectionLink, elementTitle} : SideBarElementProps) => {
    return(
        <li>
            <div className="flex flex-row items-center my-8">
                <a href={redirectionLink}>
                    {elementIcon}
                </a>
                <a href={redirectionLink}>
                    <h2 className="font-semibold text-2xl text-black mx-2">{elementTitle}</h2>
                    </a> 
            </div>
        </li>
)
}

export default SideBarElement;