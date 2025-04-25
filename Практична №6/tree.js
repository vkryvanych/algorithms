class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Сума всіх елементів дерева
function findSum(node) {
    if (node === null) {
        return 0;
    }
    return node.value + findSum(node.left) + findSum(node.right);
}

//Виведення всіх листів дерева 
function printLeaves(node) {
    if (node === null) {
        return;
    }
    if (node.left === null && node.right === null) {
        console.log(node.value);
    }
    printLeaves(node.left);
    printLeaves(node.right);
}

//      10
//     /  \
//    5    15
//   / \     \
//  3   7    1

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(1);


let sum = findSum(root);
console.log("Сума всіх елементів дерева:", sum);

console.log("Листи дерева:");
printLeaves(root);
