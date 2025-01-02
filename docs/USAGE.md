# Usage Documentation

## Project Name

Game.com

## Catalog

1. [Introduction](#Introduction)
2. [Installation](#Installation)
    - [Prerequisites](#Prerequisites)
    - [InstallDependencies](#InstallDependencies)
3. [LocalUsage](#LocalUsage)
    - [Initialization](#Initialization)
    - [CreateToken](#CreateToken)
    - [Buy](#Buy)
    - [Sell](#Sell)

## Introduction

Game.com is an enhanced and optimized meme coin launch platform.

```typescript
// mainnet/testnet NEW GAME Program ID
const MAINNET_PROGRAM_ID = "GameXZRzDxk8jxKtcNszVs1kojpT2NNykz5bZxYLjaCH";

// TOKEN_METADATA_PROGRAM_ID
export const NEWGAME_TOKEN_METADATA_PROGRAM_ID = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";

// 接收手续费的账户
mainnet: "4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6";
devnet: "GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5";
const fee_recipient_account = new PublicKey("4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6");

// IDL: See ==> /target/idl/new_game_3.json
```

## Installation

### Prerequisites

-   **Node.js v18.x.x**

    -   Supports only Node.js version 18 and its subversions. Versions 19 or higher may encounter issues.
    -   Check version: `node -v`
    -   Install specific version:

        ```sh
        # Use nvm (Node Version Manager) to install a specific version
        nvm install 18
        nvm use 18
        ```

    -   Installation link: [Node.js](https://nodejs.org/en/download/package-manager)

-   **Anchor v0.29.0**
    -   Check version: `anchor --version`
    -   Installation command:
        ```sh
        cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
        avm install 0.29.0
        ```
    -   Installation link: [Anchor](https://www.anchor-lang.com/docs/installation)

### InstallDependencies

```sh
npm install
# 或者
pnpm install
```

## LocalUsage

### Initialization

Before using contract methods, initialization is required:

```typescript
const endpoint = "https://api.devnet.solana.com";
const connection = new Connection(endpoint, "confirmed");
const user = loadKeypair("~/.config/solana/key.json");
const wallet = new anchor.Wallet(user);
const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });
anchor.setProvider(provider);

const newGameProgramId = new PublicKey("GameXZRzDxk8jxKtcNszVs1kojpT2NNykz5bZxYLjaCH");
const newPumpFunProgram: anchor.Program<NewPump2> = new anchor.Program(
    loadProgramIdl("../target/idl/new_game_3.json"),
    newGameProgramId,
    provider
);
const fee_recipient_account = new PublicKey("GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5");
```

1. Create a `Connection` instance. You can change the `endpoint` to test different nodes.
2. `user` refers to the default local Solana wallet.
3. Create the anchor provider and program instances, adjusting the IDL interface file path as needed.

### CreateToken

```typescript
const mint = new Keypair();
const supply = new BN(1 * Math.pow(10, 9)).mul(new BN(Math.pow(10, 6)));
// Must be greater than the minimum value, minFairLaunchPrice calculation method, see create_config.ts->fairLaunchPrice
const fairLaunchPrice = 0.003;
const initVirtualQuoteReserves = calculateInitVirtualQuoteReserves(supply, fairLaunchPrice);

const createIx = await createPresaleIx(
    newPumpFunProgram,
    user.publicKey,
    quoteMint, // quoteMint
    mint.publicKey,
    quoteMint, // feeMint, specify the fee token type
    fee_recipient_account,
    {
        name: "Ansem Vs Tate",
        symbol: "BOX",
        uri: "https://newgame.mypinata.cloud/ipfs/QmaLLvbG9uQJt9E4p7T4ACYZgsSKn3zJmfK7zDgiyEVzvv",
        supply, // 1000000000 * base token decimal(6)
        target: new BN(85 * Math.pow(10, 9)), // 发射目标
        // Must satisfy the formula:
        // initVirtualBaseReserves = total supply
        // initVirtualQuoteReserves * initVirtualBaseReserves = (initVirtualQuoteReserves + presale total amount) * (initVirtualBaseReserves - presale Base - Dev Reserve)
        initVirtualQuoteReserves: new BN(initVirtualQuoteReserves),
        initVirtualBaseReserves: supply, // Supply value
        buyFeeBps: new BN(200), // 2%
        sellFeeBps: new BN(200), // 2%
        createFee: new BN(0),
        isLaunchPermitted: true,
        preSaleInitialPrice: new BN(fairLaunchPrice * Math.pow(10, 9)),
        preSaleBuyFee: new BN(200), // Fixed fee
        preSaleSellFee: new BN(200), // Fixed fee
        preSaleIsFeePercentage: true, // true: Use buyFeeBps+sellFeeBps; false: Use PreSaleBuyFee+preSaleSellFee
        preSaleDevReserveAmount: new BN(0),
        preSaleSupply: new BN(800000000).mul(new BN(Math.pow(10, 6))), // 预售8亿
        slotEnable: false, // Whether to enable slot machine, true: enabled, cannot sell; false: disabled, no restriction
    }
);
```

createPresaleIx Parameter Description：

-   `newPumpFunProgram`: Program instance.
-   `user`: User public key.
-   `quoteMint`: Quote token address.
-   `baseMint`: Base token address.
-   `feeMint`: Fee token address (typically the same as quoteMint).
-   `fee_recipient_account`: Account receiving the fee.
-   `args`: Token Parameters.

Args Description:

-   `name`、`symbol` 和 `uri`: Basic information about the token.
-   `supply`: Token Total Supply, Fixed: 1_000_000_000.
-   `target`: The launch target, Fixed: new BN(85 \* Math.pow(10, 9)).
-   `initVirtualQuoteReserves`: The initial Quote reserves. To calculate initVirtualQuoteReserves, please refer to the calculateInitVirtualQuoteReserves() function.
-   `initVirtualBaseReserves`: The initial Base reserves, set to supply.
-   `buyFeeBps`: The buy fee, in basis points (bps), ranging from 1% to 50%.
-   `sellFeeBps`: The sell fee, in basis points (bps), ranging from 1% to 50%.
-   `createFee`: The creation fee, can be set to 0.
-   `isLaunchPermitted`: Set to true.
-   `preSaleInitialPrice`: The Fair Launch Price. The calculation method for minFairLaunchPrice can be found in create_config.ts->fairLaunchPrice.
-   `preSaleBuyFee`: A fixed buy fee, cannot be less than the minimum value. The calculation method for min_fixed_price can be found in create_config.ts->min_fixed_price.
-   `preSaleSellFee`: A fixed sell fee, cannot be less than the minimum value. The calculation method for min_fixed_price can be found in create_config.ts->min_fixed_price.
-   `preSaleIsFeePercentage`: Whether to use a percentage-based fee or a fixed fee. true means using a percentage-based fee, while false means using a fixed fee. When true, preSaleBuyFee and preSaleSellFee should be set to 0. When false, buyFeeBps and sellFeeBps should be set to 0.
-   `preSaleDevReserveAmount`: Set to 0.
-   `preSaleSupply`: Presale amount, Set: supply\*80%。
-   `slotEnable`: Whether to enable the slot machine feature. If false, no restrictions on buying or selling. If true, buying is allowed but selling is disabled.

### BUY

```typescript
// Initialize Internal Accounts
const createUserQuoteTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, user.publicKey),
    user.publicKey,
    quoteMint
);

const createUserBaseTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(baseMint, user.publicKey),
    user.publicKey,
    baseMint
);

const createUserFeeTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, user.publicKey),
    user.publicKey,
    quoteMint
);

const createFeeTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, fee_recipient_account),
    fee_recipient_account,
    quoteMint
);
// Buy
const presalebuyIx = await PresalebuyIx(
    newPumpFunProgram,
    user.publicKey,
    quoteMint,
    baseMint,
    quoteMint,
    fee_recipient_account,
    {
        preSaleBuyAmount: new BN(10000000), // 10
    }
);
```

PresalebuyIx Parameter Description：

-   `newPumpFunProgram`: Program instance.
-   `user`: User public key.
-   `quoteMint`: Quote token address.
-   `baseMint`: Base token address.
-   `feeMint`: Fee token address (typically the same as quoteMint).
-   `fee_recipient_account`: Account receiving the fee.
-   `args`: Parameters for the purchase.

Args Description:

-   `preSaleBuyAmount`: The amount of base mint the user intends to purchase.

### Sell

```typescript
// Initialize Internal Accounts
const createUserQuoteTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, user.publicKey),
    user.publicKey,
    quoteMint
);

const createUserBaseTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(baseMint, user.publicKey),
    user.publicKey,
    baseMint
);

const createUserFeeTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, user.publicKey),
    user.publicKey,
    quoteMint
);

const createFeeTokenIx = createAssociatedTokenAccountIdempotentInstruction(
    user.publicKey,
    getAssociatedTokenAddressSync(quoteMint, fee_recipient_account),
    fee_recipient_account,
    quoteMint
);

//  Sell
const presalesellIx = await PresalesellIx(
    newPumpFunProgram,
    user.publicKey,
    quoteMint,
    baseMint,
    quoteMint,
    fee_recipient_account,
    {
        preSaleSellAmount: new BN(2000000), // 2
    }
);
```

PresalesellIx Parameter Description：

-   `newPumpFunProgram`: Program instance.
-   `user`: User public key.
-   `quoteMint`: Quote token address.
-   `baseMint`: Base token address.
-   `feeMint`: Fee token address (typically the same as quoteMint).
-   `fee_recipient_account`: Account receiving the fee.
-   `args`: Parameters for the purchase.

Args Description:

-   `preSaleSellAmount`: The amount of base mint the user intends to sell.
