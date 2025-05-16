use performance

// with explain("executionStats")
db.products.aggregate(
    [
        { $match: { category: { $in: [ "clothing", "books" ] } } },
        { $sort: { name: 1 } },
        { $group: { _id: "$category" } }
    ], { allowDiskUse: true }
).explain("executionStats");

