const rabbit =
    {
        "color":"red",
        "speed":10,
        "name": "vasya",
        "getDistance": function (time,speed) {
            return time*this.speed;
        }
    };

function  getDistance(time) {
    return time *rabbit.speed;
}


console.log(rabbit.getDistance(60,60));