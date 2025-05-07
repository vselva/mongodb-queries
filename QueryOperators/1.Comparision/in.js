// swith to office database
use office

// in
db.employees.find({ age: { $in: [8, 18, 19] } });

// not in 
db.employees.find({ age: { $nin: [8, 18, 19] } });

