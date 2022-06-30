import stethContractABI from "../abi/eth/steth.abi.js";
import Web3 from "web3";
import nearAPI from "near-api-js";
import mysql from "mysql2";
import dbconfig from "../config/database.js";
const connection = mysql.createConnection(dbconfig);

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

//account&contract
const etherAccount = "0x0000000000000000000000000000000000000000";
const lidoContractAddress = "0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5";
const nearAccount = "dsrvlabs.poolv1.near";
const myContract = new Contract(stethContractABI, lidoContractAddress, {
  from: etherAccount,
});

const etherStaked = async () => {
  try {
    const ethNodeInfo = await myContract.methods
      .getNodeOperator(6, true)
      .call();
    const staked = ethNodeInfo.usedSigningKeys * 32;
    connection.query(
      `INSERT INTO wallet_staked (name_id, staked) VALUES (1, ${staked});`
    );
  } catch (error) {
    console.error(error);
  }
};

const nearStaked = async () => {
  try {
    const nearNodeInfo = await near.connection.provider.query({
      request_type: "view_account",
      finality: "final",
      account_id: nearAccount,
    });
    const staked = nearNodeInfo.locked.slice(0, 12) / 100000;
    connection.query(
      `INSERT INTO wallet_staked (name_id, staked) VALUES (5, ${staked});`
    );
  } catch (error) {
    console.error(error);
  }
};

//run
etherStaked();
nearStaked();
