import { AccountMeta, PublicKey, SystemProgram, TransactionInstruction } from "@solana/web3.js";
import BN from "bn.js";
import { NewPump2 } from "../../target/types/new_game_3";
import { Program } from "@coral-xyz/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export const PROGRAM_ID = new PublicKey("GameXZRzDxk8jxKtcNszVs1kojpT2NNykz5bZxYLjaCH");

export const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

export const programConfigPdaAddress = (programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("program_config")], programId)[0];

export const feeRecipientPdaAddress = (programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("fee_recipient")], programId)[0];

export const quoteTokenInfoPdaAddress = (quoteMint: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("quote_token_info"), quoteMint.toBuffer()], programId)[0];

export const feeRecipientQuotePdaAddress = (quoteMint: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("fee_recipient_quote"), quoteMint.toBuffer()], programId)[0];

export const metadataPdaAddress = (mint: PublicKey, tokenMetadataProgramId: PublicKey = TOKEN_METADATA_PROGRAM_ID) =>
    PublicKey.findProgramAddressSync(
        [Buffer.from("metadata"), tokenMetadataProgramId.toBuffer(), mint.toBuffer()],
        tokenMetadataProgramId
    )[0];

export const bondingCurvePdaAddress = (quoteMint: PublicKey, baseMint: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("bonding_curve"), quoteMint.toBuffer(), baseMint.toBuffer()], programId)[0];
export const bondingCurvePresalePdaAddress = (quoteMint: PublicKey, baseMint: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync(
        [Buffer.from("bonding_curve_pre_sale"), quoteMint.toBuffer(), baseMint.toBuffer()],
        programId
    )[0];

export const bondingCurveQuotePdaAddress = (bondingCurve: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("bonding_curve_quote"), bondingCurve.toBuffer()], programId)[0];

export const bondingCurveBasePdaAddress = (bondingCurve: PublicKey, programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("bonding_curve_base"), bondingCurve.toBuffer()], programId)[0];

export const eventAuthorityPdaAddress = (programId: PublicKey = PROGRAM_ID) =>
    PublicKey.findProgramAddressSync([Buffer.from("__event_authority")], programId)[0];

interface InitializeConfigArgs {
    platform: PublicKey;
    feeRecipientAccount: PublicKey;
    depositAccount: PublicKey;
    baseMinSupply: BN;
    baseMaxSupply: BN;
    createFee: BN;
    baseMinFeeRate: BN;
    baseMaxFeeRate: BN;
}
export function initializeConfigIx(
    program: Program<NewPump2>,
    admin: PublicKey,
    args: InitializeConfigArgs
): Promise<TransactionInstruction> {
    return program.methods
        .initializeConfig(args)
        .accountsStrict({
            admin,
            programConfig: programConfigPdaAddress(),
            systemProgram: SystemProgram.programId,
        })
        .instruction();
}

interface UpdateConfigArgs {
    param: number;
    value: BN;
}
export function updateConfigIx(
    program: Program<NewPump2>,
    admin: PublicKey,
    args: UpdateConfigArgs,
    newAdmin?: PublicKey,
    newPlatform?: PublicKey
): Promise<TransactionInstruction> {
    const remainingAccounts: AccountMeta[] = [];

    if (newAdmin) {
        remainingAccounts.push({
            pubkey: newAdmin,
            isSigner: false,
            isWritable: false,
        });
    }

    if (newPlatform) {
        remainingAccounts.push({
            pubkey: newPlatform,
            isSigner: false,
            isWritable: false,
        });
    }

    return program.methods
        .updateConfig(args)
        .accountsStrict({
            admin,
            programConfig: programConfigPdaAddress(),
        })
        .remainingAccounts(remainingAccounts)
        .instruction();
}

export function addQuoteTokenIx(
    program: Program<NewPump2>,
    user: PublicKey,
    quoteMint: PublicKey,
    feeRecipient: PublicKey
    // args: AddQuoteTokenArgs
): Promise<TransactionInstruction> {
    return program.methods
        .addQuoteToken()
        .accountsStrict({
            user,
            programConfig: programConfigPdaAddress(),
            quoteMint,
            feeRecipientAccount: feeRecipient,
            feeRecipientQuote: getAssociatedTokenAddressSync(quoteMint, feeRecipient),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        })
        .instruction();
}

interface CreatePreSaleArgs {
    name: string;
    symbol: string;
    uri: string;
    supply: BN;
    target: BN;
    initVirtualQuoteReserves: BN;
    initVirtualBaseReserves: BN;
    buyFeeBps: BN;
    sellFeeBps: BN;
    createFee: BN;
    isLaunchPermitted: boolean;
    preSaleInitialPrice: BN;
    preSaleBuyFee: BN;
    preSaleSellFee: BN;
    preSaleIsFeePercentage: boolean;
    preSaleDevReserveAmount: BN;
    preSaleSupply: BN;
    slotEnable: boolean;
}

export function createPresaleIx(
    program: Program<NewPump2>,
    user: PublicKey,
    quoteMint: PublicKey,
    baseMint: PublicKey,
    feeMint: PublicKey,
    feeRecipient: PublicKey,
    args: CreatePreSaleArgs
): Promise<TransactionInstruction> {
    const bondingCurve = bondingCurvePresalePdaAddress(quoteMint, baseMint);
    return program.methods
        .preSaleCreate(args)
        .accountsStrict({
            user,
            programConfig: programConfigPdaAddress(),
            feeRecipient: feeRecipient,
            quoteMint,
            baseMint,
            feeMint,
            metadata: metadataPdaAddress(baseMint),
            bondingCurvePreSale: bondingCurve,
            bondingCurveQuote: bondingCurveQuotePdaAddress(bondingCurve),
            bondingCurveBase: bondingCurveBasePdaAddress(bondingCurve),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            program: PROGRAM_ID,
        })
        .instruction();
}

