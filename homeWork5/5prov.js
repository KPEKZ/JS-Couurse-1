
//Р¤СѓРЅРєС†РёСЏ РґР»СЏ РІС‹РїРѕР»РЅРµРЅРёСЏ ajax Р·Р°РїСЂРѕСЃР°
const ajax = (method, url, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.send();

    return xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status === 200) {
            let res = xhr.responseText;
            callback(res);
        }
    }
}

//РњРѕР¶РЅРѕ Р±С‹Р»Рѕ С‡РµСЂРµР· РїСЂРѕРјРёСЃС‹, СЂРµС€РёР» С‡РµСЂРµР· РєРѕР»Р±РµРєРё
const getMinPrice = (origin, dest, monthsInterval, year, callback) => {
    const IATACodesQuery = encodeURI(`q=${origin} ${dest}`);

    //Р”РµР»Р°РµРј Р·Р°РїСЂРѕСЃ РЅР° РїРѕР»СѓС‡РµРЅРёРµ IATA РєРѕРґРѕРІ СЃС‚СЂР°РЅ
    ajax('GET', `https://www.travelpayouts.com/widgets_suggest_params?${IATACodesQuery}`,
        // res - РѕС‚РІРµС‚ РѕС‚ СЃРµСЂРІРµСЂР° РІ РІРёРґРµ JSON-РѕР±СЉРµРєС‚Р°
        (res) => {
            const IATAInfo = JSON.parse(res);

            //РР·РІР»РµРєР°РµРј РёР· РїРѕР»СѓС‡РµРЅРЅРѕРіРѕ РѕР±СЉРµРєС‚Р° РЅСѓР¶РЅС‹Рµ РґР°РЅРЅС‹Рµ (IATA РєРѕРґ РіРѕСЂРѕРґР° РѕС‚РїСЂР°РІР»РµРЅРёСЏ Рё РіРѕСЂРѕРґР° РїСЂРёР±С‹С‚РёСЏ)
            const originIATA = IATAInfo.origin.iata;
            const destIATA = IATAInfo.destination.iata;

            //Р”РµР»Р°РµРј Р·Р°РїСЂРѕСЃ РЅР° РїРѕР»СѓС‡РµРЅРёРµ РјРёРЅРёРјР°Р»СЊРЅС‹С… С†РµРЅ РЅР° РїРµСЂРµР»РµС‚
            const minPricesQuery = `origin=${originIATA}&destination=${destIATA}`;
            ajax('GET', `http://min-prices.aviasales.ru/calendar_preload?${minPricesQuery}`,
                (res) => {
                    const bestPricesInfo = JSON.parse(res);

                    //РњР°СЃСЃРёРІ РјРёРЅРёРјР°Р»СЊРЅС‹С… С†РµРЅ Р·Р° СЂР°Р·РЅС‹Рµ РґР°С‚С‹
                    const bestPrices = bestPricesInfo.best_prices;

                    //РћС‚С„РёР»СЊС‚СЂСѓРµРј С†РµРЅС‹ РїРѕ Р·Р°РґР°РЅРЅРѕРјСѓ РїРµСЂРёРѕРґСѓ РІСЂРµРјРµРЅРё
                    const pricesFilteredByDate = bestPrices.filter((item, i) => {
                        const date = new Date(item.depart_date);

                        return (date.getMonth() >= monthsInterval[0]
                            && date.getMonth() <= monthsInterval[1]
                            && date.getFullYear() === year);
                    });

                    //РќР°Р№РґРµРј РјРёРЅРёРјР°Р»СЊРЅСѓСЋ С†РµРЅСѓ РІ РѕС‚С„РёР»СЊС‚СЂРѕРІР°РЅРЅРѕРј РґРёР°РїР°Р·РѕРЅРµ
                    const minPrice = pricesFilteredByDate.reduce((a, b) => {
                        return a.value > b.value ? b : a;
                    });

                    //РќР°Р№РґРµРј Р±РёР»РµС‚С‹ СЃ РјРёРЅРёРјР°Р»СЊРЅРѕР№ С†РµРЅРѕР№ РІ Р·Р°РґР°РЅРЅРѕРј РґРёР°РїР°Р·РѕРЅРµ (РёС… РјРѕР¶РµС‚ Р±С‹С‚СЊ РЅРµСЃРєРѕР»СЊРєРѕ)
                    const minPriceTickets = pricesFilteredByDate.filter((item) => {
                        return item.value === minPrice.value;
                    });

                    callback(minPriceTickets);
                });
        });
}


//РЅР°РёМ†РґРёС‚Рµ СЃР°РјС‹РёМ† РґРµС€РµРІС‹РёМ† Р±РёР»РµС‚ РёР· РњРѕСЃРєРІС‹ РІ РќРёС†С†Сѓ РЅР° РѕСЃРµРЅСЊ 2018 (СЃС‡РµС‚ РјРµСЃСЏС†РµРІ РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ 0)
getMinPrice("РњРѕСЃРєРІР°", "РќРёС†С†Р°", [8, 10], 2018, (result) => {
    const minPriceTickets = result;

    console.log(`РњРёРЅРёРјР°Р»СЊРЅР°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ РїРµСЂРµР»РµС‚Р° СЃРѕСЃС‚Р°РІРёС‚: ${minPriceTickets[0].value}`); //11548
    console.log('Р’РѕР·РјРѕР¶РЅС‹Рµ РґР°С‚С‹ РІС‹Р»РµС‚Р° (Р“Р“Р“Р“-РњРњ-Р”Р”):')
    minPriceTickets.forEach(item => {
        console.log(item.depart_date);
    });
});