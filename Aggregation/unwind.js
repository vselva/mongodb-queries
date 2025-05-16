// $unwind:
// The $unwind stage deconstructs an array field 
// from the input (user) documents to output a document 
// for each element of the array. 
// It is commonly used after $lookup to flatten the resulting array.

use aggregate

// Example: $lookup with $unwind
db.users.aggregate([
    {
        $lookup: {
            from: "profiles",               // the collection to join
            localField: "profile",          // field from the input documents (users)
            foreignField: "_id",            // field from the 'from' collection (profiles)
            as: "UserProfile"               // output array field
        }
    },
    {
        $unwind: "$UserProfile"             // flattens the UserProfile array into individual documents
    }
]);
