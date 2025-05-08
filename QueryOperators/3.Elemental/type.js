// switch to database ecommerce
use ecommerce

// age field type is int
db.customers.find(
    { age: { $type: "int" } },
    { _id: 0, name: 1, email: 1, age: 1}
);

// age field type is string
db.customers.find(
    { age: { $type: "string" } },
    { _id: 0, name: 1, email: 1, age: 1}
);

// age field type is string or int
db.customers.find(
    { age: { $type: [ "int", "string" ] } },
    { _id: 0, name: 1, age: 1}
);

/* 
Some common type aliases used with $type:

Alias	    BSON Type Number	Description
"double"	1	                64-bit floating point
"string"	2	                UTF-8 string
"object"	3	                Embedded document
"array"	    4	                Array
"binData"	5	                Binary data
"bool"	    8	                Boolean
"date"	    9	                Date
"int"	    16	                32-bit integer
"long"	    18	                64-bit integer
*/