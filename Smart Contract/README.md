# HardHat Project
This project descibes the functionalities of the FuchaBin NFT project, including minting, setting the token URI, storing images to Pinata (IPFS), and running tests. It comes with the NFT Contract, a contract test, and a script that deploys and interacts with the contratc. The project is tested on the hardhat development network and the hyperspace testnet (FVM).

## Getting Started
### Requirements
* Node.js
* Npm or Yarn
* Git

### QuickStart
To clone the repo, run the following command in your shell:

```bash
git clone https://github.com/Rasta669/Fucha-on-FVM.git
```

To install dependencies and packages, run either of the following commands:

```
yarn install
```

or

```
npm intsall
```

To obtain a Filecoin-related address (t4). see [this link](https://github.com/filecoin-project/testnet-hyperspace) for instructions on linking your ETH address to Filecoin and accessing faucets for testnet testing. Set the `PRIVATE_KEY` in `.env`.

To check your ETH equivalent t4 address, run the following command:

```
npx hardhat get-address
```

### Deploying FuchaBins

To deploy `fuchaContract` on the Hardhat dev network, run the following command:

```
hh deploy --tags fucha
```

To deploy `fuchaContract to the Hyperspace testnet, run the followinng command:

```
hh deploy --tags fucha --network hyperspace
```


