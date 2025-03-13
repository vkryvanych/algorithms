class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

addToList(value) {
    const node = new Node(value);
    if(!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        } 
        current.next = node;
    }
    this.size++
}

showList() {
    let current = this.head;
    while(current) {
        console.log(`${current.value}`);
        current = current.next;
        } 
    }


removeFromList() {
    while(this.head && this.head.value % 3 === 0) {
        this.head = this.head.next;   
    }
        let current = this.head;
        while (current && current.next) {
            if (current.next.value % 3 === 0) {
                current.next = current.next.next;
            } else {
                current = current.next;
                }
            }
        }

addAfterEqualPairs() {
        let current = this.head;
        while (current && current.next) {
            if (current.value === current.next.value) {
                let newNode = new Node(88);
                newNode.next = current.next.next;
                current.next.next = newNode;
                current = newNode.next; 
                } else {
                    current = current.next;
                }
            } 
        }
                
}    

const list = new SingleList();
console.log("Список після додавання елементів: ");
list.addToList(5);
list.addToList(10);
list.addToList(30);
list.addToList(3);
list.addToList(17);
list.addToList(17);
list.showList();
console.log("Список після видалення елементів кратних трьом: ");
list.removeFromList();
list.showList();
console.log("Додавання числа 88 після однакових елементів: ");
list.addAfterEqualPairs();
list.showList();