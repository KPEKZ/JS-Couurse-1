class Bird
{
    fly()
    {
        this.distance +=100;
    }

}

const eagle = new Bird();
eagle.distance = 0;

eagle.fly();

console.log(eagle.distance);


const owl = new Bird();
owl.distance =0;
owl.fly();

console.log(owl.distance);