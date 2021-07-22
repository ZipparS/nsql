const prompts = require('prompts')

const parser = require('./parser')

async function cli(props) {

    const command = await prompts(props)
    
    const response = await parser(props, command)

    const newProps = Object.assign(props, response)

    cli(newProps)
}

module.exports = cli