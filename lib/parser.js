
const sql = require('../sql')
const help = require('./help')
const Extractor = require('./extractor')

async function parser({message}, {command}) {

    if (!command || command[0] === 'exit' ) process.exit()

    if (command[0] === 'help') help(console.log)
    
    if (message === 'nsql') return nsql(command)

    if (message.split('/').length === 2) return user(command)

    if (message.split('/').length === 3) return database(command)
}

async function nsql(command) {
    if (command[0] === 'users') sql.users.show(console.table)
    if (command[0] === 'databases') sql.databases.show(console.table)
    
    if (command[0] === 'user') {
        if (command[1] === 'create') {
            
            sql.users.create(Extractor.USER_CREATE(command))
        }

        if (command[1] === 'remove') {
            sql.users.remove(Extractor.USER_REMOVE(command))
        }

        if (command[1] === 'show') sql.users.show(console.table)
    }

    if (command[0] === 'database') {
        if (command[1] === 'create') {
            sql.databases.create(Extractor.DATABASE_CREATE(command))
        }

        if (command[1] === 'remove') {
            sql.databases.remove(Extractor.DATABASE_REMOVE(command))
        }

        if (command[1] === 'show') sql.databases.show(console.table)
    }
}

function user(command) {

}

function database(command) {
}

module.exports = parser