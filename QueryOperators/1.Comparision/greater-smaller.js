// switch to database company 
use office

// age greater than 18
db.employees.find({ age: { $gt: 18} });

// age greater than and equal to 18
db.employees.find({ age: { $gte: 18 } });

// age lesster than 18
db.employees.find({ age: { $lt: 18 } });

// age lesser than and equal to 18
db.employees.find({ age: { $lte: 18 } });
