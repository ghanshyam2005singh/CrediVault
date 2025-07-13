import WalletConnect from '../components/WalletConnect';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">CrediVault</h1>
      <p className="mb-8 text-lg text-gray-700">
        Decentralized borrowing protocol. Lock WBTC, borrow USDT.
      </p>
      <WalletConnect />
    </main>
  );
}