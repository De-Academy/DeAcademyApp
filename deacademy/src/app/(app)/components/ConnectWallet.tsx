import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { truncateWallet } from "@/utils/truncate";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSolana } from "@/app/(app)/context/SolanaContext";
import { cn } from "@/utils/cn";
import Button from "./Button";
import ModalConnect from "./ModalConnect";

interface Props {
  className?: string;
}

const ConnectWallet: React.FC<Props> = ({ className }) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const { setOpenConnect } = useSolana();
  const [openDropdown, setOpenDropdown] = useState(false);
  const wallet = useWallet();

  const handleClickConnect = useCallback(() => {
    if (wallet.connected) {
      setOpenDropdown(!openDropdown);
    } else {
      setOpenConnect(true);
    }
  }, [openDropdown, setOpenConnect, wallet.connected]);

  const changeWallet = useCallback(() => {
    wallet.disconnect();
    setOpenDropdown(false);
    setOpenConnect(true);
  }, [wallet, setOpenConnect]);

  const disconnectWallet = useCallback(() => {
    wallet.disconnect();
    setOpenDropdown(false);
  }, [wallet]);

  const copyAddress = useCallback(() => {
    const formatWallet =
      truncateWallet(wallet?.publicKey?.toBase58(), 10) || "";
    setOpenDropdown(false);
  }, [wallet]);

  const listDropdown = useMemo(() => {
    return [
      {
        title: "Copy address",
        icon: <span>Copy</span>,
        action: copyAddress,
      },
      {
        title: "Change wallet",
        icon: <span>Change wallet</span>,
        action: changeWallet,
      },
      {
        title: "Disconnect",
        icon: <span>Disconnect</span>,
        action: disconnectWallet,
      },
    ];
  }, [changeWallet, copyAddress, disconnectWallet]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filterRef]);

  return (
    <div ref={filterRef} className={cn(className, "relative w-[180px]")}>
      <div
        onClick={handleClickConnect}
        className={cn(
          "relative overflow-hidden lg:flex items-center w-full h-[44px] cursor-pointer p-[1px] rounded-xl"
        )}
      >
        <div className="bg-purple-200 rounded-xl relative w-[180px] flex items-center justify-center z-[1]">
          <div className="relative z-10 flex items-center justify-center">
            <div className="bg-red-500 text-white text-sm font-bold uppercase flex items-center">
              {wallet.connected ? (
                <>
                  <Button>
                    <Image
                      className="mr-2"
                      width={21}
                      height={21}
                      src={wallet.wallet?.adapter.icon || ""}
                      alt="wallet_icon"
                    />
                    {truncateWallet(wallet.publicKey?.toBase58(), 10)}
                  </Button>
                </>
              ) : (
                <>
                  <Button>Connect wallet</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {openDropdown &&
      <div className={cn("bg-cyan-400", openDropdown && "wallet-adapter-dropdown-list-active")}>
        <div className="flex items-center mb-2 px-2.5 pointer-events-none">
          <Image
            className="mr-2"
            width={21}
            height={21}
            src={wallet.wallet?.adapter.icon || ""}
            alt="wallet_icon"
          />
          <span className="text-white text-sm font-medium flex pt-0.5">
            {wallet.wallet?.adapter.name}
          </span>
        </div>
        {listDropdown.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className="wallet-adapter-dropdown-list-item text-white hover:bg-[#49afe926] hover:text-kamino-blue-light"
          >
            {item.title}
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default ConnectWallet;
