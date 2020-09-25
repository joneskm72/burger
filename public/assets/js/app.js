$(function() {
  $(".devour").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = $(this).data("id").attr("data-devoured");

    devoured = devoured === "0" ? 1 : 0


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function(data) {
        console.log(data);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("hello");
    event.preventDefault();

    var newBurger = {
      name: $("#add-burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
