const a = 10;
let s = 's';
s =a;

let b =0;

b++;

b +=true;

b += +'1';

let li =  [1,2,3,4,5,6,7,8];
li.splice(3,3);
li.push(10);
li.push(5e9);

let ob = { numbers : "", newNumber : ""};

ob.numbers = li.join(";");
ob.newNumber = li.concat(li[4] , li[4]).join(";");


console.log(ob);
