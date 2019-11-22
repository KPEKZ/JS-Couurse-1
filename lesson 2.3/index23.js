const a = true;
const b = true;
const ab = a && b;
const c = true;
const d = true;
const cd = c||d;
const e =true;
const f =!(e);

 if (f)
 {
     console.log("верно");
 }

 const tel = "89245470625";

 if (tel.length == 11 && tel[0]== "8")
     console.log("Тест пройден");
 else if (tel.length ==11 && tel[0] == "7")
     console.log("Первая цифра 7");
 else
     console.log("Тест не пойден");