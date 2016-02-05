function NewFoodCart(cartName,firstName,lastName,menuLink,mapLink) {
  this.cartName = cartName;
  this.ownerName = ownerName;
  this.foodCartPic = foodCartPic;
  this.menuLink = menuLink;
  this.locationLink = locationLink;
  this.mapLink = mapLink;
}

NewFoodCart.prototype.fullCart = function() {
  return this.cartName + " " + this.ownerName + " " + this.menuLink + " " + this.mapLink
}

$(document).ready(function() {
  var foodCartOwnerArray = [];


  $("form#form").submit(function(event) {
    event.preventDefault();
    if ( $("input#cartName").val() === "" || $("input#ownerName").val() === "" ||  $("input#locationLink").val() === "" ) {
      alert("Please fill out entire form");
      return false;
    }
    if ( $("input#foodCartPic").val() === "" || $("input#menuLink").val() === "" ) {
      alert("Please link to an image. If you need to upload an image from your computer, we at Food Cartology recommend imgur.com.");
      return false;
    }

    var cartName = $("input#cartName").val();
    var ownerName = $("input#ownerName").val();
    var foodCartPic = $("input#foodCartPic").val();
    var menuLink = $("input#menuLink").val();
    var locationLink = $("input#locationLink").val();
    var mapLink = ("<p><a href='http://maps.google.com/?q=").concat(locationLink + "'" + "target='_blank'"+ ">" + "Click here for our location."+ "</a>" + "</p>");
    var usersNewFoodCart = new NewFoodCart(cartName,ownerName,foodCartPic,menuLink,locationLink,mapLink);
    // var usersNewFoodCart = new NewFoodCart(cartName,ownerName,imageLink,menuLink,foodCartPic,mapLink,locationLink);


    foodCartOwnerArray.push(usersNewFoodCart);
    console.log(foodCartOwnerArray);

    $("#foodCartColumn").prepend('<div id="cartSummary">' +
                                '<hr><h2><span class="glyphicon glyphicon-cutlery"></span> ' +
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


                                 '</p> <p>Link to location:' + mapLink + '</p><hr>' );


    $("input#cartName").val("");
    $("input#ownerName").val("");
    $("input#menuLink").val("");
    $("input#foodCartPic").val("");
    $("input#locationLink").val("");

  });
});
