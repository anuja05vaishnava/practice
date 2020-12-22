function Product(item, cost) {

  this.item = item;
  this.cost = cost;

}

function Icecream(item, cost) {

  this.item = item;
  this.cost = cost;

}
function ItemMethod() {

  this.create = function(item, cost) {
      switch(item) {
         case "Product":
           return new Car(item, cost);
         case "Icecream":
           return new Icecream(item, cost);
         default;
      }
  }

}
const ItemMethod = new ItemMethod();

const items = [];


vehicles.push(ItemMethod.create("Pen", "Product"));
vehicles.push(ItemMethod.create("Vanilla", "Icecream"));

function shows() {
   
   console.log("Item: " + this.item);
   console.log("Cost: " + this.cost);
}


items.forEach( item => {
   shows.call(item);
});


