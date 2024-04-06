"use client";

import SideBar from "./components/sideBar"
import { SolanaProvider } from "./context/SolanaContext";
import ConnectWallet from "@/app/(app)/components/ConnectWallet";
import ModalConnect from "@/app/(app)/components/ModalConnect";


const Layout = ({children} : { children: React.ReactNode}) => {
    return (
        <>
        <SolanaProvider>
        
        <div className="flex justify-end m-5">
        <ConnectWallet />
        <ModalConnect />
        </div>

        <SideBar />
        {children}

        </SolanaProvider>
        </>
    )
}

export default Layout;