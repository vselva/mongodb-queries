use crud

// Insert One document 
db.employees.insertOne({
    name: 'Bala',
    age: 24,
    email: 'bala@example.com',
    phone: '9876543210',
    designation: 'Software Trainier',
    isActive: true,
    address: {
        street: '12 Elm Street',
        city: 'Chennai',
        state: 'Tamil Nadu',
        pincode: '600001',
        country: 'India',
        landmark: 'Near Market'
    }
});

// find last inserted data 
db.employees.find().sort({_id: -1}).limit(1);

// insert many data 
db.employees.insertMany([
    {
        name: 'Arjun',
        age: 30,
        email: 'arjun.k@example.com',
        phone: '9123456789',
        designation: 'Senior Developer',
        isActive: false,
        address: {
            street: '45 Maple Avenue',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560001',
            country: 'India',
            landmark: 'Opposite Metro Station'
        }
    },
    {
        name: 'Divya',
        age: 28,
        email: 'divya.r@example.com',
        phone: '9988776655',
        designation: 'Project Manager',
        isActive: true,
        address: {
            street: '78 Rose Villa',
            city: 'Hyderabad',
            state: 'Telangana',
            pincode: '500081',
            country: 'India',
            landmark: 'Near Tech Park'
        }
    }
]);

// find last two inserted data 
db.employees.find().sort({_id: -1}).limit(2);