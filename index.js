
const bufferToString = require('buffer-to-string')


if (process.argv.length<3) {
    console.error('Usage: node ../getPubKey 0x(Your_private_key)')
    process.exit(-1)
}

try {
    
    privateKey = process.argv[2] //'0x0000000000000000000000000000000000000000000000000000000000000001'

    const util = require('ethereumjs-util')

    console.log( "0x"+bufferToString( util.privateToPublic(privateKey), 180 ).replace(/ /g,'') )

} catch(e) {
    console.error('\n\nSomething went wrong, check private key is valid and starts with "0x"\n\n')
    console.error(e)
    console.log('Usage: node ../getPubKey 0x(Your_private_key)')
    process.exit(-1)
}