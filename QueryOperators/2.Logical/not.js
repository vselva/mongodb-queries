// switch to ecommerce database
use ecommerce

// fetch rders whose email is not selva@example.com
db.orders.find(
    { customerEmail: { $not: { $eq: 'selva@example.com' } } },
    { _id: 0 }
);

// fetch customer whose name doesnot start with A
db.customers.find(
    { name: { $not: /^A/ } },
    { _id: 0 }
);
