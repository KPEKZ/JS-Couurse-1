//task 1

for (let i=1e4; i < 15e4;i+=1)
{

    if (((i-1)+(i-2) +(i-3))%100 ==52) {
        console.log(i);
    }



}
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
//task 2
for (let j=1e4; j < 15e4;j+=2e3)
{

        let s = j.toString();

        if (s[1] == 2)
            console.log(s);

}

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
//два условия вместе
for (let k=1e4; k < 15e4;k++)
{
    if (((k-1)+(k-2) +(k-3))%100 ==52) {
        let s = k.toString();
        if (s[1] == 2)
            console.log(s);
    }




}