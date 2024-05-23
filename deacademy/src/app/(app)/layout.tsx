"use client";

import SideBar from "./components/sideBar"
import { SolanaProvider } from "./context/SolanaContext";
import ConnectWallet from "@/app/(app)/components/ConnectWallet";
import ModalConnect from "@/app/(app)/components/ModalConnect";


const Layout = ({children} : { children: React.ReactNode}) => {
    return (
        <>
        <SolanaProvider>
        <SideBar/>
        <div className="bg-[#F6F6F6]">
            <div className="absolute top-0 right-0 flex justify-end">
                <ConnectWallet />
                <ModalConnect />
            </div>
            <div className="ml-72">
                {children}
            </div>
        </div>

        </SolanaProvider>
        </>
    )
}

export default Layout;