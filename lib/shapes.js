class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return ''; // Implement this method in child classes
    }
}

class Triangle extends Shape {
    // Implement Triangle class methods and render()
}

class Circle extends Shape {
    // Implement Circle class methods and render()
}

class Square extends Shape {
    // Implement Square class methods and render()
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
};
