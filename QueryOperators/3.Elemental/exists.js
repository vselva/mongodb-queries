// switch to ecommerce database
use ecommerce

// get customers list which has the field 'additionalField'
db.customers.find(
    { additionafield: { $exists: true } },
    { _id: 0, name: 1, email: 1, additionafield: 1 }
).pretty();

// get customers list which does NOT have field 'additionalField'
db.customers.find(
    { additionafield: { $exists: false } },
    { _id: 0, name: 1, email: 1, additionafield: 1 }
);
