const boy = {"name" : "Ваня", "weight":170};

console.log(boy["name"]);

console.log(boy.weight);

boy.name = "КОТ";
console.log(boy);

const films = [];
const film1 = {"name" : "Титаник", "money": 2e6};
const film2 = {"name" : "Смешарики", "money": 1e5};

films.push(film1);
films.push(film2);

console.log(films);
console.log(films[0].name);