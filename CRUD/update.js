// switch to database office
use crud;

///////////////////////////////////////
// Update one document
db.employees.updateOne(
    {
        name: 'Diana'
    },
    { 
        $set: {
            "address.location": 'Ambalakada'
        }
    }
);
db.employees.findOne({name: 'Diana'});

///////////////////////////////////////
// Update many documents
db.employees.updateMany(
    {
        "address.location": 'Madras'
    },
    {
        $set: {
            "address.location": 'Chennai',
            "address.pincode": '600096'
        }
    }
);
db.employees.find({});

///////////////////////////////////////
// $inc - increment a field value 
// by the value passed in update object
db.employees.updateOne(
    {
        name: 'Narumugai'
    },
    {
        $inc: { age: 1 }
    }
);
db.employees.find({name: 'Narumugai'});

///////////////////////////////////////
// $rename - rename a field from age to old
db.employees.updateMany(
    {
    },
    {
        $rename: { "age": 'old'}
    }
);
db.employees.find({name: 'Narumugai'});

///////////////////////////////////////
// $unset - Removes a particular field - old
db.employees.updateMany(
    {},
    {
        $unset: {old: 1}
    }
);
db.employees.find();
