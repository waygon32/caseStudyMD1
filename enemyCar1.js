function enemyCar(cx, cy) {
    this.speed = 5
    this.x = cx;
    this.y = cy;
    this.img = new Image();
    this.img.src = "car1.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y - 50, 50, 100)
        this.collision(car)
    };
    this.moveEnemyCar = function () {
        this.y += this.speed;
        this.draw()
        if (this.y > 500) {
            this.y = -50;
            score++
            this.x = Math.floor(Math.random() * 3) * 50;
        }
    }
    this.collision = function (car) {
        if (this.x == car.x && this.y == car.y) {
            alert("Gamever, điểm của bạn là " + score + " nhấn space để chơi lại")
            document.location.reload();
        }
    }
}
