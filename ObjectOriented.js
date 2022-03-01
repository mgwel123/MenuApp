class Mixer {
    constructor(name, ounces) {
        this.name = name;
        this.ounces = ounces;
    }
    addAmount(){
        return `${this.ounces} ounces of ${this.name}`;
    }
}

class Spirit {
    constructor(name, ounces) {
        this.name = name;
        this.ounces = ounces;
    }
    addAmount(){
        return `${this.ounces} ounces of ${this.name}`;
    }
}

class Cocktails {
    constructor() {


    }
}

class Menu {
    constructor () {
        this.spirits = [];
        this.mixers = [];
        this.selectedSpirit = null;
        this.selectedMixer = null;

    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addMixer();
                    break;
                case '2':
                    this.addSpirit();
                    break;
                case '3':
                    this.combineSpiritandMixer();
                    break;
                case '4':
                    this.pourOutCocktail();
                    break;
                case '5':
                    this.nameCocktail();
                    break;
            }
        }

        alert 'Goodbye! Drive safe!'
    }
    
}