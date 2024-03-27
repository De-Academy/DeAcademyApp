import SideBar from "../../components/sideBar";
import TextArea from "../Components/TextArea";
import WalletConnectButton from "../Components/WalletConnectButton";

export default function Page() {
    return (
        <main> 
        <SideBar/>
        <WalletConnectButton/>
        <TextArea/>
        </main>
    );
}