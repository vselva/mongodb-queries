use performance

// run aggregate with merge
db.products.aggregate([
  { $group: { _id: "$category", total: { $sum: "$stock" } } },
  {
    $out: "stockTotalOut"
  }
]);

// find the stockTotalOut collection 
db.stockTotalOut.find().pretty();
