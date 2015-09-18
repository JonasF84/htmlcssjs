$(document).ready(function () {
    var fontColor = $("p").css("color");
    $("<button id=\"verstecken\">Verstecken</button>").prependTo("#container");
    
    $("#verstecken").click(function () {
        $("p").slideToggle("fast", function(){
            console.log("the slide has finished sliding!");
            if ($("p").is(":visible")) {
            $("#verstecken").text("Verstecken");
        } else {
            $("#verstecken").text("Anzeigen");
        }
        });
    });
    
    $("<button id=\"lila\">Lila machen</button>").appendTo("#container");
    
    $("#lila").click(function () {
        $("p").toggleClass("colortext");

        if ($("p").hasClass("colortext")) {
            $(this).text("Rückgängig");
        } else {
            $(this).text("Lila machen");
        }
    });
    
    $("#no-script").remove();
    
    $("button").hover(function() {
        $(this).addClass("texthover");
    }, function() {
        $(this).removeClass("texthover");
    });
    
    $(".spoiler").hide();
    $("<span class=\"revealer\">Tell me!</span>").insertBefore(".spoiler");
    $(".revealer").click(function() {
        $(this).hide();
        $(this).next().fadeIn();
    });
    
    $("input").addClass("inputcolors");
    
    $("<button type =\"submit\">Absenden</button>").appendTo("#form");
    
  /*  $(":submit").click(function(e) {
        console.log("klick");
        $(":text").each(function() {
            console.log("text")
            if($(this).val().length == 0) {
                $(this).addClass("inputerror");
            }
        });
         e.preventDefault();
    });
    
    $(":input").blur(function() {
        if($(this).val().length == 0) {
            $(this)
            .addClass("inputerror")
            .after("<span class=\"error\">bla error bla</span>");
        }
    });
    
    $(":input").focus(function() {
        $(this)
        .removeClass("inputerror")
        .next("span")
        .remove();
    });
    
    $(":radio[name=buttonradio]").change(function() {
        console.log($(this).val());
    
    }); */
    
    $("#signup form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            website: {
                url: true
            },
            password: {
                minlength: 8,
                required: true
            },
            passconf: {
                equalTo: "#password"
            }
        },
        success: function(label) {
            label.text("OK!").addClass("valid");
        }
    });
}); 