// switch to database messages
use office

// clear existing collections
db.stocks.drop();
db.departments.drop();

// create products collection without any options
db.createCollection('stocks');
show collections;

// create departments with options
db.createCollection(
    'departments',
    {
        max: 2,
        size: 10,
        capped: true
    }
);
db.departments.insertOne(
    { name: 'R&D'}
);

// The below doc will get inserted but previous values will be overwritten, 
// because of max and size values restrictions
db.departments.insertMany([
    {name: 'HR'},
    {name: 'Sales'} // this only will exist and R&D and HR will get removed. 
]);

db.departments.find({ }, { _id: 0 }).pretty();
