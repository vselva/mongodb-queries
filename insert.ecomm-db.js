// Switch to ecommerce database
use ecommerce;

// Drop collections if they exist
db.customers.drop();
db.products.drop();
db.orders.drop();

// Insert 5 customers
db.customers.insertMany([
    {
        name: 'Selvakumar',
        email: 'selva@example.com',
        phone: '9876501123',
        isActive: true,
        age: 35,
        address: {
            street: '101 Mount Road',
            city: 'Chennai',
            state: 'Tamil Nadu',
            pincode: '600127',
            country: 'India'
        },
        purchases: [101, 102] // Array of product IDs
    },
    {
        name: 'Diana',
        email: 'diana@example.com',
        phone: '9876543210',
        isActive: true,
        age: 27,
        address: {
            street: '12 Elm Street',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560001',
            country: 'India'
        },
        purchases: [103, 104] // Array of product IDs
    },
    {
        name: 'Ravi',
        email: 'ravi@example.com',
        phone: '9876512345',
        isActive: false,
        age: 15,
        address: {
            street: '5 Gandhi Street',
            city: 'Madurai',
            state: 'Tamil Nadu',
            pincode: '625001',
            country: 'India'
        },
        purchases: [105] // Array of product IDs
    },
    {
        name: 'Anita',
        email: 'anita@example.com',
        phone: '9876523456',
        isActive: true,
        age: 63,
        address: {
            street: '78 Lake View Road',
            city: 'Coimbatore',
            state: 'Tamil Nadu',
            pincode: '641001',
            country: 'India'
        },
        purchases: [106] // Array of product IDs
    },
    {
        name: 'Imran',
        email: 'imran@example.com',
        phone: '9876534567',
        isActive: true,
        age: 42,
        address: {
            street: '99 Beach Road',
            city: 'Hyderabad',
            state: 'Telangana',
            pincode: '500001',
            country: 'India'
        },
        purchases: [107, 108] // Array of product IDs
    }
]);


// Insert 5 products
db.products.insertMany([
    { name: 'Wireless Mouse', price: 1299, inStock: true },
    { name: 'Bluetooth Headphones', price: 4999, inStock: true },
    { name: 'Cotton T-Shirt', price: 799, inStock: false },
    { name: 'Smart Watch', price: 9999, inStock: true },
    { name: 'Laptop Sleeve', price: 599, inStock: true }
]);

// Insert 5 orders
db.orders.insertMany([
    { customerEmail: 'selva@example.com', productName: 'Wireless Mouse', quantity: 1, orderDate: new Date('2024-08-01'), status: 'shipped' },
    { customerEmail: 'diana@example.com', productName: 'Bluetooth Headphones', quantity: 2, orderDate: new Date('2024-08-03'), status: 'processing' },
    { customerEmail: 'ravi@example.com', productName: 'Cotton T-Shirt', quantity: 3, orderDate: new Date('2024-08-05'), status: 'cancelled' },
    { customerEmail: 'anita@example.com', productName: 'Smart Watch', quantity: 1, orderDate: new Date('2024-08-07'), status: 'delivered' },
    { customerEmail: 'imran@example.com', productName: 'Laptop Sleeve', quantity: 2, orderDate: new Date('2024-08-09'), status: 'shipped' }
]);

// Optional: Show all collections
show collections;
