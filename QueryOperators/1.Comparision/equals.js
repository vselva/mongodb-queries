// switch to office database
use office

// equal operator
db.employees.find( { name: { $eq: 'Narumugai'}});

// not equal operators
db.employees.find({ name: { $ne: "Narumugai"} });