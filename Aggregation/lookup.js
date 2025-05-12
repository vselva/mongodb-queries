// $lookup:
// In aggregatin pipeline, the $lookup stage is used to perform a join between two collections.

use aggregate

// join $lookup
db.users.aggregate([
    {
        $lookup: {
            from: "profiles",
            localField: "profile",
            foreignField: "_id",
            as: "userProfile"
        }
    }
]);
