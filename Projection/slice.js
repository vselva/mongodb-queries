// How would you return only the first 3 elements of an array in a document using projection?

// switch to the database office
use office

db.users.insertMany(
    [
        {
            name: 'Selva',
            hobbies: ['Meditation', 'Cricket', 'Cleaning', 'Riding']
        },
        {
            name: 'Diana',
            hobbies: ['Counselling', 'TV', 'Reading', 'Musing']
        }
    ]
);

// Without $slice => shows all hobbies
db.users.find({}, {_id: 0, name: 1, hobbies: 1});

// With $slice => shows only first 2 hobbies
db.users.find({}, {_id: 0, name: 1, hobbies: { $slice: 2}});

// finally delete users
db.users.deleteMany({});
