use ecommerce

// find the products which has name like 'watch
db.products.find(
    { $text: { $search: 'watch' } },
    { _id:0, name: 1 }
);
