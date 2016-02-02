function NewFoodCart(cartName,firstName,lastName,menuLink,locationLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.menuLink = menuLink;
  this.locationLink = locationLink;
}

NewFoodCart.prototype.fullCart = function() {
  return this.cartName + " " + this.ownerName + " " + this.menuLink + " " + this.locationLink
}


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

    // $("span#cart-name").text(cartName);
    // $("span#owner-name").text(ownerName);
    // $("span#cart-img").text(imageLink);
    // $("span#location-link").text(locationLink);

    // $("#newEntry").show();
    $("#foodCartColumn").prepend('<div id="cartSummary">' +
                                '<h2><span class="glyphicon glyphicon-cutlery"></span> ' +
                                '<span id="cart-name">' + cartName + '</span></h2> <hr>' +
                                '<img class="img-responsive cartImage"  src=' + imageLink + '>' + "<hr>" + '<p>Owner:' + ownerName + '</p> <p>Link to location:' + locationLink + '</p>');

    <!-- <div class="col-md-12"> -->

        //
        // <p>Owner: <span id="owner-name"></span></p>
        // <p>Cart Image:<span id="cart-img"></span></p>
        // <p>Link to location: <span id="location-link"></span></p>
        //
        // <ul id="cartSummary2">
        //
        // </ul>

    // <hr>


    $("input#cartName").val("");
    $("input#ownerName").val("");
    $("input#imageLink").val("");
    $("input#locationLink").val("");

  });
});
