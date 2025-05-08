// switch to database company 
use ecommerce

// age greater than 18
db.customers.find({ age: { $gt: 18} });

// age greater than and equal to 18
db.customers.find({ age: { $gte: 18 } });

// age lesster than 18
db.customers.find({ age: { $lt: 18 } });

// age lesser than and equal to 18
db.customers.find({ age: { $lte: 18 } });

// Write a query to find products where price is between 500 and 1000 (inclusive).
db.products.find({price: {$gt: 500, $lt: 1000}}, {_id:0}).pretty();

// lexicographical order = customer names after the letter 'I'
db.customers.find({ name: { $gt: 'I' } }, { _id: 0, name: 1, email: 1 });
