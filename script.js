function changeBackgroundColor() {
    // Generate a random hex color code
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Set the body background color to the random color
    document.body.style.backgroundColor = randomColor;
}