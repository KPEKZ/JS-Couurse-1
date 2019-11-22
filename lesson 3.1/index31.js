const films = [ {"name": "Титаник", "money": 1e5},
                {"name": "Смешарики", "money": 2e5+3e4},
                {"name": "Рапунцель", "money": 2e4+3e3},
                {"name": "Один дома", "money": 4e5+9e4}];

let n;
let moneyExtra = 0;

for( n = 0; n <films.length; n++)
{
    const film = films[n];
    moneyExtra+=film.money;
    console.log(film.money);
}

console.log(moneyExtra);
