let angle;
let slider;
let startWeight = 11

function setup() {

    createCanvas(600, 600);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    slider.position(10,620)
    slider.width = 400
    slider.size(590)

}

function draw() {

    background(51);
    angle = slider.value();
    stroke(50, 200, 50);
    translate(width / 2, height);
    branch(150, startWeight);

}

function branch(len, wIn) {
    let weight = wIn - 1
    strokeWeight(weight)
    line(0,0,0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
            rotate(angle);
            branch(len * 0.67, weight);
        pop();

        push();
            rotate(-angle);
            branch(len * 0.67, weight);
        pop();
    };
}

