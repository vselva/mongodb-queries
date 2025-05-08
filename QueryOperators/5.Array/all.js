use ecommerce

// get products which has all the tags mentioned
db.products.find(
    { tags: { $all: ['electronics', 'accessory', 'wireless' ] } },
    { _id: 0, name: 1, price: 1, tags: 1}
);

// same with regular expression - tags starts with e, a and w
db.products.find(
    { tags: { $all: [ /^e/, /^a/, /^w/ ] } },
    { _id: 0, name: 1, price: 1, tags: 1 }
);