interface PresaleBuyArgs {
    preSaleBuyAmount: BN;
}
export function PresalebuyIx(
    program: Program<NewPump2>,
    user: PublicKey,
    quoteMint: PublicKey,
    baseMint: PublicKey,
    feeMint: PublicKey,
    feeRecipient: PublicKey,
    args: PresaleBuyArgs
): Promise<TransactionInstruction> {
    const bondingCurve = bondingCurvePresalePdaAddress(quoteMint, baseMint);
    return program.methods
        .preSaleBuy(args)
        .accountsStrict({
            user,
            quoteMint,
            programConfig: programConfigPdaAddress(),
            feeRecipientAccount: feeRecipient,
            feeRecipientFee: getAssociatedTokenAddressSync(feeMint, feeRecipient),
            feeRecipientQuote: getAssociatedTokenAddressSync(quoteMint, feeRecipient),
            baseMint,
            bondingCurvePreSale: bondingCurve,
            bondingCurveQuote: bondingCurveQuotePdaAddress(bondingCurve),
            bondingCurveBase: bondingCurveBasePdaAddress(bondingCurve),
            userQuoteAccount: getAssociatedTokenAddressSync(quoteMint, user),
            userBaseAccount: getAssociatedTokenAddressSync(baseMint, user),
            userFeeAccount: getAssociatedTokenAddressSync(quoteMint, user),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            // associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            program: PROGRAM_ID,
        })
        .instruction();
}

interface PresaleSellArgs {
    preSaleSellAmount: BN;
}
export function PresalesellIx(
    program: Program<NewPump2>,
    user: PublicKey,
    quoteMint: PublicKey,
    baseMint: PublicKey,
    feeMint: PublicKey,
    feeRecipient: PublicKey,
    args: PresaleSellArgs
): Promise<TransactionInstruction> {
    const bondingCurve = bondingCurvePresalePdaAddress(quoteMint, baseMint);
    return program.methods
        .preSaleSell(args)
        .accountsStrict({
            user,
            quoteMint,
            programConfig: programConfigPdaAddress(),
            feeRecipientAccount: feeRecipient,
            feeRecipientFee: getAssociatedTokenAddressSync(feeMint, feeRecipient),
            baseMint,
            bondingCurvePreSale: bondingCurve,
            bondingCurveQuote: bondingCurveQuotePdaAddress(bondingCurve),
            bondingCurveBase: bondingCurveBasePdaAddress(bondingCurve),
            userQuoteAccount: getAssociatedTokenAddressSync(quoteMint, user),
            userBaseAccount: getAssociatedTokenAddressSync(baseMint, user),
            userFeeAccount: getAssociatedTokenAddressSync(quoteMint, user),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            // associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            program: PROGRAM_ID,
        })
        .instruction();
}

export function presaleWithdrawIx(
    program: Program<NewPump2>,
    platform: PublicKey,
    quoteMint: PublicKey,
    baseMint: PublicKey
): Promise<TransactionInstruction> {
    const bondingCurve = bondingCurvePresalePdaAddress(quoteMint, baseMint);
    return program.methods
        .presaleWithdraw()
        .accountsStrict({
            platform,
            programConfig: programConfigPdaAddress(),
            quoteMint,
            baseMint,
            bondingCurve,
            bondingCurveQuote: bondingCurveQuotePdaAddress(bondingCurve),
            bondingCurveBase: bondingCurveBasePdaAddress(bondingCurve),
            platformQuoteAccount: getAssociatedTokenAddressSync(quoteMint, platform),
            platformBaseAccount: getAssociatedTokenAddressSync(baseMint, platform),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            program: PROGRAM_ID,
        })
        .instruction();
}

interface DepositArgs {
    orderId: string;
    command: string;
    extraInfo: string;
    maxIndex: number;
    index: number;
    cost: BN;
}
export function depositIx(
    program: Program<NewPump2>,
    user: PublicKey,
    mint: PublicKey,
    depositAccount: PublicKey,
    args: DepositArgs
): Promise<TransactionInstruction> {
    return program.methods
        .deposit(args)
        .accountsStrict({
            user,
            mint,
            userTokenAccount: getAssociatedTokenAddressSync(mint, user),
            programConfig: programConfigPdaAddress(),
            depositAccount: depositAccount,
            depositTokenAccount: getAssociatedTokenAddressSync(mint, depositAccount),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            program: PROGRAM_ID,
        })
        .instruction();
}

interface Withdraw2Args {
    orderId: string;
    cost: BN;
}
export function withdraw2Ix(
    program: Program<NewPump2>,
    systemAccount: PublicKey,
    mint: PublicKey,
    receiverAccount: PublicKey,
    args: Withdraw2Args
): Promise<TransactionInstruction> {
    return program.methods
        .withdraw2(args)
        .accountsStrict({
            systemAccount,
            mint,
            systemTokenAccount: getAssociatedTokenAddressSync(mint, systemAccount),
            receiverAccount: receiverAccount,
            receiverTokenAccount: getAssociatedTokenAddressSync(mint, receiverAccount),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            eventAuthority: eventAuthorityPdaAddress(),
            program: PROGRAM_ID,
        })
        .instruction();
}
