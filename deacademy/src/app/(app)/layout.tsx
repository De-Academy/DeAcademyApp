import WalletConnectButton from "./student/Components/WalletConnectButton"
import SideBar from "./components/sideBar"
import WalletContext from "./contexts/WalletContext"

const Layout = ({children} : { children: React.ReactNode}) => {
    return (
        <>
        <WalletContext.Provider value={}>
        <SideBar />
        <WalletConnectButton />
        {children}
        </WalletContext.Provider>
        </>
    )
}

export default Layout;