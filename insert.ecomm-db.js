// Switch to ecommerce database
use ecommerce;

// Drop collections if they exist
db.customers.drop();
db.products.drop();
db.orders.drop();

// Insert 5 customers
db.customers.insertMany([
    { name: 'Selvakumar', email: 'selva@example.com', phone: '9876501123', isActive: true },
    { name: 'Diana', email: 'diana@example.com', phone: '9876543210', isActive: true },
    { name: 'Ravi', email: 'ravi@example.com', phone: '9876512345', isActive: false },
    { name: 'Anita', email: 'anita@example.com', phone: '9876523456', isActive: true },
    { name: 'Imran', email: 'imran@example.com', phone: '9876534567', isActive: true }
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
