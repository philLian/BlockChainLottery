const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'hood defense inflict cheese bid gallery leader swap father drop desert kiss',
    'https://ropsten.infura.io/v3/966b05470af24381bc03102e06b2b5ae'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
  console.log( interface);
  const accounts = await web3.eth.getAccounts();
  // console.log('Attemp to deploy contract', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: '0x' + bytecode})
    .send({from: accounts[0], gas: '1000000'});
  // console.log('Result', result);
  console.log('contract deployed to', result.options.address);
}

deploy();
