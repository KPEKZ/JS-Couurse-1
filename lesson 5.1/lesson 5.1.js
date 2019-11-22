/*const li = [{"a":4, "b":5}, {"a":1,"b":2,"c":3}];

for (let ob of li)
{
    if (ob.hasOwnProperty("c"))
        console.log(ob.c);
    else {
        console.log("no such property");
    }
}*/

const ob = new Object();
ob.a =1;
ob.b=2;
//console.log(Object.keys(ob));

const keys = Object.keys(ob);
const values = Object.values(ob);

console.log(values);
