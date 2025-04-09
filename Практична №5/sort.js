const N = 10;
let array = [];


for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < N; j++) {
    row.push(Math.floor(Math.random() * 51));
  }
  array.push(row);
}

console.log("Початковий масив:");
for (let i = 0; i < N; i++) {
  console.log(array[i].join('\t'));
}


for (let col = 0; col < N; col++) {
 
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (array[j][col] > array[j + 1][col]) {
       
        let temporary = array[j][col];
        array[j][col] = array[j + 1][col];
        array[j + 1][col] = temporary;
      }
    }
  }
}

console.log("\nВідсортований масив (стовпці за зростанням):");
for (let i = 0; i < N; i++) {
  console.log(array[i].join('\t'));
}
