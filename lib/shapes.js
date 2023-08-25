class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor; 
    }

    render() {
        return ''; // Implement this method in child classes
    }
}

class Triangle extends Shape {
    render() {
        return `
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 90,90 10,90" fill="${this.color}" />
                <text x="30" y="60" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

class Circle extends Shape {
    render() {
        return `
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="${this.color}" />
                <text x="25" y="55" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}

class Square extends Shape {
    render() {
        return `
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
                <text x="30" y="60" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}


module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
};