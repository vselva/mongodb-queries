use ecommerce

// size: list a documents which has array and it has specific number (size) of elements

// List customers who has two purchases in array 
db.customers.find(
    { purchases: { $size: 2 } },
    {_id: 0, name: 1, email: 1, purchases: 1}
);
