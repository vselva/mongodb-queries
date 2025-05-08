use ecommerce

// Even Ages
db.customers.find(
    { age: { $mod: [ 2, 0 ] } },
    { _id: 0, name: 1, email: 1, age: 1 }
);
