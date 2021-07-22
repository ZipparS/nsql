class Extractor {
    
    static USER_CREATE = command => {
        const flags = getFalgs(command)
        
        return 'name'
    }

    static USER_REMOVE = command => {
        const flags = getFalgs(command)

        return 'name'
    }

    static DATABASE_CREATE = command => {
        const flags = getFalgs(command)

        return 'name'
    }

    static DATABASE_REMOVE = command => {
        const flags = getFalgs(command)

        return 'name'
    }

}
module.exports = Extractor

function getFalgs(command) {
    return command.filter(arg => arg.includes('-'))
}