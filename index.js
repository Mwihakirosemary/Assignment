class kioskPurchase{
    constructor(fruitPrice){
        this.fruitPrice = fruitPrice
        this.calcFruitCost = function(fruitName,quantity){
            let totalCost = quantity * fruitPrice
            return `${quantity} ${fruitName} for KES ${totalCost}`
        }

    }
    
}
var newFruit = new kioskPurchase(30);
console.log(newFruit.calcFruitCost("Orange",2));

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitPrice = {"Orange": 30,"Mango": 15,"Avocado": 40};
        this.getTotalCost = function(){
            return `${quantity} ${fruit} for KES ${quantity * this.price}`
        }
    }
}
KioskCalc.prototype.price = 30;
var kiosk = new KioskCalc(`Mango`,2);
console.log(kiosk.getTotalCost());