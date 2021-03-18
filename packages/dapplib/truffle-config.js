require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'heavy kiwi brand venture strike rival noble arrow grid praise army genius'; 
let testAccounts = [
"0x972cd70c75ed767c61646a9baee744788c5c1062c13ad227cc62d6ba974668ac",
"0xea532845909ffec090187c37467c4de3fbbb38d30ba5db782142672ad6a93f49",
"0x7e457db98a1dbd7cc1fa869dfab1c5c7f339de516c00f4df223b50f16b4df4df",
"0x0744e70b7cdae449c19af79fc7d40998a8d33255c4de4f2263a67fce1f4612bc",
"0x9c0281e219274e42035bfb8f6884067850f2acc6916e8fb99cd9cadc4cf4d318",
"0xe8ba155cae832ae91430b0d65df5c2fdf3221b0a901bc6521f5ebea13927f75c",
"0x6688b01f3e077ebadcc8e526ff8939aa7ababdea2c7e19a144f3d2e1e3f4bba6",
"0x7db8d642953360e7db9ec585496ff8b804d3f7376e7f05a5453b1e18d82a793e",
"0x51e2015d9457a6a38e8136cb61a49a37255c90f2071c48e3a1c33fbb7c653b6d",
"0x56e042a9cebc98c3d1f13329aba2187852b568f1d6773cba013d9ef6ba5600c2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

