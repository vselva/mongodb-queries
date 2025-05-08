// switch to database office
use office;

// insert one document to employees collection
db.employees.insertOne({
    name: 'Diana',
    age: 24,
    email: 'diana@example.com',
    phone: '9876543210',
    designation: 'Software Engineer',
    isActive: true,
    address: {
        street: '12 Elm Street',
        city: 'Marthandam',
        state: 'Tamil Nadu',
        pincode: '683672',
        country: 'UK',
        landmark: 'Near Church Road'
    }
});

// insert many documents to employees collection
db.employees.insertMany([
    {
        name: 'Selva',
        age: 30,
        email: 'selva@example.com',
        phone: '9876501123',
        designation: 'Tech Lead',
        isActive: true,
        address: {
            street: '101 Mount Road',
            city: 'Madras',
            state: 'Tamil Nadu',
            pincode: '600127',
            country: 'India',
            landmark: 'Opp to Metro Station'
        }
    },
    {
        name: 'Narumugai',
        age: 8,
        email: 'narumugai@example.com',
        phone: '9876500000',
        designation: 'Intern',
        isActive: false,
        address: {
            street: '3 Gandhi Street',
            city: 'Madras',
            state: 'Tamil Nadu',
            pincode: '600001',
            country: 'India',
            landmark: 'Near School'
        }
    },
    {
        name: 'Nasir',
        age: 40,
        email: 'nasir@example.com',
        phone: '9876599999',
        designation: 'Manager',
        isActive: true,
        address: {
            street: '56 LIC Colony',
            city: 'Madras',
            state: 'Tamil Nadu',
            pincode: '600001',
            country: 'India',
            landmark: 'Next to Bank'
        }
    },
    {
        name: 'Santhosh',
        age: 19,
        email: 'santhosh@example.com',
        phone: '9876512345',
        designation: 'Intern',
        isActive: false,
        address: {
            street: '10 Hill Road',
            city: 'Redhills',
            state: 'Tamil Nadu',
            pincode: '600052',
            country: 'India',
            landmark: 'Bus Depot'
        }
    },
    {
        name: 'Satheesh',
        age: 18,
        email: 'satheesh@example.com',
        phone: '9876523456',
        designation: 'Junior Developer',
        isActive: true,
        address: {
            street: '4 Railway Street',
            city: 'Guduvangery',
            state: 'Tamil Nadu',
            pincode: '600152',
            country: 'India',
            landmark: 'Opp Railway Station'
        }
    }
]);

// continue insert even if one fails
db.employees.insertMany([
    {
        name: 'Imran',
        age: 34,
        email: 'imran@example.com',
        phone: '9876534567',
        designation: 'Senior Developer',
        isActive: true,
        address: {
            street: '45 Banjara Hills',
            city: 'Hyderabad',
            state: 'Telangana',
            pincode: '500001',
            country: 'India',
            landmark: 'Near Masjid'
        }
    },
    {
        name: 'Udaya',
        age: 28,
        email: 'udaya@example.com',
        phone: '9876545678',
        designation: 'QA Engineer',
        isActive: true,
        address: {
            street: '99 Beach Road',
            city: 'Vizag',
            state: 'Andhra Pradesh',
            pincode: '501206',
            country: 'India',
            landmark: 'Opp Lighthouse'
        }
    }
], { ordered: false });

// show all inserted documents
db.employees.find().pretty();
