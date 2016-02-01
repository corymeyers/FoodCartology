$(document).ready(function() {
  $("form#existingCarts").submit(function(event) {
    event.preventDefault();

    var cartName = $("#chooseCart :selected").val();

        $("#testfield").text(cartName);

  });
});
