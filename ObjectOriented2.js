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
    constructor(){
        this.groceries = [];
    }
    addGroceries(groceries){
        if (groceries instanceof Groceries){
            this.groceries.push(groceries);
        }else {
            throw new Error (`You may only add an instance of groceries. ${groceries} is not listed.`)
        }
    }
}

class Menu {
    constructor() {
        this.groceries = [];
        this.selectedGroceries = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addToCart();
                    break;
                case '2':
                    this.viewCart();
                    break;
                case '3':
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
        1) Add items to Cart
        2) View items in Cart
        3) Purchase items in Cart
        `);
    }
    showGroceriesMenuOptions(groceryList){
        return prompt (`
        0) Back
        1) Calculate total expenses
        2) Remove an item

        *************
        ${groceryList}
        `);
    }

    viewCart() {
        let cartContents = '';
        for (let i = 0; i < this.groceries.length; i++){
            cartContents += i + ') ' + this.groceries[i].name + ' - ' + this.groceries[i].price + '\n';
        }
        let selection = this.showGroceriesMenuOptions(cartContents);
        switch (selection) {
            case '1':
                this.totalExpenses();
                break;
            case '2':
                this.removeFromCart();
        }
    }

    addToCart(){
        let name = prompt ("Please add an item to your list:");
        let price = prompt ("How much does it cost?");
        this.groceries.push(new Groceries(name, price));
    }
    
    removeFromCart(){
        let index = prompt (`Please select the index of the item you wish to remove:`);
        if (index > -1 && index < this.groceries.length){
            this.groceries.splice(index, 1);
        }
    }

    totalExpenses(price){ //sum not working currently, going to try reduce method
        let sum = this.groceries.price.reduce((a, b) => a + (b[price] || 0), 0);
        return alert (`Your current total is: ${sum}`);
    }
    
    purchaseItems(){

    }
}


let menu = new Menu;
menu.start();