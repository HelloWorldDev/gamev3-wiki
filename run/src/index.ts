import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { loadKeypair, loadProgramIdl, sendAndConfirmOptimalTransaction } from "./utils";
import { NewPump2 } from "../../target/types/new_game_3";
import { PROGRAM_ID, createPresaleIx, PresalebuyIx, PresalesellIx } from "./new-pump-2-ft";
import BN from "bn.js";
import BigNumber from "bignumber.js";
import { createAssociatedTokenAccountIdempotentInstruction, getAssociatedTokenAddressSync } from "@solana/spl-token";

function calculateInitVirtualQuoteReserves(supply: BN, fairLaunchPrice: any) {
    const supplyNum = supply.toString();
    console.log(supplyNum, "supplyNum");
    // 预售分发的 Base
    const fairLaunchPercent = 80;
    const B_sale = new BigNumber(fairLaunchPercent).div(100).times(supplyNum);

    // 开发预留的 Base
    const base_dev = 0;
    const B_dev = new BigNumber(base_dev);

    // 募资总金额 = 预售Base * 公平发售价格
    const F = new BigNumber(fairLaunchPrice).times(1e9).times(B_sale).div(1e6);
    const Q0 = F.times(supplyNum).div(B_sale).minus(F);

    return Q0.toString();
}

async function createMintAndTradeExample() {
    const endpoint = "https://api.devnet.solana.com";
    const connection = new Connection(endpoint, "confirmed");
    const user = loadKeypair("~/.config/solana/key.json");
    const wallet = new anchor.Wallet(user);

    const provider = new anchor.AnchorProvider(connection, wallet, {
        commitment: "confirmed",
    });
    anchor.setProvider(provider);

    const newGameProgramId = new PublicKey(PROGRAM_ID);
    const newPumpFunProgram: anchor.Program<NewPump2> = new anchor.Program(
        loadProgramIdl("../../target/idl/new_game_3.json"),
        newGameProgramId,
        provider
    );

    // 接收手续费的地址
    // mainnet: 4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6
    // devnet: GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5
    const fee_recipient_account = new PublicKey("GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5");

    // quote mint
    const quoteMint = new PublicKey("So11111111111111111111111111111111111111112");

    const mint = new Keypair();
    const mint_publicKey = mint.publicKey.toString();
    console.log(mint_publicKey, "mint_publicKey");
    const baseMint = new PublicKey(mint_publicKey);

    // 计算
    const supply = new BN(1 * Math.pow(10, 9)).mul(new BN(Math.pow(10, 6)));
    const fairLaunchPrice = 0.003;

    const initVirtualQuoteReserves = calculateInitVirtualQuoteReserves(supply, fairLaunchPrice);
    console.log(initVirtualQuoteReserves, "initVirtualQuoteReserves");

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
            initVirtualQuoteReserves: new BN(initVirtualQuoteReserves), //x * 1000000000 = (x+180000) * 900000000 算出x是多少
            initVirtualBaseReserves: supply, // supply数值
            buyFeeBps: new BN(200), // 2%
            sellFeeBps: new BN(200), // 2%
            createFee: new BN(0),
            isLaunchPermitted: true, // true:使用buyFeeBps; false:使用preSaleBuyFee
            preSaleInitialPrice: new BN(fairLaunchPrice * Math.pow(10, 9)),
            preSaleBuyFee: new BN(200), // 固定手续费
            preSaleSellFee: new BN(200), // 固定手续费
            preSaleIsFeePercentage: true,
            preSaleDevReserveAmount: new BN(0),
            preSaleSupply: new BN(800000000).mul(new BN(Math.pow(10, 6))), // 预售8亿
            slotEnable: false, // 是否开启老虎机，true:开,不能sell false:不开,没有限制
        }
    );

    const createSignature = await sendAndConfirmOptimalTransaction({
        connection,
        ixs: [createIx],
        payer: user,
        otherSigners: [mint],
    });

    console.log(`Create Presale Hash: ${createSignature}`);

    {
        console.log("🚀 ~ BUY:");
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
        const presalebuyIx = await PresalebuyIx(
            newPumpFunProgram,
            user.publicKey,
            quoteMint,
            baseMint,
            quoteMint,
            fee_recipient_account,
            {
                preSaleBuyAmount: new BN(100000000), // 100
            }
        );

        const presaleBuySignature = await sendAndConfirmOptimalTransaction({
            connection,
            ixs: [createUserQuoteTokenIx, createUserBaseTokenIx, createUserFeeTokenIx, createFeeTokenIx, presalebuyIx],
            payer: user,
        });

        console.log(`Buy Presale Hash: ${presaleBuySignature}`);
    }

    {
        console.log("🚀 ~ SELL:");
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

        //  quoteMint
        const presalesellIx = await PresalesellIx(
            newPumpFunProgram,
            user.publicKey,
            quoteMint,
            baseMint,
            quoteMint,
            fee_recipient_account,
            {
                preSaleSellAmount: new BN(2000000), // 10
            }
        );

        const presaleSellSignature = await sendAndConfirmOptimalTransaction({
            connection,
            ixs: [createUserQuoteTokenIx, createUserBaseTokenIx, createUserFeeTokenIx, createFeeTokenIx, presalesellIx],
            payer: user,
        });

        console.log(`Sell Presale Hash: ${presaleSellSignature}`);
    }
}

createMintAndTradeExample()
    .then(() => console.log("😊Done😊"))
    .catch((error) => console.log("Error==>: " + error));
