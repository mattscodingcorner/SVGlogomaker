const { Triangle } = require('./shapes');

describe('Triangle', () => {
    test('renders SVG for Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const svg = triangle.render();
        expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});