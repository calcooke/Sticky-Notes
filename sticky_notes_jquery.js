//$(document).ready(function(){
//    
//    $("#board").click( function(e){
//        
//    
//        
//        var sticky = $("<div class='newNote' > <h1 id='header'>Note</h1> <div id='textArea' contenteditable='true'></div><button id='deleteButton'>X </div>").css({
//            
//            position: "absolute",
//            top: event.pageY,
//            left: event.pageX,
//            height: 300,
//            width: 250,
//            backgroundColor: "#FDFDC3"
//            
//   
//        });
//        
//        
//    $(sticky).prependTo($("#board"));    
//        
//        
//    })
//    
//    $("#deleteButton").click( function(){
//        
//        $(this).remove();
//        
//    })
//    
//   
//
//    
//});
//    


    
$(document).ready(function(){
    
    $("#addNote").click( function(){
        
   
       createNote();
            
   
        });
        
        
    function createNote(){
        
        var sticky = $("<div class='newNote' > <button id='deleteButton'>X</button> </div>").css({
            
            position: "absolute",
            top: 200,
            left: 200,
            height: 300,
            width: 250,
            backgroundColor: "#FDFDC3"
        
   
        });
        
        var stickyText = $("<h1 id='header' contenteditable='true'>title</h1> <div id='textArea' contenteditable='true'></div>");
        
        stickyText.appendTo(sticky);
        
        
        
        
    $(sticky).prependTo($("#board")).draggable(); 
        
        
        
    
        
    };
    
   
//    $('.newNote').mousedown( function () {
//        alert("yay");
//        
//    });
    
    
    
//    $(document).on("mousedown", '#header', function (e) {
//        $(event.target).parent().draggable("enabled");
//       
//        
//    });
//    
//    $('#header').mouseup( function(){
//        
//        $(this).draggable("disabled");
//        
//    })
    
      
        
   
    
    
   
    
    $(document).on("click", '#deleteButton', function (e) {
        $(event.target).parent().fadeOut();
        
    });
    
});
    


