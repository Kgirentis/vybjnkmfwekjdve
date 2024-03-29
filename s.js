//Install express server
const express = require('express');
const path = require('path');
const Web3 = require('web3');
var Personal = require('web3-eth-personal');

// "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
var personal = new Personal(Personal.givenProvider || 'https://pvm7X1mh4FJv43:xmxuWERB2nDkwv7RHdns3@eth.rollercoin.com');
const web3 = new Web3('https://pvm7X1mh4FJv43:xmxuWERB2nDkwv7RHdns3@eth.rollercoin.com');
const app = express();

app.get('/*', async function(req,res) {
  //const t = await web3.fromWei(web3.eth.getBalance(web3.eth.coinbase));
//   let t = "";
//   function checkAllBalances() { var i =0; eth.accounts.forEach( function(e){ t += "  eth.accounts["+i+"]: " +  e + " \tbalance: " + web3.fromWei(eth.getBalance(e), "ether") + " ether\n"; i++; })}; 
//   checkAllBalances();
  const t = await web3.eth.getAccounts();
  let m = [];
  for(let i = 0; i < t.length && i < 100; i++) {
    let k = await web3.eth.getBalance(t[i]);
    m.push({
      address: t[i],
      balance: k
    })
  }
  
  res.json({r: m});
});
app.listen(process.env.PORT || 11110);
