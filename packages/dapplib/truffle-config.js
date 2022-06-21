require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note spider unusual hunt gloom front tower'; 
let testAccounts = [
"0x919eff628f6d29f13316a1613bf23fc5cd596dd36bb6cb61790efc0cb1becdde",
"0x2b5211271f8efcab85843806c437bab0aaf07bb626dd2a6c44b3aa513f223a98",
"0x32c8e8ad043af8639e01665771e92d19d444d8b6f24c4a04db68eebbf4ac204a",
"0x2688e755f0c0634f787b7a844b67cc157b99054e8f8efe88f01da28a6f57bf39",
"0x09e208948b15644f123590a2d2e7f60e794fc4050d8121bdb1077e4d3d0af451",
"0xb4ba6d965ec6e8113bfa0870f3cdcdfc7e87692fdad74716a7d2782aa3c0184a",
"0x89f1e2cc6eb0581e55a1d62028efa7ff1a7b5771e1a6ddd688f7e567fd3e3515",
"0xa8eeebd923ea340b19ebedf8d8e9f834e7a58c44e858c4ab23f70535419cee98",
"0x57924b0f917ebc4296e78fe43275578570e936e7c4aafe81a6c4c28c7e2093d7",
"0xc8cb10efe3e7b7adae43d7b70790b511646f707647e9a382e89b8c0e13f2cb8a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

