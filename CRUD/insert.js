// switch to database office
use office;

// insert one document to employees collection
db.employees.insertOne(
    {
        name: 'Diana', 
        age: 24,
        address: {
            location: 'Marthandam',
            pincode: '683672',
            country: 'UK'
        }
    }
);

// insert many documentsto employees collection
db.employees.insertMany([
    {
        name: 'Selva',
        age: 30,
        address: {
            location: 'Madras',
            pincode: '600127',
            country: 'India'
        }
    },
    {
        name: 'Narumugai', 
        age: 8, 
        address: {
            location: 'Madras',
            pincode: '600001',
            country: 'India'
        }
    }
]);

// continue insert even a record insertion is failed
db.employees.insertMany([
    {name: 'Imran', age: 34, address: { location: 'Hyderabad', pincode: '500001'}},
    {name: 'Udaya', age: 28, address: { location:'Vizag', pincode: '501206' }}
], {ordered: false}); // this is the option for this 

db.employees.find();