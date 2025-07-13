# CrediVault

CrediVault is a decentralized borrowing protocol where users can lock BTC (or any ERC-20 token like WBTC on Core Chain) as collateral to borrow USDT (mock stablecoin).  
This project is a full-stack dApp built with Next.js 15 (App Router), Tailwind CSS, Ethers.js/Wagmi, Solidity, and Hardhat.

---

## Features

- **Connect Wallet** (MetaMask or Core Wallet)
- **Deposit WBTC** as collateral
- **Borrow USDT** (mock stablecoin) up to a fixed Loan-To-Value (LTV) ratio (e.g., 70%)
- **Track**: Collateral, Loan Issued, LTV Ratio
- **Repay**: Full or partial repayment
- **Withdraw**: Collateral after repayment

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, Wagmi/Ethers.js
- **Smart Contracts:** Solidity (EVM-compatible, Core Chain), Hardhat (local deployment)
- **Tokens:** Mock WBTC & USDT (ERC20)

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/CrediVault.git
cd CrediVault
npm install
```

### 2. Run Local Blockchain (Hardhat)

```bash
cd contracts
npm install
npx hardhat node
npm install wagmi ethers viem
```

### 3. Deploy Contracts

In a new terminal:

```bash
cd contracts
npx hardhat run scripts/deploy.ts --network localhost
```

### 4. Start the Frontend

```bash
cd ..
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - Tailwind-based UI components
- `/hooks` - Type-safe Wagmi/Ethers hooks
- `/contracts` - Solidity contracts, Hardhat config/scripts

---

## Frontend Pages

- `/` - Landing Page + Connect Wallet
- `/dashboard` - User vault summary (collateral, loan, actions)
- `/deposit` - Lock WBTC
- `/borrow` - Borrow USDT
- `/repay` - Repay loan
- `/withdraw` - Withdraw collateral

---

## Smart Contracts

- **MockERC20.sol** - WBTC & USDT tokens
- **Vault.sol** - Main protocol logic:
  - `lockCollateral(address token, uint amount)`
  - `borrowStablecoin(uint amount)`
  - `repayLoan(uint amount)`
  - `withdrawCollateral()`
  - View loan status

---

## Development

- Tailwind CSS for UI
- Reusable contract interaction functions
- Type-safe hooks (Wagmi/Ethers)
- Local contract deployment via Hardhat

---

## Future Features

- Interest rates
- Auto-liquidation
- Multi-asset support
- Admin dashboard

---

## License

MIT