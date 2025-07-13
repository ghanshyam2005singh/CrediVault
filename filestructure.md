CrediVault/
├── app/                # Next.js App Router pages (frontend routes)
│   ├── dashboard/
│   ├── deposit/
│   ├── borrow/
│   ├── repay/
│   ├── withdraw/
│   └── page.tsx        # Landing Page + Connect Wallet
├── components/         # Tailwind-based UI components
│   ├── WalletConnect.tsx
│   ├── CollateralForm.tsx
│   ├── BorrowForm.tsx
│   ├── RepayForm.tsx
│   └── WithdrawForm.tsx
├── hooks/              # Type-safe Wagmi/Ethers hooks
│   ├── useVault.ts
│   └── useToken.ts
├── contracts/          # Solidity contracts, Hardhat config/scripts
│   ├── contracts/
│   │   ├── MockERC20.sol
│   │   └── Vault.sol
│   ├── scripts/
│   │   └── deploy.ts
│   ├── hardhat.config.ts
│   └── package.json
├── public/
├── styles/             # Tailwind CSS config and global styles
├── README.md
├── package.json
└── tsconfig.json