export type NewPump2 = {
  "version": "0.1.0",
  "name": "new_pump_2",
  "constants": [
    {
      "name": "PROGRAM_CONFIG_SEED",
      "type": "string",
      "value": "\"program_config\""
    },
    {
      "name": "FEE_RECIPIENT",
      "type": "string",
      "value": "\"fee_recipient\""
    },
    {
      "name": "QUOTE_TOKEN_INFO_SEED",
      "type": "string",
      "value": "\"quote_token_info\""
    },
    {
      "name": "FEE_RECIPIENT_QUOTE_SEED",
      "type": "string",
      "value": "\"fee_recipient_quote\""
    },
    {
      "name": "BONDING_CURVE_SEED",
      "type": "string",
      "value": "\"bonding_curve\""
    },
    {
      "name": "BONDING_CURVE_PRE_SALE_SEED",
      "type": "string",
      "value": "\"bonding_curve_pre_sale\""
    },
    {
      "name": "BONDING_CURVE_QUOTE_SEED",
      "type": "string",
      "value": "\"bonding_curve_quote\""
    },
    {
      "name": "BONDING_CURVE_BASE_SEED",
      "type": "string",
      "value": "\"bonding_curve_base\""
    },
    {
      "name": "UPDATE_CONFIG_ACTION_ADMIN",
      "type": "u8",
      "value": "0"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_PLATFORM",
      "type": "u8",
      "value": "1"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_FEE_RECIPIENT",
      "type": "u8",
      "value": "2"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_DEPOSIT",
      "type": "u8",
      "value": "3"
    },
    {
      "name": "PERCENTAGE_DENOMINATOR",
      "type": "u64",
      "value": "10_000"
    },
    {
      "name": "DISCRIMINATOR_LENGTH",
      "type": {
        "defined": "usize"
      },
      "value": "8"
    }
  ],
  "instructions": [
    {
      "name": "initializeConfig",
      "docs": [
        "Initialize program config"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeConfigArgs"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "docs": [
        "Update program config"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "UpdateConfigArgs"
          }
        }
      ]
    },
    {
      "name": "addQuoteToken",
      "docs": [
        "Add new quote token"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleCreate",
      "docs": [
        "Creator creates new token with presale mode"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePreSaleArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleCreateDonate",
      "docs": [
        "Creator creates new token with donate presale mode"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePreSaleDonateArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleBuy",
      "docs": [
        "Buy token by presale"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "PreSaleBuyArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleSell",
      "docs": [
        "Sell token by presale"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "PreSaleSellArgs"
          }
        }
      ]
    },
    {
      "name": "presalePermit",
      "docs": [
        "Creator PreSale permits launching when token is set"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "presaleWithdraw",
      "docs": [
        "Withdraw liquidity of presale bonding curve"
      ],
      "accounts": [
        {
          "name": "platform",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createPump",
      "docs": [
        "Create a new pump"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePumpArgs"
          }
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "Deposit token to account specified in the program config"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "DepositArgs"
          }
        }
      ]
    },
    {
      "name": "withdraw2",
      "docs": [
        "When user claime token from center user asset, System account with call this method"
      ],
      "accounts": [
        {
          "name": "systemAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "Withdraw2Args"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "platform",
            "type": "publicKey"
          },
          {
            "name": "feeRecipientAccount",
            "type": "publicKey"
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "baseMinSupply",
            "type": "u64"
          },
          {
            "name": "baseMaxSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "baseMinFeeRate",
            "type": "u64"
          },
          {
            "name": "baseMaxFeeRate",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "curveInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "quoteBump",
            "type": "u8"
          },
          {
            "name": "baseBump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "initSupply",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "quoteBalance",
            "type": "u64"
          },
          {
            "name": "baseSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "isOnRaydium",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "curvePreSaleInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "quoteBump",
            "type": "u8"
          },
          {
            "name": "baseBump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "initSupply",
            "type": "u64"
          },
          {
            "name": "initPresaleSupply",
            "type": "u64"
          },
          {
            "name": "initDevReserveSupply",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          },
          {
            "name": "quoteBalance",
            "type": "u64"
          },
          {
            "name": "baseSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "isOnRaydium",
            "type": "bool"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleIsEnd",
            "type": "bool"
          },
          {
            "name": "feeMint",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                80
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreatePumpArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "DepositArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "type": "string"
          },
          {
            "name": "command",
            "type": "string"
          },
          {
            "name": "extraInfo",
            "type": "string"
          },
          {
            "name": "maxIndex",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u8"
          },
          {
            "name": "cost",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeConfigArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platform",
            "type": "publicKey"
          },
          {
            "name": "feeRecipientAccount",
            "type": "publicKey"
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "baseMinSupply",
            "type": "u64"
          },
          {
            "name": "baseMaxSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "baseMinFeeRate",
            "type": "u64"
          },
          {
            "name": "baseMaxFeeRate",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PreSaleBuyArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "preSaleBuyAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreatePreSaleDonateArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "slotEnable",
            "type": "bool"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleDevReserveAmount",
            "type": "u64"
          },
          {
            "name": "preSaleDonateAmount",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreatePreSaleArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "slotEnable",
            "type": "bool"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleDevReserveAmount",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PreSaleSellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "preSaleSellAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UpdateConfigArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "param",
            "type": "u8"
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Withdraw2Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "type": "string"
          },
          {
            "name": "cost",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TradeEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "newQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "newBaseSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "userQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "userBaseBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "should2raydium",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PermitEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "should2raydium",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "command",
          "type": "string",
          "index": false
        },
        {
          "name": "extraInfo",
          "type": "string",
          "index": false
        },
        {
          "name": "maxIndex",
          "type": "u8",
          "index": false
        },
        {
          "name": "index",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent2",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost1",
          "type": "u64",
          "index": false
        },
        {
          "name": "mint2",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost2",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "command",
          "type": "string",
          "index": false
        },
        {
          "name": "extraInfo",
          "type": "string",
          "index": false
        },
        {
          "name": "maxIndex",
          "type": "u8",
          "index": false
        },
        {
          "name": "index",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "Withdraw2Event",
      "fields": [
        {
          "name": "systemAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "receiverAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePreSaleEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurvePreSale",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "sellFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleInitialPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleBuyFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSellFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsFeePercentage",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleDevReserveAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "slotEnable",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePreSaleDonateEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurvePreSale",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "sellFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleInitialPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleBuyFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSellFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsFeePercentage",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleDevReserveAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleDonateAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "slotEnable",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PreSaleTradeEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "newQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "newBaseSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "userQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "userBaseBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "initDevReserveSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "initPreSaleSupply",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePumpEvent",
      "fields": [
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAdmin",
      "msg": "Invalid admin."
    },
    {
      "code": 6001,
      "name": "InvalidParameters",
      "msg": "Invalid parameters."
    },
    {
      "code": 6002,
      "name": "InvalidInputUpdateParam",
      "msg": "Invalid input update param."
    },
    {
      "code": 6003,
      "name": "QuoteTokenDeleted",
      "msg": "Quote token is deleted."
    },
    {
      "code": 6004,
      "name": "InvalidInputSupply",
      "msg": "Invalid input supply."
    },
    {
      "code": 6005,
      "name": "OnRaydium",
      "msg": "This token is on the raydium, please swap on the raydium"
    },
    {
      "code": 6006,
      "name": "ExceededSlippage",
      "msg": "Exceeds desired slippage limit"
    },
    {
      "code": 6007,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens to sell"
    },
    {
      "code": 6008,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    },
    {
      "code": 6009,
      "name": "InvalidPlatform",
      "msg": "Invalid platform"
    },
    {
      "code": 6010,
      "name": "OnBondingCurve",
      "msg": "This token is on the bonding curve."
    },
    {
      "code": 6011,
      "name": "InvalidFeeBps",
      "msg": "Invalid fee bps."
    },
    {
      "code": 6012,
      "name": "AlreadyInitialized",
      "msg": "already initialized"
    },
    {
      "code": 6013,
      "name": "Unauthorized",
      "msg": "Unauthorized for Collection"
    },
    {
      "code": 6014,
      "name": "NotInitialized",
      "msg": "not initialized"
    },
    {
      "code": 6015,
      "name": "InvalidBuyFeeBps",
      "msg": "Invalid buy fee bps."
    },
    {
      "code": 6016,
      "name": "InvalidSellFeeBps",
      "msg": "Invalid sell fee bps."
    },
    {
      "code": 6017,
      "name": "InvalidFeePercentage",
      "msg": "Invalid fee percentage"
    },
    {
      "code": 6018,
      "name": "MissingDevToken",
      "msg": "Missing developer token account"
    },
    {
      "code": 6019,
      "name": "PreSaleIsEnd",
      "msg": "Pre-sale is end"
    },
    {
      "code": 6020,
      "name": "InsufficientPreSaleTokens",
      "msg": "Insufficient pre-sale tokens available"
    },
    {
      "code": 6021,
      "name": "PreSaleIsNotEnd",
      "msg": "Pre-sale is not end"
    },
    {
      "code": 6022,
      "name": "NotEnoughPreSaleTokens",
      "msg": "Not enough pre-sale tokens"
    },
    {
      "code": 6023,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6024,
      "name": "InvalidAssociatedTokenAccount",
      "msg": "Invalid associated token account"
    }
  ]
};

export const IDL: NewPump2 = {
  "version": "0.1.0",
  "name": "new_pump_2",
  "constants": [
    {
      "name": "PROGRAM_CONFIG_SEED",
      "type": "string",
      "value": "\"program_config\""
    },
    {
      "name": "FEE_RECIPIENT",
      "type": "string",
      "value": "\"fee_recipient\""
    },
    {
      "name": "QUOTE_TOKEN_INFO_SEED",
      "type": "string",
      "value": "\"quote_token_info\""
    },
    {
      "name": "FEE_RECIPIENT_QUOTE_SEED",
      "type": "string",
      "value": "\"fee_recipient_quote\""
    },
    {
      "name": "BONDING_CURVE_SEED",
      "type": "string",
      "value": "\"bonding_curve\""
    },
    {
      "name": "BONDING_CURVE_PRE_SALE_SEED",
      "type": "string",
      "value": "\"bonding_curve_pre_sale\""
    },
    {
      "name": "BONDING_CURVE_QUOTE_SEED",
      "type": "string",
      "value": "\"bonding_curve_quote\""
    },
    {
      "name": "BONDING_CURVE_BASE_SEED",
      "type": "string",
      "value": "\"bonding_curve_base\""
    },
    {
      "name": "UPDATE_CONFIG_ACTION_ADMIN",
      "type": "u8",
      "value": "0"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_PLATFORM",
      "type": "u8",
      "value": "1"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_FEE_RECIPIENT",
      "type": "u8",
      "value": "2"
    },
    {
      "name": "UPDATE_CONFIG_ACTION_DEPOSIT",
      "type": "u8",
      "value": "3"
    },
    {
      "name": "PERCENTAGE_DENOMINATOR",
      "type": "u64",
      "value": "10_000"
    },
    {
      "name": "DISCRIMINATOR_LENGTH",
      "type": {
        "defined": "usize"
      },
      "value": "8"
    }
  ],
  "instructions": [
    {
      "name": "initializeConfig",
      "docs": [
        "Initialize program config"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeConfigArgs"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "docs": [
        "Update program config"
      ],
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "UpdateConfigArgs"
          }
        }
      ]
    },
    {
      "name": "addQuoteToken",
      "docs": [
        "Add new quote token"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleCreate",
      "docs": [
        "Creator creates new token with presale mode"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePreSaleArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleCreateDonate",
      "docs": [
        "Creator creates new token with donate presale mode"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePreSaleDonateArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleBuy",
      "docs": [
        "Buy token by presale"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "PreSaleBuyArgs"
          }
        }
      ]
    },
    {
      "name": "preSaleSell",
      "docs": [
        "Sell token by presale"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeRecipientAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipientFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurvePreSale",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "PreSaleSellArgs"
          }
        }
      ]
    },
    {
      "name": "presalePermit",
      "docs": [
        "Creator PreSale permits launching when token is set"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "presaleWithdraw",
      "docs": [
        "Withdraw liquidity of presale bonding curve"
      ],
      "accounts": [
        {
          "name": "platform",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bondingCurve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bondingCurveBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformQuoteAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformBaseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createPump",
      "docs": [
        "Create a new pump"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "CreatePumpArgs"
          }
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "Deposit token to account specified in the program config"
      ],
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "DepositArgs"
          }
        }
      ]
    },
    {
      "name": "withdraw2",
      "docs": [
        "When user claime token from center user asset, System account with call this method"
      ],
      "accounts": [
        {
          "name": "systemAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "Withdraw2Args"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "platform",
            "type": "publicKey"
          },
          {
            "name": "feeRecipientAccount",
            "type": "publicKey"
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "baseMinSupply",
            "type": "u64"
          },
          {
            "name": "baseMaxSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "baseMinFeeRate",
            "type": "u64"
          },
          {
            "name": "baseMaxFeeRate",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "curveInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "quoteBump",
            "type": "u8"
          },
          {
            "name": "baseBump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "initSupply",
            "type": "u64"
          },
          {
            "name": "feeBps",
            "type": "u64"
          },
          {
            "name": "quoteBalance",
            "type": "u64"
          },
          {
            "name": "baseSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "isOnRaydium",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "curvePreSaleInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "quoteBump",
            "type": "u8"
          },
          {
            "name": "baseBump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "initSupply",
            "type": "u64"
          },
          {
            "name": "initPresaleSupply",
            "type": "u64"
          },
          {
            "name": "initDevReserveSupply",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          },
          {
            "name": "quoteBalance",
            "type": "u64"
          },
          {
            "name": "baseSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "isOnRaydium",
            "type": "bool"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleIsEnd",
            "type": "bool"
          },
          {
            "name": "feeMint",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                80
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreatePumpArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "DepositArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "type": "string"
          },
          {
            "name": "command",
            "type": "string"
          },
          {
            "name": "extraInfo",
            "type": "string"
          },
          {
            "name": "maxIndex",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u8"
          },
          {
            "name": "cost",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeConfigArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platform",
            "type": "publicKey"
          },
          {
            "name": "feeRecipientAccount",
            "type": "publicKey"
          },
          {
            "name": "depositAccount",
            "type": "publicKey"
          },
          {
            "name": "baseMinSupply",
            "type": "u64"
          },
          {
            "name": "baseMaxSupply",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "baseMinFeeRate",
            "type": "u64"
          },
          {
            "name": "baseMaxFeeRate",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PreSaleBuyArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "preSaleBuyAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreatePreSaleDonateArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "slotEnable",
            "type": "bool"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleDevReserveAmount",
            "type": "u64"
          },
          {
            "name": "preSaleDonateAmount",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CreatePreSaleArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "supply",
            "type": "u64"
          },
          {
            "name": "target",
            "type": "u64"
          },
          {
            "name": "slotEnable",
            "type": "bool"
          },
          {
            "name": "initVirtualQuoteReserves",
            "type": "u64"
          },
          {
            "name": "initVirtualBaseReserves",
            "type": "u64"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "sellFeeBps",
            "type": "u64"
          },
          {
            "name": "createFee",
            "type": "u64"
          },
          {
            "name": "isLaunchPermitted",
            "type": "bool"
          },
          {
            "name": "preSaleInitialPrice",
            "type": "u64"
          },
          {
            "name": "preSaleBuyFee",
            "type": "u64"
          },
          {
            "name": "preSaleSellFee",
            "type": "u64"
          },
          {
            "name": "preSaleIsFeePercentage",
            "type": "bool"
          },
          {
            "name": "preSaleDevReserveAmount",
            "type": "u64"
          },
          {
            "name": "preSaleSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PreSaleSellArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "preSaleSellAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UpdateConfigArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "param",
            "type": "u8"
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Withdraw2Args",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "orderId",
            "type": "string"
          },
          {
            "name": "cost",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TradeEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "newQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "newBaseSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "userQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "userBaseBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "should2raydium",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "receiver",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PermitEvent",
      "fields": [
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "should2raydium",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "command",
          "type": "string",
          "index": false
        },
        {
          "name": "extraInfo",
          "type": "string",
          "index": false
        },
        {
          "name": "maxIndex",
          "type": "u8",
          "index": false
        },
        {
          "name": "index",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent2",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost1",
          "type": "u64",
          "index": false
        },
        {
          "name": "mint2",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost2",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "command",
          "type": "string",
          "index": false
        },
        {
          "name": "extraInfo",
          "type": "string",
          "index": false
        },
        {
          "name": "maxIndex",
          "type": "u8",
          "index": false
        },
        {
          "name": "index",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "Withdraw2Event",
      "fields": [
        {
          "name": "systemAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "receiverAccount",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "cost",
          "type": "u64",
          "index": false
        },
        {
          "name": "orderId",
          "type": "string",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePreSaleEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurvePreSale",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "sellFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleInitialPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleBuyFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSellFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsFeePercentage",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleDevReserveAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "slotEnable",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePreSaleDonateEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        },
        {
          "name": "bondingCurvePreSale",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "sellFeeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "createFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "isLaunchPermitted",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleInitialPrice",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleBuyFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSellFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsFeePercentage",
          "type": "bool",
          "index": false
        },
        {
          "name": "preSaleDevReserveAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleDonateAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "slotEnable",
          "type": "bool",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PreSaleTradeEvent",
      "fields": [
        {
          "name": "quoteMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "baseMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "baseAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "isBuy",
          "type": "bool",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "newQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "newBaseSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "userQuoteBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "userBaseBalance",
          "type": "u64",
          "index": false
        },
        {
          "name": "supply",
          "type": "u64",
          "index": false
        },
        {
          "name": "target",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualQuoteReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "initVirtualBaseReserves",
          "type": "u64",
          "index": false
        },
        {
          "name": "preSaleIsEnd",
          "type": "bool",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u64",
          "index": false
        },
        {
          "name": "price",
          "type": "u64",
          "index": false
        },
        {
          "name": "initDevReserveSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "initPreSaleSupply",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePumpEvent",
      "fields": [
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "symbol",
          "type": "string",
          "index": false
        },
        {
          "name": "uri",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAdmin",
      "msg": "Invalid admin."
    },
    {
      "code": 6001,
      "name": "InvalidParameters",
      "msg": "Invalid parameters."
    },
    {
      "code": 6002,
      "name": "InvalidInputUpdateParam",
      "msg": "Invalid input update param."
    },
    {
      "code": 6003,
      "name": "QuoteTokenDeleted",
      "msg": "Quote token is deleted."
    },
    {
      "code": 6004,
      "name": "InvalidInputSupply",
      "msg": "Invalid input supply."
    },
    {
      "code": 6005,
      "name": "OnRaydium",
      "msg": "This token is on the raydium, please swap on the raydium"
    },
    {
      "code": 6006,
      "name": "ExceededSlippage",
      "msg": "Exceeds desired slippage limit"
    },
    {
      "code": 6007,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens to sell"
    },
    {
      "code": 6008,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    },
    {
      "code": 6009,
      "name": "InvalidPlatform",
      "msg": "Invalid platform"
    },
    {
      "code": 6010,
      "name": "OnBondingCurve",
      "msg": "This token is on the bonding curve."
    },
    {
      "code": 6011,
      "name": "InvalidFeeBps",
      "msg": "Invalid fee bps."
    },
    {
      "code": 6012,
      "name": "AlreadyInitialized",
      "msg": "already initialized"
    },
    {
      "code": 6013,
      "name": "Unauthorized",
      "msg": "Unauthorized for Collection"
    },
    {
      "code": 6014,
      "name": "NotInitialized",
      "msg": "not initialized"
    },
    {
      "code": 6015,
      "name": "InvalidBuyFeeBps",
      "msg": "Invalid buy fee bps."
    },
    {
      "code": 6016,
      "name": "InvalidSellFeeBps",
      "msg": "Invalid sell fee bps."
    },
    {
      "code": 6017,
      "name": "InvalidFeePercentage",
      "msg": "Invalid fee percentage"
    },
    {
      "code": 6018,
      "name": "MissingDevToken",
      "msg": "Missing developer token account"
    },
    {
      "code": 6019,
      "name": "PreSaleIsEnd",
      "msg": "Pre-sale is end"
    },
    {
      "code": 6020,
      "name": "InsufficientPreSaleTokens",
      "msg": "Insufficient pre-sale tokens available"
    },
    {
      "code": 6021,
      "name": "PreSaleIsNotEnd",
      "msg": "Pre-sale is not end"
    },
    {
      "code": 6022,
      "name": "NotEnoughPreSaleTokens",
      "msg": "Not enough pre-sale tokens"
    },
    {
      "code": 6023,
      "name": "InsufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6024,
      "name": "InvalidAssociatedTokenAccount",
      "msg": "Invalid associated token account"
    }
  ]
};
