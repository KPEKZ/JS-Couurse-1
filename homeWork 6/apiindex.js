function requestUrl(url){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "origin", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText

}


requestUrl("http://min-prices.aviasales.ru/calendar_preload");