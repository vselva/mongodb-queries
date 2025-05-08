use ecommerce

// elemMatch: 
// to match documents that contain an array field 
// with at least one element that matches all the specified query criteria.

// List the customers which has purchases array 
// which has atleast a numbers greater than 105 and lesser than 108
db.customers.find(
    { 
        purchases: { 
            $elemMatch: { $gt: 105, $lt: 108 }
        }
    },
    { _id: 0, name: 1, age: 1, purchases: 1 }
);
