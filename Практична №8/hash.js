class RecommendationSystem {
  constructor(size = 50) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  add(userID, data) {
    let index = this.hash(userID);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    const existing = this.table[index].find(item => item[0] === userID);
    if (existing) {
      existing[1] = data;
      console.log(`Дані користувача ${userID} оновлено.`);
    } else {
      this.table[index].push([userID, data]);
      console.log(`Користувача ${userID} додано з рекомендаціями.`);
    }
  }

  get(userID) {
    let index = this.hash(userID);
    if (this.table[index]) {
      const found = this.table[index].find(item => item[0] === userID);
      if (found) {
        console.log(`Дані користувача ${userID}:`);
        console.log(`   Покупки: ${found[1].purchases.join(', ')}`);
        console.log(`   Вподобання: ${found[1].preferences.join(', ')}`);
        return found[1];
      }
    }
    console.log(`Користувача ${userID} не знайдено.`);
    return undefined;
  }

  remove(userID) {
    let index = this.hash(userID);
    if (this.table[index]) {
      const beforeLength = this.table[index].length;
      this.table[index] = this.table[index].filter(item => item[0] !== userID);
      const afterLength = this.table[index].length;
      if (beforeLength !== afterLength) {
        console.log(`Користувача ${userID} видалено з таблиці.`);
      } else {
        console.log(`Користувача ${userID} не знайдено для видалення.`);
      }
    }
  }

  printRecommendations() {
    console.log('Поточна таблиця рекомендацій:');
    this.table.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        bucket.forEach(([key, value]) => {
          console.log(`Місце ${index}: Користувач ${key}, покупки: [${value.purchases.join(', ')}], вподобання: [${value.preferences.join(', ')}]`);
        });
      } else {
        console.log(`Місце ${index}: Вільне`);
      }
    });
  }
}


const system = new RecommendationSystem();

system.add("anna123", {
  purchases: ["ноутбук", "ручка", "рюкзак"],
  preferences: ["канцелярія", "школа"]
});

system.add("mark456", {
  purchases: ["ноутбук", "миша"],
  preferences: ["електроніка"]
});

system.get("anna123");

system.remove("mark456");

system.get("mark456");

system.printRecommendations();