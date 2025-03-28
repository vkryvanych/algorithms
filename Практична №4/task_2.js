const m = 5;

// Перевірка коректності
if (isNaN(m) || m < 1 || !Number.isInteger(m)) {
    console.log("Помилка: m має бути цілим числом ≥ 1");
} else {

    console.log(`Перші ${m} членів послідовності:`);

    for (let n = 1; n <= m; n++) {
        const x_n = Math.cos(n - 1) / (n ** 2 + 1);
        console.log(x_n);
    }
}