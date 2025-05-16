use performance

// with explain("allPlansExecution")
db.products.aggregate(
    [
        { $match: { category: { $in: [ "clothing", "books" ] } } },
        { $sort: { name: 1 } },
        { $group: { _id: "$category" } }
    ], { allowDiskUse: true }
).explain("allPlansExecution");
