$(document).ready(function(){
    var isClicked = false;
    $("button").click(function(){
        if(!isClicked){
            $("p").hide();
            $("button").text("Anzeigen");
            isClicked = true;
        }
        else{
            $("p").show();
            $("button").text("Verstecken");
            isClicked = false;
        }    
    });
}); 