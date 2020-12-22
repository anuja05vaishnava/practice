function Product() {
    this.cost = function () { return 20; };
    this.item = function () { return 30; };
}

function Icecream(product) {
    var price = product.cost();
    product.cost = function() {
        return price;
    }
}
 
function Choclate( product ){
   var price = product.cost();
   product.cost = function(){
     return  price;
  };
}


function Pizza( product ){
   var price = product.cost();
   product.cost = function(){
     return  price;
  };
}
var food = new Product();
Icecream(food);
Choclate(food);
Pizza(food);
console.log(food.cost()); 
console.log(food.item()); 
