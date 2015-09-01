    var zeit = function(){
        var now = new Date(), 
            year = now.getFullYear(),
            month = now.getMonth()+1,
            date = now.getDate();
        document.getElementById("block").innerHTML = "Wir schreiben den " + date + "." + month + "." + year + ".";}
