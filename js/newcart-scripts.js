function NewFoodCart(cartName,firstName,lastName,menuLink,locationLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.menuLink = menuLink;
  this.locationLink = locationLink;
}

// NewFoodCart.prototype.activeLocationLink= function() {
//   return "<a href = http://www.google.com/?q=" + this.locationLink + ">Current Location</a>";
// }

// <a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>
// return this.firstName + " " + this.lastName;



$(document).ready(function() {

  var foodCartOwnerArray = [];
  
  $("form#form").submit(function(event) {
    event.preventDefault();

    var cartName = $("input#cartName").val();
    var ownerName = $("input#ownerName").val();
    var imageLink = $("input#imageLink").val();
    var locationLink = $("input#locationLink").val();

    var usersNewFoodCart = new NewFoodCart(cartName,ownerName,imageLink,locationLink);

    foodCartOwnerArray.push(usersNewFoodCart);
    console.log(foodCartOwnerArray);

    $("span#cart-name").text(cartName);
    $("span#owner-name").text(ownerName);
    $("span#cart-img").text(imageLink);
    $("span#location-link").text(locationLink);

    $("#cartSummary").show();

  });
});
