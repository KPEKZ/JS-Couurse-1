let result =1;

function foo(arg) {

    if (arg === undefined)
    {
        return result;
    }
    result *=arg;
    return foo;
}

console.log(foo(5)(3)(2)());

