$(document).ready(function(){
    
    $("#board").click( function(e){
        
    
        
        var sticky = $("<div class='newNote' > <h1 id='header'>Note</h1> <div id='textArea' contenteditable='true'></div><button id='deleteButton'>X </div>").css({
            
            position: "absolute",
            top: event.pageY,
            left: event.pageX,
            height: 300,
            width: 250,
            backgroundColor: "#FDFDC3"
            
   
        });
        
        
    $(sticky).prependTo($("#board"));    
        
        
    })
    
    $("#deleteButton").click( function(){
        
        $(this).remove();
        
    })
    
   

    
});
    


