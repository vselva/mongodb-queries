use dataModelling
db.user.drop();

// insert embedded data 
db.user.insertOne({
    name: 'Narumugai',
    age: 8,
    orders: [
        { item: "Book", price: 200 },
        { item: "Pen", price: 10 }
    ]
});