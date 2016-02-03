function NewFoodCart(cartName,firstName,lastName,menuLink,locationLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.foodCartPic = foodCartPic;
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
    var menuLink = $("input#menuLink").val();
    var foodCartPic = $("input#foodCartPic").val();
    var locationLink = $("input#locationLink").val();

    var usersNewFoodCart = new NewFoodCart(cartName,ownerName,menuLink,foodCartPic,locationLink);

    foodCartOwnerArray.push(usersNewFoodCart);
    console.log(foodCartOwnerArray);

    // $("span#cart-name").text(cartName);
    // $("span#owner-name").text(ownerName);
    // $("span#cart-img").text(foodCartPic);
    // $("span#location-link").text(locationLink);

    // $("#newEntry").show();
    $("#foodCartColumn").prepend('<div id="cartSummary">' +
                                '<h2><span class="glyphicon glyphicon-cutlery"></span> ' +
                                '<span id="cart-name">' + cartName + '</span></h2> <hr>' + '<div class="cartImage">' +
                                '<img class="img-responsive"  src=' + foodCartPic + '></div>' + "<hr>" + '<p>Owner:' + ownerName + '</p>' +

                                '<a type="button" class="menuPic" href="' + menuLink + '" data-toggle="modal" data-target="#' + ownerName + '">' + '<img class="menuPic" src="' + menuLink + '">' + '</a>' +
                                '<div class="modal fade" id="' + ownerName + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                                  '<div class="modal-dialog" role="document">' +
                                    '<div class="modal-content">' +
                                      '<div class="modal-header">' +
                                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' + '<span aria-hidden="true">&times;</span></button>' +
                                        '<h4 class="modal-title" id="myModalLabel">Food Cart Menu</h4>' +
                                      '</div>' +
                                      '<div class="modal-body">' +
                                        '<img class="modalPic" src="' + menuLink + '">' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +


                                 '<p>Link to location:' + locationLink + '</p>');

    // <!-- <div class="col-md-12"> -->

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
    $("input#menuLink").val("");
    $("input#foodCartPic").val("");
    $("input#locationLink").val("");

  });
});
