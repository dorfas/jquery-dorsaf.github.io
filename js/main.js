Name();

  $("#underlineButton").click(function(){
    $("#typedText").toggleClass("underline");
  });
 
  $("#boldButton").click(function(){
    $("#typedText").toggleClass("bold");
  });

  $("#italicButton").click(function(){
    $("#typedText").toggleClass("italic");
  });

function Name(){
    for (var i=0 ; i<4; i++) {
        var font = $(".fontName").eq(i).val() ; 
        console.log(font);
        $(".fontName").eq(i).css("fontFamily",font);
    }
}

$("#police").change(function (){
    var a = $("#police").val() ;
    $("#typedText").css("fontFamily", a);
    $("police").css("fontFamily",a);
});

$("#fontSize").change(function(){
    var a= $("#fontSize").val() + "px";
    console.log(a);
    $("#typedText").css("fontSize",a) ;
  });