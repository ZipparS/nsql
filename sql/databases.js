const fs = require('fs')
const path = require('path')

function createDatabase(name) {
    fs.writeFileSync(path.resolve(__dirname, `../data/dbs/${name}`), name)
}

function removeDatabase(name) {
    fs.unlinkSync(path.resolve(__dirname, `../data/dbs/${name}`))
}

function showDatabases(callback) {
    const dbs = fs.readdirSync(path.resolve(__dirname, '../data/dbs'))
    if(!arguments.length) return dbs
    if(typeof callback === 'function') return callback(dbs)

    throw new Error('type of callback should be a function.')
}

module.exports = {
    create: createDatabase,
    remove: removeDatabase,
    show: showDatabases
}