let fedorPoints = 200;
let petrPoints = 15;

if ( fedorPoints <=21 && fedorPoints > petrPoints  || (petrPoints >= 22 && fedorPoints <=21) )
    console.log("Выйграл Федор");
else if (petrPoints <=21 && petrPoints > fedorPoints || (fedorPoints >= 22 && petrPoints <=21))
    console.log("Выйграл Петр");
else console.log("Никто не выйграл!");