// switch to database office
use office

// show only first 2 entries from employees table
db.employees.find({}).limit(2);

// skip first 2 entries from employess table
db.employees.find({}).skip(2);

// paginate results using skip() and limit() - 5th page & page entries are 5
db.employees.find().skip((2 - 1) * 5).limit(2);
