$(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    var devoured = $(this).children(".burger_id").attr("data-devoured")

    devoured = devoured === "0" ? 1 : 0
    console.log(burger_id, devoured);

    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + burger_id,
      data: {devoured:devoured}
    }).then(
      function(data) {
        location.reload();
      });
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#add-burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });
});
