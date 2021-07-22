const fs = require('fs')
const path = require('path')

function checkoutUser(name) {
    const users = showUsers()
    return users.includes(name)

}

function createUser(name) {
    fs.writeFileSync(path.resolve(__dirname, `../data/users/${name}`), name)
}

function removeUser(name) {
    fs.unlinkSync(path.resolve(__dirname, `../data/users/${name}`))
}

function showUsers(callback) {
    const users = fs.readdirSync(path.resolve(__dirname, '../data/users'))
    if(!arguments.length) return users
    if(typeof callback === 'function') return callback(users)

    throw new Error('type of callback should be a function.')
}

module.exports = {
    create: createUser,
    remove: removeUser,
    show: showUsers,
    checkout: checkoutUser
}