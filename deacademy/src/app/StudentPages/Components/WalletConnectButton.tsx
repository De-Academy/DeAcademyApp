"use client";

import * as React from 'react';
import * as web3 from '@solana/web3.js';
import * as walletAdapterReact from '@solana/wallet-adapter-react'
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css')
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const WalletConnectButton = () => {
    const endpoint = web3.clusterApiUrl('devnet')

    const wallets = [
        new walletAdapterWallets.PhantomWalletAdapter()
    ];
    

    const  [balance, setBalance] = React.useState<number | null>(0);
    const { connection } = useConnection();
    const  { publicKey } = useWallet();
    
    React.useEffect(() => {
        const getInfo = async () => {
            if (connection && publicKey) {
                const info = await connection.getAccountInfo(publicKey);
                setBalance(info!.lamports / web3.LAMPORTS_PER_SOL);
            }
        };
        getInfo();
    
    }, [connection, publicKey]);

    return (
    <>
        <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
            <walletAdapterReact.WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    <main className='min-h-screen text-white'>
                        <div className='grind grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                            <div className='flex justify-between items-center'>
                                <h2> Account Info </h2>
                                
                                <WalletMultiButton className='!bg-red-500'/>

                            </div>
                        </div>
                    </main>

                </WalletModalProvider>
            </walletAdapterReact.WalletProvider>
        </walletAdapterReact.ConnectionProvider>
    
    </>
    
    );
};

export default WalletConnectButton;