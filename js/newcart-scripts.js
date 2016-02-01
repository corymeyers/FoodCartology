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

    var cartName = $("input#cartName").val();
    var ownerName = $("input#ownerName").val();
    var imageLink = $("input#imageLink").val();
    var locationLink= $("input#locationLink").val();

    $("span#cart-name").text(cartName);
    $("span#owner-name").text(ownerName);
    $("span#cart-img").text(imageLink);
    $("span#location-link").text(locationLink);

    $("#cartSummary").show();

  });
});
