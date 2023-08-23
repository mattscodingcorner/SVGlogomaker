const inquirer = require('inquirer');

function getUserInput(callback) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['triangle', 'circle', 'square'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color:',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo:',
        },
    ]).then((answers) => {
        callback(answers);
    });
}


module.exports = getUserInput;
