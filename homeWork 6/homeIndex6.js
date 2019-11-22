class Bird
{

    constructor(n)
    {

        this.name = "Bird "+n;
        this.points =0;
        this.wasEaten =false;
    }

}


let Bird1 = new Bird("Bird1");
let Bird2 = new Bird("Bird2");
let Bird3 = new Bird("Bird3");
let Bird4 = new Bird("Bird4");
let Bird5 = new Bird("Bird5");
let Bird6 = new Bird("Bird6");
let Bird7 = new Bird("Bird7");
let Bird8 = new Bird("Bird8");
let Bird9 = new Bird("Bird9");
let Bird10 = new Bird("Bird10");

let MasBird = [];
let numb = 1;

while(numb <11)
{
    MasBird.push(new Bird(numb));
    numb++;
}



function GenerateRandomInteger(min,max) {
    return Math.floor(min+Math.random()*max);
}


function Game (MasBird)
{
    let BirdWinner ="";
    let countLive=10;
    while(countLive !=1)
    {
        let birdEats = GenerateRandomInteger(0, 10);
        let birdIsEaten= GenerateRandomInteger(0, 10);

        if (birdEats != birdIsEaten && MasBird[birdIsEaten].wasEaten !=true && MasBird[birdEats].wasEaten !=true) {
           MasBird[birdEats].points++;
           MasBird[birdIsEaten].wasEaten=true;
            countLive--;
        }
        BirdWinner = MasBird[birdEats].name;
    }


return BirdWinner;

}





console.log("Выиграла птица :" + Game(MasBird));
console.log(MasBird);