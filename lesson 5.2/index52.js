const s = '{"a":1, "b":2}';

const ob = JSON.parse(s);
ob.b = 30;
const s2 = JSON.stringify(ob);
console.log(s2);