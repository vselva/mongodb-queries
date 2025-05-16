
use aggregate

// $group
const group = db.products.aggregate([
    {
        $group: {
            _id: "$category" // grouping key 
        }
    }
]);

console.log(group);

// $sum -- accumulator to sum 
db.products.aggregate([
    {
        $group: {
            _id: "$category", 
            totalStock: { $sum: "$stock" }
        }
    }
]);

// $avg -- accumular to avg
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            average: { $avg: "$stock" }
        }
    }
]);


// $max -- accumular to find max
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            average: { $max: "$stock" }
        }
    }
]);

// $min -- accumular to find min
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            average: { $min: "$stock" }
        }
    }
]);

// $first -- accumular to find first
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            first: { $first: "$stock" }
        }
    }
]);

// $last -- accumular to find last
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            last: { $last: "$stock" }
        }
    }
]);

// $push -- accumulator to add items, but not unique
console.log('===== push =====');
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            stocksInEachCategory: { $push: "$stock" }
        }
    }
]);

// $addToSet -- accumulator to add items but unique
console.log('===== addToSet =====');
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            stocksInEachCategory: { $addToSet: "$stock" }
        }
    }
]);
