class Bird
{
    constructor(speed)
    {
        console.log("constructor");
        this.distance =0;
        this.speed =speed;
    }

    fly()
    {
        this.distance +=this.speed;
    }

}

const eagle = new Bird(100);

eagle.fly();

console.log(eagle.distance);


const owl = new Bird(20);

owl.fly();

console.log(owl.distance);

console.log(Object.keys(owl));