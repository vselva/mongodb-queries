// Embedding in MongoDB refers to storing related data 
// in the same document rather than using references to separate documents.
// - when mostly accessed together 
// - one to one or one to many relationships
// - when bouded data 
// - 16 MB limit

use dataModelling

// insert embedded data 
db.user.insertOne({
    name: 'Diana',
    age: 20,
    orders: [
        { item: "Book", price: 200 },
        { item: "Pen", price: 10 }
    ]
});

// fetching this data
db.user.find({name: 'Selva'});
