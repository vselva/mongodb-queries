use ecommerce

// find customer starts with S
db.customers.find(
    { name: { $regex: "^S" } }, 
    { _id: 0, name: 1, email: 1 }
);

// ignore case sensitive with $options - find customers starts with A or a
db.customers.find({ name: { $regex: "^a", $options: 'i' } }, { _id: 0, name: 1, email: 1 });

// regex with arrays - get products which has array tags which contains 'electronics'
db.products.find(
    { tags: {$regex: "electronics" } }, 
    { _id: 0, name: 1, tags: 1 }
).pretty();
