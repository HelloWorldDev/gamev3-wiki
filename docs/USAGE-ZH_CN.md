# 使用文档

## 项目名称

Game.com

## 目录

1. [简介](#简介)
2. [安装](#安装)
    - [前提条件](#前提条件)
    - [安装依赖](#安装依赖)
3. [local 使用方法](#local-使用方法)
    - [初始化](#初始化)
    - [创建代币](#创建代币)
    - [买](#买)
    - [卖](#卖)

## 简介

Game.com 是进行改良优化后 meme coin 发射平台。

```typescript
// mainnet/testnet NEW GAME Program ID
const MAINNET_PROGRAM_ID = "GameXZRzDxk8jxKtcNszVs1kojpT2NNykz5bZxYLjaCH";

// TOKEN_METADATA_PROGRAM_ID
export const NEWGAME_TOKEN_METADATA_PROGRAM_ID = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";

// 接收手续费的账户
mainnet: "4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6";
devnet: "GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5";
const fee_recipient_account = new PublicKey("4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6");

// IDL：详见/target/idl/new_game_3.json
```

## 安装

### 前提条件

-   **Node.js v18.x.x**

    -   仅支持 Node.js 18 版本及其子版本， 19 或更高版本运行可能有问题。
    -   检查版本：`node -v`
    -   安装指定版本：

        ```sh
        # 使用 nvm（Node Version Manager）来安装特定版本
        nvm install 18
        nvm use 18
        ```

    -   安装链接：[Node.js](https://nodejs.org/en/download/package-manager)

-   **Anchor v0.29.0**
    -   检查版本：`anchor --version`
    -   安装命令：
        ```sh
        cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
        avm install 0.29.0
        ```
    -   安装链接：[Anchor](https://www.anchor-lang.com/docs/installation)

### 安装依赖

```sh
npm install
# 或者
pnpm install
```

## local 使用方法

### 初始化

在使用合约方法之前，需要先进行初始化：

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

1. 创建连接 `Connection` 实例，可以更改 `endpoint` 以测试不同的节点。
2. `user` 为 solana 默认本地钱包。
3. 创建 anchor provider 和 program 实例，根据需要修改 idl 接口文件路径。

### 创建代币

```typescript
const mint = new Keypair();
const supply = new BN(1 * Math.pow(10, 9)).mul(new BN(Math.pow(10, 6)));
// 需要大于最小值，minFairLaunchPrice 计算方法，详见 create_config.ts->fairLaunchPrice
const fairLaunchPrice = 0.003;
const initVirtualQuoteReserves = calculateInitVirtualQuoteReserves(supply, fairLaunchPrice);

const createIx = await createPresaleIx(
    newPumpFunProgram,
    user.publicKey,
    quoteMint, // quoteMint
    mint.publicKey,
    quoteMint, // feeMint,指定手续费币种
    fee_recipient_account,
    {
        name: "Ansem Vs Tate",
        symbol: "BOX",
        uri: "https://newgame.mypinata.cloud/ipfs/QmaLLvbG9uQJt9E4p7T4ACYZgsSKn3zJmfK7zDgiyEVzvv",
        supply, // 1000000000 * base token decimal(6)
        target: new BN(85 * Math.pow(10, 9)), // 发射目标
        // 需要满足公式
        // initVirtualBaseReserves = total supply
        // initVirtualQuoteReserves * initVirtualBaseReserves = (initVirtualQuoteReserves + 预售阶段的募资总金额) * (initVirtualBaseReserves - 预售阶段的Base - Dev Reserve)
        initVirtualQuoteReserves: new BN(initVirtualQuoteReserves),
        initVirtualBaseReserves: supply, // supply数值
        buyFeeBps: new BN(200), // 2%
        sellFeeBps: new BN(200), // 2%
        createFee: new BN(0),
        isLaunchPermitted: true,
        preSaleInitialPrice: new BN(fairLaunchPrice * Math.pow(10, 9)),
        preSaleBuyFee: new BN(200), // 固定手续费
        preSaleSellFee: new BN(200), // 固定手续费
        preSaleIsFeePercentage: true, // true:使用buyFeeBps; false:使用preSaleBuyFee
        preSaleDevReserveAmount: new BN(0),
        preSaleSupply: new BN(800000000).mul(new BN(Math.pow(10, 6))), // 预售8亿
        slotEnable: false, // 是否开启老虎机，true:开,不能sell false:不开,没有限制
    }
);
```

createPresaleIx 参数说明：

-   `newPumpFunProgram`：program 实例。
-   `user`：用户公钥。
-   `quoteMint`：quote 代币的 mint 地址，需为合法添加的 quote 代币。
-   `baseMint`：base 代币的 mint 地址。
-   `feeMint`：指定手续费 mint 地址（一般直接为 quoteMint）。
-   `fee_recipient_account`：手续费接收账户。
-   `args`：代币参数。

args 说明：

-   `name`、`symbol` 和 `uri`：代币的基本信息。
-   `supply`：代币的供应量，固定：1_000_000_000。
-   `target`：发射目标，固定值：new BN(85 \* Math.pow(10, 9))。
-   `initVirtualQuoteReserves`：初始化 Quote，计算 initVirtualQuoteReserves 请参见 calculateInitVirtualQuoteReserves()。
-   `initVirtualBaseReserves`：初始化 Base，设置为 supply。
-   `buyFeeBps`：手续费，单位为 bps（1% 到 50%）。
-   `sellFeeBps`：手续费，单位为 bps（1% 到 50%）。
-   `createFee`：创建代币时需支付的费用，可以为 0。
-   `isLaunchPermitted`：设置 true。
-   `preSaleInitialPrice`：Fair Launch Price，minFairLaunchPrice 计算方法，详见 create_config.ts->fairLaunchPrice。
-   `preSaleBuyFee`：固定手续费，不可低于最小值，详见 create_config.ts->min_fixed_price。
-   `preSaleSellFee`：固定手续费，不可低于最小值，详见 create_config.ts->min_fixed_price。
-   `preSaleIsFeePercentage`：使用百分比手续费还是固定手续费，true 为百分比手续费，false 为固定手续费。
    true 时，preSaleBuyFee 和 preSaleSellFee 为 0；false 时，buyFeeBps 和 sellFeeBps 为 0。
-   `preSaleDevReserveAmount`：设置 0。
-   `preSaleSupply`：预售数量，可设置为 supply\*80%。
-   `slotEnable`：是否开启老虎机，false：不开启，买入卖出无限制。true：开启，开启后不能卖出。

### 买

```typescript
// 初始化内部账户
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

PresalebuyIx 参数说明：

-   `newPumpFunProgram`：program 实例。
-   `user`：用户公钥。
-   `quoteMint`：quote 代币的 mint 地址。
-   `baseMint`：base 代币的 mint 地址。
-   `feeMint`：指定手续费 mint 地址（一般直接为 quoteMint）。
-   `fee_recipient_account`：手续费接收账户。
-   `args`：买入参数。

args 说明：

-   `preSaleBuyAmount`：用户准备买入 base mint 数量。

### 卖

```typescript
// 初始化内部账户
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

PresalesellIx 参数说明：

-   `newPumpFunProgram`：program 实例。
-   `user`：用户公钥。
-   `quoteMint`：quote 代币的 mint 地址。
-   `baseMint`：base 代币的 mint 地址。
-   `feeMint`：指定手续费 mint 地址（一般直接为 quoteMint）。
-   `fee_recipient_account`：手续费接收账户。
-   `args`：买入参数。

args 说明：

-   `preSaleSellAmount`：用户准备卖出 base mint 数量。
