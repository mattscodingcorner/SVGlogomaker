
module.exports = {
    getUserInput: [
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
        {
            type: 'input',
            name: 'textColor', 
            message: 'Enter text color:',
        },
    ]
};
