use performance

// run aggregate with merge
db.products.aggregate([
  { $group: { _id: "$category", total: { $sum: "$stock" } } },
  {
    $merge: {
      into: "stockTotal",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
]);
