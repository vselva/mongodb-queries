use aggregate

db.products.aggregate([
    {
        $match: { category: "books" }
    },
    {
        $count: "stock"
    }
]);
