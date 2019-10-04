//Install express server
const express = require('express');
const path = require('path');
const Web3 = require('web3');
const web3 = new Web3('https://pvm7X1mh4FJv43:xmxuWERB2nDkwv7RHdns3@eth.rollercoin.com');
const app = express();

app.get('/*', function(req,res) {
  res.json(web3);
});
app.listen(process.env.PORT || 11110);
