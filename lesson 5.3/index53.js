const response = {
    "success":true,
    "timestamp":1519296206,
    "base": "EUR",
    "date": "2019-10-24",
    "rates":
        {
            "AUD":1.5,
            "CAD":1.560132,
            "CHF":1.15,
            "CNY":7.82,
            "GBP":0.88,
            "JPY":132.36,
            "USD":1.23,
        }

};

const money =1000;

const euro = money/response.rates.JPY;
console.log(euro);