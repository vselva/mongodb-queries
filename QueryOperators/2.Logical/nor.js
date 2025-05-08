// switch to ecommerce
use ecommerce

// nor = the state should not be Tamil Nadu and Karnataka
db.customers.find(
    { $nor: [ { "address.state": 'Tamil Nadu' }, { "address.state": 'Karnataka' } ] },
    { _id: 0 }
)