// In MongoDB, the allowDiskUse option in the aggregate() method enables the server 
// to write data to temporary disk files if memory limits are exceeded 
// during the aggregation operation.

use performance

db.products.aggregate(
    [
        { $match: { category: { $in: [ "clothing", "books" ] } } },
        { $sort: { name: 1 } },
        { $group: { _id: "$category" } }
    ], { allowDiskUse: true }
);
