const tel = "89245470625";
let success = false;
let error = "Неизвестная ошибка";

if (tel.length === 11)
{
    switch(tel[0])
    {
        case "8": success = true; break;
        case "7": error = "Первая цифра 7";break;
        default: console.log(error);break;
    }
}
console.log(success);
console.log(error);

const s = (success ? "Тест пройден" : "Тест не пройден");
console.log(s);