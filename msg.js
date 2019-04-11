#!/usr/bin/env node
// usage:
// ./msg.js --alert "We are experiencing technical difficulties. Please be patient!"
var fs = require('fs')
var args = process.argv.slice(2)
var flag = args[0].replace(/-/g, '').toLowerCase()
// default to alert
var classlist = 'alert'
var msg = args[1]
var welcomemsg = 'Welcome to CCA VAULT'
var html = ''
var filename = 'pack/resource-centre.properties'
var isDelete = (flag === 'delete' || flag === 'd'  || flag === 'remove')

if (flag === 'help' || flag === 'h') {
    console.log('Writes an alert message onto the VAULT login screen by rewriting the com.tle.web.sections.equella.logon.title string in resource-centre.properties.\n\nUsage:\n\t./msg.js --alert "We are experiencing technical difficulties"\n\t./msg.js --error "The eagle has landed!"\n\t./msg.js --delete')
    process.exit(0)
} else if (!msg && !isDelete) {
    console.error('Error: must provide text for a message.')
    process.exit(1)
} else if (flag === 'error') {
    html = welcomemsg + `<br><br><p class="alert alert-error">${msg}</p>`
} else if (flag === 'alert') {
    html = welcomemsg + `<br><br><p class="alert">${msg}</p>`
} else if (isDelete) {
    // just set HTML to default message
    html = welcomemsg
}

fs.readFile(filename, function (err, buffer) {
    var text = buffer.toString().replace(
        /com\.tle\.web\.sections\.equella\.logon\.title.*/,
        'com.tle.web.sections.equella.logon.title = ' + html
    )

    fs.writeFile(filename, text, function (err) {
        if (!err) {
            console.log('Successfully wrote the message into', filename)
        }
    })
})
