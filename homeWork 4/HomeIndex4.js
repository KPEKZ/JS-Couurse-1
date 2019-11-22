function foo(a) {

    let composition = a;

    function foo2(b) {
        if (b === undefined)
        {
            b =1;
            return console.log(composition);
        }
        else {
            b = b;

            composition *= b;


            return foo2;
        }
    }



    return foo2;
}


foo(1)(2)(3)(4)(4)();