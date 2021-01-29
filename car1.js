function Car() {
    this.height = 400;
    this.width = 50;
    this.x = this.width;
    this.y = this.height;
    this.img = new Image();
    this.img.src = "car3.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y, 50, 100);
    };
    this.moveLeft = function () {
        if (this.x >= 50) {
            this.x -= 50;
        }
    };
    this.moveRight = function () {
        if (this.x <= 50) {
            this.x += 50;
        }
    }
}

function moveCar(evt) {
    switch (evt.keyCode) {
        case 37:
            ctx.clearRect(car.x, car.y, car.x + 50, car.y + 100)
            car.moveLeft();
            car.draw()
            break;
        case 39:
            ctx.clearRect(car.x, car.y, car.x + 50, car.y + 100)
            car.moveRight();
            car.draw()
            break;
            car.draw();
            break;
        case 32:
            document.location.reload();
            break;
    }
}
