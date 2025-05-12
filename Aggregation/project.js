/*
$project is a stage in the aggregation pipeline used to:
- Include or exclude fields
- Rename fields
- Create computed fields
- Reshape documents

It controls which fields appear in the output and how they are formatted
*/
use aggregate

db.users.aggregate([
    {
        $lookup: {
            from: "profiles",
            localField: "profile",
            foreignField: "_id",
            as: "UserProfile"
        }
    },
    {
        $unwind: "$UserProfile"
    },
    {
        $project: {
            _id: 1,                              
            email: 1,                           
            "UserProfile.name": 1,              
            "UserProfile.phone": 1,              
            "UserProfile.address": 1,            // include the full 'address' object from UserProfile
            city: "$UserProfile.address.city",   // extract the 'city' field from the nested address object
            zip: "$UserProfile.address.zip"      // extract the 'zip' field from the nested address object
        }
    }
]);
