// switch to the database company
use office 

// inclusion projection 
db.employees.find({}, {name: 1, age: 1}); // shows id, name, age

// exclusion projection 
db.employees.find({}, {_id: 0, address: 0}); // shows name, age

// nested field projection 
db.employees.find({}, {_id: 0, name: 1, "address.location": 1 }); // shows name, location

// default values for country - all values will be India only in the output
db.employees.find({}, {_id: 0, name: 1, "address.country": "India"}); // shows name, address, country (default to india)

