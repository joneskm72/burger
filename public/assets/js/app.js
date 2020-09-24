$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = $(this).data("id").attr("data-devoured");

    devoured = devoured === "0" ? 1 : 0


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function(data) {
        console.log(data)
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#enter_text").val().trim(),
      devoured: 0
    };

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
