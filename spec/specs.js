
describe('NewFoodCart', function() {
  it("creates a new New Food Cart with the given properties", function() {
    var testNewFoodCart = new NewFoodCart("Cartopia","Bernie","Sanders","http://hoggatteer.weebly.com/uploads/6/0/7/6/6076564/568171657_orig.png","https://www.google.com/maps/place/1071+SW+Alder+St,+Portland,+OR+97205/@45.5208714,-122.6835201,18z/data=!3m1!4b1!4m2!3m1!1s0x54950a03672c5de5:0x63a35698d5c21be7");
    expect(testNewFoodCart.cartName).to.equal("Cartopia");
    expect(testNewFoodCart.firstName).to.equal("Bernie");
    expect(testNewFoodCart.lastName).to.equal("Sanders");
    expect(testNewFoodCart.menuLink).to.equal("http://hoggatteer.weebly.com/uploads/6/0/7/6/6076564/568171657_orig.png");
    expect(testNewFoodCart.locationLink).to.equal("https://www.google.com/maps/place/1071+SW+Alder+St,+Portland,+OR+97205/@45.5208714,-122.6835201,18z/data=!3m1!4b1!4m2!3m1!1s0x54950a03672c5de5:0x63a35698d5c21be7");
  });
//   it("adds the fullName method to all contacts", function() {
//     var testContact = new Contact("Sherlock","Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   });
});
