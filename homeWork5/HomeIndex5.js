//запросил IATA-коды городов: Москвы и Ниццы
// получил ответ из запроса на IATA коды: {"origin":{"iata":"MOW","name":"Москва"},"destination":{"iata":"NCE","name":"Ницца"}}
//запросил самые дешевые билеты на следующие месяцы относительно текущего, в одну сторону(28.10.2019)
//получил данные ниже

//теперь ищу самый дешевый билет из данных:

//для 11 месяца 2019


const response1 =
    {"success":true,
        "data": {"NCE":
                    {

                        "0": {"price":14499,"airline":"S7","flight_number":3751,"departure_at":"2019-11-27T11:05:00Z","return_at":"2019-12-04T14:10:00Z","expires_at":"2019-10-31T18:35:23Z"},
                        "1":{"price":10131,"airline":"W6","flight_number":2490,"departure_at":"2019-11-25T11:05:00Z","return_at":"2019-12-02T15:10:00Z","expires_at":"2019-10-31T17:07:07Z"},
                        "2":{"price":10606,"airline":"W9","flight_number":8126,"departure_at":"2019-11-25T14:15:00Z","return_at":"2019-12-02T15:10:00Z","expires_at":"2019-10-31T17:07:07Z"},
                        "3":{"price":15777,"airline":"A3","flight_number":883,"departure_at":"2019-11-20T05:20:00Z","return_at":"2019-12-04T12:50:00Z","expires_at":"2019-10-30T08:44:38Z"},
                        "4":{"price":30930,"airline":"LH","flight_number":1451,"departure_at":"2019-11-29T07:05:00Z","return_at":"2019-12-01T22:05:00Z","expires_at":"2019-10-29T13:40:47Z"}
                    }

                    },"error":null,"currency":"rub"
    }

    //для 12 месяца 2019
    const response2 =
        {"success":true,
            "data":
                {"NCE":
                        {
                            "0":{"price":14499,"airline":"S7","flight_number":3751,"departure_at":"2019-12-07T11:05:00Z","return_at":"2019-12-16T14:10:00Z","expires_at":"2019-10-31T19:30:03Z"},
                            "1":{"price":9862,"airline":"W9","flight_number":8126,"departure_at":"2019-12-12T14:15:00Z","return_at":"2020-01-22T12:45:00Z","expires_at":"2019-10-30T14:54:48Z"},
                            "2":{"price":10637,"airline":"W9","flight_number":8126,"departure_at":"2019-12-05T14:15:00Z","return_at":"2019-12-16T15:10:00Z","expires_at":"2019-10-30T05:17:34Z"},
                            "3":{"price":14566,"airline":"JU","flight_number":657,"departure_at":"2019-12-08T05:00:00Z","return_at":"2020-01-24T09:15:00Z","expires_at":"2019-10-31T10:32:22Z"},
                            "4":{"price":39970,"airline":"LX","flight_number":1325,"departure_at":"2019-12-21T09:05:00Z","return_at":"2020-01-02T18:25:00Z","expires_at":"2019-10-30T23:19:40Z"}
                        }
                        },
            "error":null,"currency":"rub"
        }


//для 1 месяца 2020

const response3 =
    {
        "success":true,
        "data":
            {
                "NCE":{
                    "0":{"price":14499,"airline":"S7","flight_number":3751,"departure_at":"2020-01-20T11:05:00Z","return_at":"2020-01-27T14:10:00Z","expires_at":"2019-10-31T19:26:02Z"},
                    "1":{"price":11472,"airline":"TK","flight_number":416,"departure_at":"2020-01-20T20:45:00Z","return_at":"2020-01-27T15:10:00Z","expires_at":"2019-10-31T19:26:02Z"},
                    "2":{"price":10969,"airline":"W9","flight_number":8126,"departure_at":"2020-01-20T14:15:00Z","return_at":"2020-01-27T15:10:00Z","expires_at":"2019-10-31T19:26:02Z"},
                    "3":{"price":15724,"airline":"W6","flight_number":7898,"departure_at":"2020-01-22T18:05:00Z","return_at":"2020-01-29T21:55:00Z","expires_at":"2019-10-30T20:20:13Z"},
                    "4":{"price":46201,"airline":"BT","flight_number":427,"departure_at":"2020-01-01T05:40:00Z","return_at":"2020-01-08T10:35:00Z","expires_at":"2019-10-30T20:43:48Z"}
                }

                },

        "error":null,"currency":"rub"}


    function GetBestPrice(obj)
    {
        let  theBestPrice =obj.data.NCE[0].price;

        if (obj != undefined)
            for (let key in obj.data.NCE)
            {
                if (theBestPrice > obj.data.NCE[key].price)

                    theBestPrice = obj.data.NCE[key].price;
            }

           return theBestPrice;
    }

        let theBestPrice1 = GetBestPrice(response1);
        let theBestPrice2 =  GetBestPrice(response2);
        let theBestPrice3 = GetBestPrice(response3);

        const smaller = a => F = b => G =c => ((a<b && a < c) ? a : (b<a && b<c) ? b : c);
        console.log(smaller(theBestPrice1)(theBestPrice2)(theBestPrice3));





