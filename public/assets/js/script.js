$(document).ready(function() {

    $(".devour").on("click", function(e) {
        e.preventDefault();
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(function() {
            location.reload();
        });
    });

    $(".add-burger").on("submit", function(e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });
});
