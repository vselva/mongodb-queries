// switch to database office
use office

// find all documents in the collection employees
db.employees.find();

// find one document in the collection employees
db.employees.findOne();

// find one document based on the filter passed to findOne
db.employees.findOne({name: 'Selva'});

// find documents based on the filter passed
db.employees.find({name: 'Selva'});

// find documents based on the filter (nested filter)
db.employees.find(
    {
        'address.location': 'Chennai'
    }
);

// find the documents and limit to the count passed
db.employees.find({name: 'Selva'}).limit(2);