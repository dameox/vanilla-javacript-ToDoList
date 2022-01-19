var inputText;
var itemCounter = 1;

 $(".input-btn").on("click", function () {
     addItem ();
    }); 

 $(document).on("keydown", function (e) {
    if (e.key === "Enter") {
        addItem ();  
    } 
    });

$(document).on('click','.fa-trash', function(){
    $(this).parent().fadeOut('slow');    
  });

$(document).on("click",'li', function(){
    $(this).toggleClass("strike-through");
})



 function addItem () { 
    inputText = $("input").val();
    itemCounter++;
    $(".todo").append('<li class="list-group-item">' + inputText + ' <i class="fas fa-trash"></i></li>');
    $("input").val("");
}
