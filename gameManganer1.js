let car = new Car();
let arrEnemyCar = []
let arry = [-100, -300, -500]
let score = 0
let repeat = 1000 / 60
var c = document.getElementById("canvas")
var ctx = c.getContext("2d")
ctx.beginPath();

function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#dddb00";
    ctx.fillText("Score: " + score, 8, 20);
}

arry.forEach(function (y) {
    let enmycar = new enemyCar(Math.floor(Math.random() * 3) * 50, y);
    arrEnemyCar.push(enmycar);
})

function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < arrEnemyCar.length; i++) {
        arrEnemyCar[i].moveEnemyCar()
    }
    car.draw()
    drawScore()
    setTimeout(start, repeat - score / 2)
}

start()

function docready() {
    window.addEventListener("keydown", moveCar)
}
