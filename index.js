const getUserInput = require('./lib/userInput.js');
const generateSVG = require('./lib/svgGenerator.js');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

function main() {
    getUserInput((userInput) => {
        let shape;

        switch (userInput.shape) {
            case 'triangle':
                shape = new Triangle();
                break;
            case 'circle':
                shape = new Circle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                console.log('Invalid shape choice');
                return;
        }

        shape.setColor(userInput.color);
        const svgContent = generateSVG(shape, userInput.color, userInput.text);

        // Save the SVG content to a file
        fs.writeFile('output.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
                return;
            }
        
        // Implement the logic to write svgContent to a .svg file

        console.log('Logo generated and saved!');
        });
    });
}

main();
