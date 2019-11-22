const goodNumbers = [];

let n = 1e4;
while(n < 150000)
{
    let sum =0;
    for (let m of [n-1,n-2,n-3])
    {
        sum +=m;
    }

    if (sum %100 ==52)
    {
        if (String(sum)[1] === "2")
        {goodNumbers.push(n);}

    }

    n++;
}

console.log((goodNumbers));