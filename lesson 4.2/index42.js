const get = function () {
    console.log("hey");
}

function getTempPrediction(firstDay, secondDay)
{
    const nextDay = 0.5 *firstDay + 0.5*secondDay;
    return nextDay;
}

get();

function foo(a,b) {
    b === undefined ? b =5 : b=b;
    console.log(a);
    console.log(b);

}

foo(1);

function SaveDays(...days) {
    console.log(days);
    let sum =0;
    days.forEach(day => sum +=day);
    return sum/days.length;
}

console.log(SaveDays(20, 20, 20,));