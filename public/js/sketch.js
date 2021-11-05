let canvas;

let width = window.innerWidth;
let height = window.innerHeight;

let colorPicker;
let button;

let canvasWidth = width/2;
let canvasHeight = height/2;

let input;

//for client side socket connection
let socket;

function setup() {
    canvas = createCanvas(canvasWidth,canvasHeight); //built-in function from p5.js
    createElement("br");
    
    button = createButton("delete");
    button.position(0,canvasHeight + 10);
    button.mousePressed(removeCanvas);

    input = createInput('Add your task');       //adds input filed
    input.position(button.width + 5, canvasHeight + 10);    //5px gap between the two
        
    colorPicker = createColorPicker('#EDEDED');
    colorPicker.position(input.width + 50,canvasHeight + 10);
    canvas.drop(droppedFile);

    socket = io.connect('http://localhost:3000');
}

function removeCanvas() {
    remove(); // remove whole sketch on mouse press
} //we can execute remove() on delete button press {Global delete and local delete}

function draw() {
    background(colorPicker.color());
    //text(input.value(),100,100);    //make it draw only once
}

function droppedFile(file) {
    let img = createImg(file.data,'image');
    img.size(100,100);
    image(img,0,0,200,200);
}