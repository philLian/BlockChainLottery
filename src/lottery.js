import web3 from './web3';
const address = '0xB1E38855CBd902F3fc1fd7d2c873050843d0FD44';
const abi =[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":false,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":false,"inputs":[],"name":"enetr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},
{"constant":false,"inputs":[],"name":"pickwiner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];


export default new web3.eth.Contract(abi, address);
