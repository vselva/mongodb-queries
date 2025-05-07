// switch to database messages
use office

// create products collection without any options
db.createCollection('products');
show collections;

// create departments with options
db.createCollection(
    'deparments',
    {
        max: 2,
        size: 10,
        capped: 5242880
    }
);
db.departments.insertMany([
    {name: 'HR'},
    {name: 'Sales'}
]);
// The below doc will not get inserted because of max size is just 2
db.departments.insertOne(
    { name: 'R&D'}
);
db.departments.find();
