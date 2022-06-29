import stethContractABI from "./abi/eth/steth.abi.js";
import Web3 from "web3";
import nearAPI from "near-api-js";

//provider
const {
  eth: { Contract },
} = new Web3(
  "https://ethereum-mainnet-rpc.allthatnode.com/BHtFTtG804CTnzlZT7nrxOe7G4131hYg"
);
const { connect } = nearAPI;
const config = {
  networkId: "mainnet",
  nodeUrl: "https://rpc.mainnet.near.org",
};
const near = await connect(config);

//contract
const etherAccount = "0x0000000000000000000000000000000000000000";
const lidoContractAddress = "0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5";

//account
const nearAccount = "dsrvlabs.poolv1.near";


//ethereum
const myContract = new Contract(stethContractABI, lidoContractAddress, {
  from: etherAccount,
});
const etherStaking = await myContract.methods.getNodeOperator(6, true).call();

//near
const nearStaking = await near.connection.provider.query({
  request_type: "view_account",
  finality: "final",
  account_id: nearAccount,
});

//run
console.log(`steth Staking: ${etherStaking.usedSigningKeys * 32}`)
console.log(`near Staking: ${nearStaking.locked.slice(0, 12)/100000}`);