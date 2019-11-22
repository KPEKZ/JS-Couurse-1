const films = [ {"name": "Титаник", "money": 1e5},
    {"name": "Смешарики", "money": 2e5+3e4},
    {"name": "Рапунцель", "money": 2e4+3e3},
    {"name": "Один дома", "money": 4e5+9e4}];

const origins = {"Титаник": "РФ","Смешарики": "США","Рапунцель": "Р Беларусь", "Один дома": "США"};

/*for(let film of films)
{
    film["country"] = origins[film.name];

}*/
let money =0;
films.map(film => film["country"] = origins[film["name"]]);
films.forEach(film => console.log(film));
films.forEach(film => money += film.money);
console.log(films);
console.log(money);