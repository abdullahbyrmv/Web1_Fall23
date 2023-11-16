$("button").html("<strong>Changed<strong>");

$("a").text("ADA");

$("a").attr("href","https://ada.edu.az");

$("button").click(function(){
    $("h1").css("color","red");
    $("h1").text("Changed after pression button");
});

$("h1").on("click",function(){
    $("h1").css("color","red");
});
