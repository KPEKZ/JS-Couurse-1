function Bird(speed) {
    this.distance =0;
    this.speed = speed;
    this.fly = function () {
        this.distance +=speed;
    }
}

const eagle = new Bird(100);
eagle.fly();

const owl = new Bird(20);
owl.fly();

console.log(eagle.distance);
console.log(owl.distance);