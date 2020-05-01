var faker = require("faker");

var database = { products: [] };

for (var i = 1; i <= 20; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/300x300/?" + i,
    quantity: faker.random.number(),
  });
}

console.log(JSON.stringify(database));
