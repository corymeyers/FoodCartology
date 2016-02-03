function NewFoodCart(cartName,firstName,lastName,menuLink,mapLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.menuLink = menuLink;
  this.mapLink = mapLink;
}

NewFoodCart.prototype.fullCart = function() {
  return this.cartName + " " + this.ownerName + " " + this.menuLink + " " + this.mapLink
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
    var mapLink = ("<p><a href='http://maps.google.com/?q=").concat(locationLink + "'" + "target='_blank'"+ ">" + "Click here for our location."+ "</a>" + "</p>");

    // var mapLink = .link()
    console.log(mapLink);
    var usersNewFoodCart = new NewFoodCart(cartName,ownerName,imageLink,mapLink);

    foodCartOwnerArray.push(usersNewFoodCart);
    console.log(foodCartOwnerArray);


    // $("span#cart-name").text(cartName);
    // $("span#owner-name").text(ownerName);
    // $("span#cart-img").text(imageLink);
    // $("span#location-link").text(locationLink);
    // $("#newEntry").show();
    $("#foodCartColumn").prepend('<div id="cartSummary">' +
                                '<h2><span class="glyphicon glyphicon-cutlery"></span> ' +
                                '<span id="cart-name">' + cartName + '</span></h2> <hr>' + '<div class="cartImage">' +
                                '<img class="img-responsive"  src=' + imageLink + '></div>' + "<hr>" + '<p>Owner:' + ownerName + '</p> <p>Link to location:' + mapLink + '</p>');

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
