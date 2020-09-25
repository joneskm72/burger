$(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    var devoured = $(this).children(".burger_id").attr("data-devoured")

    devoured = devoured === "0" ? 1 : 0
    console.log("ABOUT TO PUT", burger_id, devoured);

    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + burger_id,
      data: {devoured:devoured}
    }).then(
      function(data) {
        console.log("fml", data);
        location.reload();
      });
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
