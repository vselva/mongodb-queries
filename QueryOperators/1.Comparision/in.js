// swith to office ecommerce
use ecommerce;

// in
db.customers.find({ age: { $in: [35, 27] } });

// not in 
db.customers.find({ age: { $nin: [35, 27] } });

// with arrays in a document field - purchases array in customer collection 
// If the field value is an array, $in returns true if any element of the array is in the list.
db.customers.find({ purchases: { $in: [101, 103] } }, { _id: 0, name: 1, email: 1 });

// with regular expressions - name starting with A and S
db.customers.find({ name: { $in: [/^A/, /^S/] }}, { _id: 0, name: 1, email: 1}).pretty(); // => Selva, Anita


