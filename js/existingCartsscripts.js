function FoodCart(cartName, cartAddress, cartMenu) {
  this.name = cartName;
  this.address = cartAddress;
  this.menu = cartMenu;
}

$(document).ready(function() {
  $("form#existingCarts").submit(function(event) {
    event.preventDefault();

    var cartName = $("#chooseCart :selected").val();
    var cartAddress = $("input#newAddress").val();
    var cartMenu = $("input#newMenu").val();

    $("#cartName").text(cartName);
    $("#cartAddress").text(cartAddress);
    $("#cartMenu").text(cartMenu);

  });
});
