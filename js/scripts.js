function NewFoodCart(cartName,firstName,lastName,menuLink,locationLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.menuLink = menuLink;
  this.locationLink = locationLink;
}

// NewFoodCart.prototype.cartListing = function() {
//   return this.firstName + " " + this.lastName;
// }


$(document).ready(function() {

  $("form#form").submit(function(event) {
    event.preventDefault();

    var cartName = $("input#select-amount").val();
    var ownerName = $("input#select-size").val();
    var imageLink = $("input#select-veg").val();
    var locationLink= $("input#pick-veg").val();


    $("span#owner-name").text(selectedSize);
    $("span#cart-img").text(selectedVegNum);
    $("span#location-link").text(selectedVeg);

    $("#cartSummary").show();

  });
});
