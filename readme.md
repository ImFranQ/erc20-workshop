# ERC 721 Workshop

A project for testing purpose

## Setup

Install nodejs global dependencies `npm i -g ganache-cli truffle`

Install project dependencies `npm i`

Run a development network with the command `ganache-cli`

Configure your network in `truffle.config.js`

```
module.exports = {
  // ...
  networks: {
    // ...
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    }
  }
  // ...
}
```

### Compille contract

`truffle compile ./contracts/MyTokenCoin.sol`

### Test contract

`truffle compile ./test/my_token_coin.sol`

### Deploy to rinkeby 

* Create file environment `cp .env.example .env`
* Set `.env` values
* Run `truffle migrate --network rinkeby`

### Project Exmaple

See the contract example [here](https://rinkeby.etherscan.io/token/0xF0dE48c6D6500D8131c318D98AEE453d5818E781) 