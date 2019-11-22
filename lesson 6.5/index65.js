const bird = {"flies":true};

function Eagle(name) {
    this.name = name;
    this.speed =100;
}

Eagle.prototype = bird;
const eagle1 = new Eagle("Alex");
console.log(eagle1);
console.log(eagle1.flies);

const eagle2 = new Eagle("Martin");
console.log(eagle2);
console.log(eagle2.flies);