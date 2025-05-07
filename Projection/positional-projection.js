// Positional Projection 
db.orders.insertMany([
    {
        _id: 1,
        customer: "Selva",
        items: [
        { name: "apple", qty: 5 },
        { name: "banana", qty: 3 },
        { name: "orange", qty: 7 }
        ]
    },
    {
        _id: 2,
        customer: "Kumar",
        items: [
        { name: "banana", qty: 2 },
        { name: "apple", qty: 1 }
        ]
    }
]);

// without positional projection => displays all the items
db.orders.find(
    { "items.name": "apple" }
);

// find with positional projection => displayes only apple 
db.orders.find(
    { "items.name": "apple" },
    { "items.$": 1 }
);

// finally clear the orders collection
db.orders.deleteMany({});
