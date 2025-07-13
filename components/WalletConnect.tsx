'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors';

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex flex-col items-center">
        <span className="mb-2 text-green-600">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={() => connect()}
      disabled={isLoading}
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}