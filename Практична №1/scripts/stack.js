class Disk {
    constructor(name, volume) {
        this.name = name;
        this.volume = volume;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    addToStack(el) {
        this.items.push(el);
    }

    removeFromStack() {
        if(this.items.length === 0) {
            return ("Цей стек пустий"); 
        }
        return this.items.pop();
    }

    showStack() {
        console.log("Наш стек:");
        this.items.forEach((el, index) => {
            console.log(`${index + 1}. Назва: ${el.name}, Об'єм: ${el.volume}`);
        });
    }

    clearStack() {
        this.items = [];
    }
    
    getMaxVolume() {
        if(this.items.length === 0) {
            return ("Цей стек пустий"); 
        }

        let maxVolume = null; 
        this.items.forEach(disk => {
            if (!maxVolume || disk.volume > maxVolume.volume) {
                maxVolume = disk;
            }
        });

        return `Диск з максимальним об'ємом: ${maxVolume.name}, ${maxVolume.volume}`;
    }
}

const stack = new Stack();

stack.addToStack(new Disk("Disk1", 100));
stack.addToStack(new Disk("Disk2", 250));
stack.addToStack(new Disk("Disk3", 180));
stack.showStack(); 
console.log(stack.getMaxVolume());
console.log(stack.removeFromStack());
console.log(stack.removeFromStack());
console.log(stack.removeFromStack());
console.log(stack.removeFromStack());
stack.clearStack();
stack.showStack();