// $elemMatch in projection is used to return only the first array element 
// that matches the specified query criteria, rather than the entire array.
use ecommerce

// find products that matches string Watch and 
// get the tags elements only that starts with "e"
db.products.find(
    { $text : {  $search: 'Watch' } },
    {_id: 0, name: 1, tags: { $elemMatch: { $regex: "^e"} } }
);
