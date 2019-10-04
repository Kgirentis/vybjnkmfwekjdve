//Install express server
const express = require('express');
const path = require('path');
const app = express();

app.get('/*', function(req,res) {
  res.json({success: false});
});
app.listen(process.env.PORT || 11110);
