// const nearAPI = require("near-api-js");
// const { connect } = nearAPI;

// const config = {
//   networkId: "mainnet",
//   nodeUrl: "https://rpc.mainnet.near.org",
//   walletUrl: "https://wallet.mainnet.near.org",
//   helperUrl: "https://helper.mainnet.near.org",
//   explorerUrl: "https://explorer.mainnet.near.org",
// };

// const searchAccount = 'dsrvlabs.poolv1.near';

// const findAccount = async () => {
//   try {
//     const near = await connect(config);
//     const account = await near.account(searchAccount);
//     const accountBalance = await account.getAccountBalance();
//     console.log(accountBalance);
//   } catch (error) {
//     console.error(error);
//   }
// }

// findAccount(searchAccount);