// switch to ecommerce database
use ecommerce

// Customers - Minor Or From Chennai
db.customers.find(
    { $or: [ { age: { $lt: 18 } }, { "address.city": 'Chennai' } ] },
    { _id: 0 }
)