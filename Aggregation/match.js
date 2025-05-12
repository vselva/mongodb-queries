// the $match stage in an aggregation pipeline.
// It is used to filter documents based on specific conditions, 
// similar to a find() query but within the aggregation framework
use aggregate

db.users.aggregate([
    {
        $match: {
            email: "john@example.com"
        }
    },
    {
        $lookup: {
            from: "profiles",
            localField: "profile",
            foreignField: "_id",
            as: "userProfile"
        }
    },
    {
        $unwind: "$userProfile"
    },
    {
        $project: {
            email: 1, 
            userProfile: 1
        }
    }
]);
