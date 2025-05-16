// $facet is an aggregation stage 
// that allows you to run multiple aggregation pipelines 
// in parallel within a single stage. 
use aggregate

db.products.aggregate([
    {
        $facet: {
            totalProducts: [{ $count: "count" }],   // facet 1
            productsByCategory: [{                  // facet 2
                $group: {
                    _id: "$category",
                    // products: { $push: "$name" }
                }
             }]
        }
    }
]);