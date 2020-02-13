let angle
let angleSlider
let startWeight = 11

function setup() {
    createCanvas(800, 600)    
    angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01)
    angleSlider.position(10,620)
    angleSlider.width = 300
    angleSlider.size(590)
}

function draw() {
    background(0)
    translate(width / 2, height)
    angle = angleSlider.value()/2
    stroke(50, 50, 250)
    branch(150, startWeight)
    translate(0, -150)
}

function branch(length, weightIn) {
    let weight = weightIn - 1
    strokeWeight(weight)
    line(0,0,0, -length)
    translate(0, -length)

    if (length > 8) {
        push()
            rotate(angle)
            branch(length * 0.67, weight)
        pop()

        push()
            rotate(-angle)
            branch(length * 0.67, weight)
        pop()

        push()
            rotate(-angle -angle)
            branch(length * 0.67, weight)
        pop()
    }
}

