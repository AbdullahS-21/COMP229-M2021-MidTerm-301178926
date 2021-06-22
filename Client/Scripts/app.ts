//IIFE -- Immediately Invoked Function Expression

// Mid Term Test - Abdullah Sheikh - 301178926 

"use strict";

(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/books';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();

