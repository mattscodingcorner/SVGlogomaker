const generateSVG = require('./lib/svgGenerator.js');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const {getUserInput} = require("./lib/userInput.js");
const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
    const {shape, color, text} = await inquirer.prompt(getUserInput) 
        let objectShape;

        switch (shape) {
            case 'triangle':
                objectShape = new Triangle();
                break;
            case 'circle':
                objectShape = new Circle();
                break;
            case 'square':
                objectShape = new Square();
                break;
            default:
                console.log('Invalid shape choice');
                return;
        }

        objectShape.setColor(color);
        const svgContent = generateSVG(objectShape, color, text);

        // Save the SVG content to a file
        fs.writeFile('output.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
                return;
            }
        
        // Implement the logic to write svgContent to a .svg file

        console.log('Logo generated and saved!');
        });
    };


main();
