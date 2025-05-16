use performance

// Drop existing collections
db.users.drop();
db.profiles.drop();
db.products.drop();
db.orders.drop();

// created with $merge
db.stockTotal.drop();

// created with $out 
db.stockTotalOut.drop();

// Insert sample users
db.users.insertMany([
  {
    email: "john@example.com",
    password: "hashedpassword1", // assume hashed
    profile: ObjectId("605c72ef153207b6db4d1011"), // Reference to profile
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: "jane@example.com",
    password: "hashedpassword2", // assume hashed
    profile: ObjectId("605c72ef153207b6db4d1012"), // Reference to profile
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);


// Insert sample profiles
db.profiles.insertMany([
  {
    _id: ObjectId("605c72ef153207b6db4d1011"),
    name: "John Doe",
    phone: "1234567890",
    address: {
      street: "123 Elm St",
      city: "Metropolis",
      state: "NY",
      zip: "10001"
    }
  },
  {
    _id: ObjectId("605c72ef153207b6db4d1012"),
    name: "Jane Smith",
    phone: "9876543210",
    address: {
      street: "456 Oak Ave",
      city: "Gotham",
      state: "CA",
      zip: "90001"
    }
  }
]);

// Insert sample products
db.products.insertMany([
  {
    name: "T-Shirt",
    description: "Cotton t-shirt in various sizes",
    price: 19.99,
    stock: 100,
    category: "clothing",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Track Pant",
    description: "Cotton Track Pant in various sizes",
    price: 29.99,
    stock: 200,
    category: "clothing",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Book: Learn Node.js",
    description: "Beginner's guide to Node.js",
    price: 29.99,
    stock: 300,
    category: "books",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Book: Learn React",
    description: "Beginner's guide to React",
    price: 39.99,
    stock: 400,
    category: "books",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Book: Learn MongoDB",
    description: "Beginner's guide to MongoDB",
    price: 39.99,
    stock: 400,
    category: "books",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample orders
db.orders.insertMany([
  {
    customer: ObjectId("605c72ef153207b6db4d1011"), // Reference to customer
    products: [
      {
        product: ObjectId("605c72ef153207b6db4d1013"), // Reference to T-Shirt
        quantity: 2
      },
      {
        product: ObjectId("605c72ef153207b6db4d1014"), // Reference to Book
        quantity: 1
      }
    ],
    status: "pending",
    total: 69.97, // (2 * 19.99) + 29.99
    amountPaid: 69.97,
    orderDate: new Date()
  }
]);

