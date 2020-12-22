function Product( icecream ) {
 
  this.icecream = icecream;
  this.flavour = "vanilla";
  this.cost = "20";
 
  this.getCost = function () {
    return this.icecream + " " + this.cost;
  };
 
}

var myCupcake = new Product("cake");
 
myCupcake.cost = "50";
 
console.log( myCupcake.getCost() );



var mypizza = new Product("pizza");
 
mypizza.cost = "129";
 
console.log( mypizza.getCost() );



var myBurger = new Product("burger");
 
myBurger.cost = "80";
 
console.log( myBurger.getCost() );
