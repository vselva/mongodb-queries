// Referencing is a method of normalizing data 
// by storing the reference (ObjectId) of one document inside another, 
// instead of embedding the entire document.
// 
// Related data is stored in separate collections and linked via an _id field.
//
// Use Referencing When:
// Related data grows large (to avoid document size limits).
// Related data is accessed independently or frequently updated.


use dataModelling 

// fetch existing values to update the relation field 
user1 = db.user.findOne({name: 'Selva'});
user2 = db.user.findOne({name: 'Narumugai'});

// Adding reference in relative field
db.user.updateOne(
    { name: 'Selva' },
    { $set: { relative: user2._id }}
);

// Adding reference in relative field
db.user.updateOne(
    { name: 'Narumugai' },
    { $set: { relative: user1._id }}
);

const aggregatedUsers = db.user.aggregate([
  {
    $lookup: {
      from: "user",
      localField: "relative",     // field in current doc
      foreignField: "_id",        // match with _id in "user"
      as: "relative_info"
    }
  },
  {
    $unwind: "$relative_info" // convert array to object
  },
  {
    $project: {
      name: 1,
      "relative_name": "$relative_info.name"
    }
  }
]);

console.log(aggregatedUsers);

db.user.find();