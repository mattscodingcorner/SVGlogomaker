function generateSVG(shape, color, text) {
    
    const shapeSVG = shape.render();

    // Generate the complete SVG content with shape, color, and text
    const svgContent = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="50" y="80" text-anchor="middle" fill="${color}">${text}</text>
        </svg>
    `;

    return svgContent;
}

module.exports = generateSVG;
