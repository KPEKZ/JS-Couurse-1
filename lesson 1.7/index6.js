let films = ["Один дома", "Титаник","Смешарики","Легенда 17"," Аватар"];
films2 = (["Легенда 18"]);

const s2 = films.join("; ");
const s = "У нас есть фидьмы " + s2;
console.log(s);
const films3 = s.split("; ");
//films.sort();
//films.reverse();
//films.splice(2, 2);
console.log(films3);
