// switch to database ecommerce
use ecommerce

// find orders where amountPaid is greater than amountDue
db.orders.find(
    { $expr: { $gt: [ "$amountPaid", "$amountDue" ] } },
    { _id: 0, customerEmail: 1, productName: 1, amountPaid: 1, amountDue: 1     }
);

