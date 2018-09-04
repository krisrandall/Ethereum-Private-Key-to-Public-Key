
// and here is some logic to convert a public key to an ethereum address

var eu = require('ethereumjs-util')

//var uncompressed_public_key_hex = '04320c6bb9c30cd4ee54484ad10b01d2742105a70b9333b2310be8e870344f18f23d70897cf0588510fc28cf76b637902179cc2d3ead649718bef61c6eb95cec7e'
  var uncompressed_public_key_hex = '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8'

var upk_buf = new Buffer(uncompressed_public_key_hex, 'hex')
var addr_buf = eu.pubToAddress(upk_buf.slice(1,65))

var addr = addr_buf.toString('hex')

console.log("addr: " + eu.toChecksumAddress(addr) )


