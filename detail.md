We are building a decentralized borrowing protocol where users can lock BTC (or any ERC-20 token like WBTC on Core Chain) as collateral to borrow USDT (mock stablecoin).

Build a full-stack dApp using:
- ✅ Next.js 15 (App Router)
- ✅ Tailwind CSS for UI
- ✅ Ethers.js or Wagmi for wallet + blockchain interaction
- ✅ Solidity smart contracts (Core Chain / EVM-compatible)
- ✅ Deploy contracts locally via Hardhat

Basic Features:
1. Connect Wallet (MetaMask or Core Wallet)
2. User deposits WBTC as collateral
3. Smart contract stores the locked amount
4. Based on a fixed Loan-To-Value ratio (e.g., 70%), allow borrowing of mock USDT token
5. Track:
   - Collateral amount
   - Loan issued
   - Loan-to-collateral ratio
6. Allow full/partial repayment
7. Upon repayment, allow collateral withdrawal

Bonus Features (future work):
- Add interest rates
- Auto-liquidation logic if collateral drops in value
- Borrowing limits, multi-asset support
- Admin dashboard

Smart Contract Requirements:
- WBTC and USDT mock ERC20 tokens
- Vault contract to:
  - lockCollateral(address token, uint amount)
  - borrowStablecoin(uint amount)
  - repayLoan(uint amount)
  - withdrawCollateral()
  - view loan status (mapping + struct)

Frontend Pages (Next.js):
- `/` - Landing Page + Connect Wallet
- `/dashboard` - User vault summary (collateral, loan, actions)
- `/deposit` - Lock WBTC
- `/borrow` - Input & issue USDT
- `/repay` - Repay logic
- `/withdraw` - Withdraw after repayment

Please generate:
- Tailwind-based components
- Reusable contract interaction functions
- Local contract deployment via Hardhat
- Type-safe hooks (useWagmi or useContractWrite)