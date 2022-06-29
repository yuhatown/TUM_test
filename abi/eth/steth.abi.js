const stethContractABI = [
  {
    constant: true,
    inputs: [
      { name: "_id", type: "uint256", internalType: "uint256" },
      { name: "_fullInfo", type: "bool", internalType: "bool" },
    ],
    name: "getNodeOperator",
    outputs: [
      { name: "active", type: "bool", internalType: "bool" },
      { name: "name", type: "string", internalType: "string" },
      { name: "rewardAddress", type: "address", internalType: "address" },
      { name: "stakingLimit", type: "uint64", internalType: "uint64" },
      { name: "stoppedValidators", type: "uint64", internalType: "uint64" },
      { name: "totalSigningKeys", type: "uint64", internalType: "uint64" },
      { name: "usedSigningKeys", type: "uint64", internalType: "uint64" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  }
];

export default stethContractABI;
