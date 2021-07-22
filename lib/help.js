const commands = [
    {name: 'users', description: 'shows every user exist.', nameColor: '\x1b[36m%s\x1b[0m', descriptionColor: '\x1b[33m'},
    {name: 'databases', description: 'shows every database exist.', nameColor: '\x1b[36m%s\x1b[0m', descriptionColor: '\x1b[33m'}
]

function help(console) {
    commands.forEach(command => {
        console('  '+command.nameColor, command.name, '-', `${command.descriptionColor}${command.description}`, "\x1b[0m");
    })
}

module.exports = help