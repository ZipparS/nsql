const cli = require('./lib/cli')
const nsql_server = require('./lib/server')

const CONFIG = require('./config')

////////////////////////////////////////////
// RUN SERVER if "server" argument passed
////////////////////////////////////////////
if (process.argv.includes('server')) nsql_server(CONFIG.SERVER_PORT)
    
////////////////////////////////////////////
// RUN CLI if "cli" argument passed
////////////////////////////////////////////
if (process.argv.includes('cli')) cli(CONFIG.CLI_OPTIONS)


