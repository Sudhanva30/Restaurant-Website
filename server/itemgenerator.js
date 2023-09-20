const items = [];

for (let i = 1; i <= 10; i++) {
  const item = {
    name: `Item ${i}`,
    price: Math.floor(Math.random() * 100), // Random price between 0 and 99
    isAvailable: Math.random() < 0.5, // Random availability
    comments: `Comments for Item ${i}`,
    category: `Category ${i}`,
  };

  items.push(item);
}

console.log(JSON.stringify(items, null, 2));
