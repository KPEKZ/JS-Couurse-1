const li = [1,4,5];
const ob = {"a":1, "b":4};
for (let n in li )
{
    console.log(li[n]);
}

for (let m of li)
{
    console.log(m);
}

for (let k in ob)
{
    console.log(ob[k]);
}

const films = [ {"name": "Титаник", "money": 1e5},
    {"name": "Смешарики", "money": 2e5+3e4},
    {"name": "Рапунцель", "money": 2e4+3e3},
    {"name": "Один дома", "money": 4e5+9e4}];


let moneyExtra = 0;

for (let film of films) {
    
    moneyExtra += film.money;
}
console.log(moneyExtra);