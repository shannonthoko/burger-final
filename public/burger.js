$(function(){

$(".change").on("click", function(event){
    
    var id = $(this).data("id");
    var devourStatus = $(this).data("devoured");

    var newCondition = {
      devoured: devourStatus
    };

    location.reload();

    $.ajax("/api/burgers/" + id , {

        type: "PUT",
        data: newCondition
    }).then(
        
        function() {
            // Reload the page to get the updated list
            location.reload();
          }
        
    )
});



$(".delete-burger").on("click", function(event){
   
    var id = $(this).data("id");
    
    location.reload();


    $.ajax("/api/burgers/" + id , {

        type: "DELETE"
    }).then(

        function(){

            location.reload();
        }
    )

});

$(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
    
    };

    location.reload();

    $.ajax("/api/burgers", {

        type: "POST",
        data: newBurger
    }).then(
        function(){

            console.log("new burger created")
        })


    });



});