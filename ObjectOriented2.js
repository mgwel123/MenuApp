class Groceries {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    describe(){
        return `${this.name} costs: ${this.price}`;
    }
}

class Cart {
    constructor(name){
        this.name = "My Cart";
        this.groceries = [];
    }
    addGroceries(groceries){
        if (groceries instanceof Groceries){
            this.groceries.push(groceries);
        }else {
            throw new Error (`You may only add groceries on the list. ${groceries} is not listed.`)
        }
    }
    listContents(){
        return this.groceries.join(' * ');
    }
}

class Menu {
    constructor() {
        this.groceries = [];
        this.cart = [];
        this.selectedGroceries = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addToList();
                    break;
                case '2':
                    this.addToCart();
                    break;
                case '3':
                    this.viewCart();
                    break;
                case '4':
                    this.removeFromCart();
                    break;
                case '5':
                    this.purchaseItems();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert (`Have a nice day.`)
    }

    showMainMenuOptions(){
        return prompt (`
        0) Exit
        1) Add an item to Grocery List
        2) Add items to Cart
        3) View items in Cart
        4) Remove an item from Cart
        5) Purchase items in Cart
        `);
    }
    viewCart() {
        let cartContents = '';
        for (let i = 0; i < this.cart.length; i++){
            cartContents += i + ') ' + this.cart[i] + '\n'
        }
        alert (cartContents);
    }
    addToList(){
        let name = prompt ("Please add an item to your list:");
        let price = prompt ("How much does it cost?");
        this.groceries.push(new Groceries(name, price));
    }
    addToCart(){
        let index = prompt (`List the index of the item you wish to add to your cart:
        ---------------------
        ${this.groceries}`);
        if (index > -1 && index < this.groceries.length) {
            this.selectedGroceries = this.groceries[index];
        }
    }
}


let menu = new Menu;
menu.start();