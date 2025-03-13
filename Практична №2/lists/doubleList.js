class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function rearrangeList(head) {
    if (!head || !head.next) return head; // Якщо список порожній або має 1 елемент, повертаємо його без змін
    
    let evenHead = null, evenTail = null;
    let oddHead = null, oddTail = null;
    let current = head;
    let index = 1;

    while (current) {
        let nextNode = current.next; 
        current.prev = null;
        current.next = null;

        if (index % 2 === 0) { // Парні елементи
            if (!evenHead) {
                evenHead = evenTail = current;
            } else {
                evenTail.next = current;
                current.prev = evenTail;
                evenTail = current;
            }
        } else { // Непарні елементи
            if (!oddHead) {
                oddHead = oddTail = current;
            } else {
                oddTail.next = current;
                current.prev = oddTail;
                oddTail = current;
            }
        }
        
        current = nextNode;
        index++;
    }

//Зв'язуємо парні та не парні елементи
    if (evenTail) {
        evenTail.next = oddHead;
        if (oddHead) oddHead.prev = evenTail;
    }

// Повертаємо голову оновленого списку
    return evenHead || oddHead; 
}


function createDoubleList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        current.next = newNode;
        newNode.prev = current;
        current = newNode;
    }
    return head;
}


function showList(head) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}


let P1 = createDoubleList([1, 2, 3, 4, 5, 6]);
console.log("Оригінальний список:");
showList(P1);

P1 = rearrangeList(P1);
console.log("Перетворений список:");
showList(P1);