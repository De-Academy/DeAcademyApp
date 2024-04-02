import WalletConnectButton from "./student/Components/WalletConnectButton"
import SideBar from "./components/sideBar"

const Layout = ({children} : { children: React.ReactNode}) => {
    return (
        <>
        <SideBar />
        <WalletConnectButton />
        {children}
        </>
    )
}

export default Layout;