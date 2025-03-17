let array = [1, 2, 2, 3, 4, 4, 10];
let uniqueArr = [];


for(let i=0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) { 
        if (array[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueArr.push(array[i]); 
    }
}

console.log(uniqueArr); 