import BigNumber from "bignumber.js";
export const mainnet_create_config = [
    {
        id: 0,
        chain: "solana",
        asset_type: "spl",
        contract_addr: "8iFREvVdmLKxVeibpC5VLRr1S6X5dm7gYR3VCU1wpump", // quote mint
        name: "g",
        symbol: "g",
        client_symbol: "g",
        system_decimal: 6,
        token_decimal: 6,
        pump_fee_recipient: "4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6",
        min_fixed_price: 50000000,
    },
    {
        id: 1,
        chain: "solana",
        asset_type: "origin",
        contract_addr: "So11111111111111111111111111111111111111112",
        name: "sol",
        symbol: "sol",
        client_symbol: "sol",
        system_decimal: 9,
        token_decimal: 9,
        pump_fee_recipient: "4rUGpBGgPBKjdX6wokomLogDtkD1dWkF69s5iGhMsmt6",
        min_fixed_price: 5000000,
    },
];

export const devnet_create_config = [
    {
        id: 0,
        chain: "solana",
        asset_type: "spl",
        contract_addr: "F54vg3Py5qUf9LXhneu9bPEKahGCxcAySUkWwBgjcqLQ",
        name: "g",
        symbol: "g",
        client_symbol: "g",
        system_decimal: 6,
        token_decimal: 6,
        pump_fee_recipient: "GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5",
        min_fixed_price: 50000000,
    },
    {
        id: 1,
        chain: "solana",
        asset_type: "origin",
        contract_addr: "So11111111111111111111111111111111111111112",
        name: "sol",
        symbol: "sol",
        client_symbol: "sol",
        system_decimal: 9,
        token_decimal: 9,
        pump_fee_recipient: "GnpaTWNTiK8HnBEzg9onjHkJvkqw3A7Jm86NXeUcU1M5",
        min_fixed_price: 5000000,
    },
];

function getFairLaunchPrice() {
    /*
        当前代币最小price计算方法：
        min_price = (42069 / 1000000000) / quote_price

        若quote_mint 精度为9，base_min_price = 0.0000001；
        quote_mint 精度为6，base_min_price = 0.0001；

        min_price>= base_min_price，采用min_price，反之为base_min_price。
    */
}
