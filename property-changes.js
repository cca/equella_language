const async = require("async")
const properties = require("properties")

const options = {
    namespaces: false,
    sections: false,
    variables: false,
    include: false,
    path: true
}

if (process.argv[2] === '-h' || process.argv[2] === '--help') {
    console.log('usage: node property-changes.js reference-lang-pack/admin-console.properties pack/admin-console.properties\n\nshows the difference between the reference language pack (first arg) and what we have (second arg)')
}

const newfile = process.argv[2]
let newprops = []
const ourfile = process.argv[3]
let ourprops = []

function readPropFile (filename, callback) {
    properties.parse(filename, options, (err, props) => {
        return callback(err, props)
    })
}

function analyzeDifferences (err, results) {
    if (err) throw err

    let newProperties = results[0]
    let ourProperties = results[1]
    let newPropertyNames = Object.keys(newProperties).sort()
    let ourPropertyNames = Object.keys(ourProperties).sort()

    console.log('TO REMOVE. Properties in our file not present in the new file:')
    let toRemove = ourPropertyNames.filter(prop => !newPropertyNames.includes(prop))
    console.log(toRemove)

    console.log('TO ADD. Properties in the new file not present in our file:')
    let toAdd = newPropertyNames.filter(prop => !ourPropertyNames.includes(prop))
    console.log(toAdd)

    // not going to print this one for now since it's probably enormous
    let propertyValueDifferences = newPropertyNames.filter(prop => ourProperties.hasOwnProperty[prop] && newProperties[prop] !== ourProperties[prop])
    // console.log('Properties with value differences between the two files:')
    // console.log(propertyValueDifferences)
}

async.parallel([(cb) => readPropFile(newfile, cb), (cb) => readPropFile(ourfile, cb) ], analyzeDifferences)
