use ecommerce

// find customer starts with S
db.customers.find(
    { name: { $regex: "^S" } },     // Rejex - name that starts with 'S'
    { _id: 0, name: 1, email: 1 }   // Projection 
);

// ignore case sensitive with $options - find customers starts with A or a
db.customers.find(
    { name: { $regex: "^a", $options: 'i' } },  // Reject that starts with a or A
    { _id: 0, name: 1, email: 1 }               // Projection 
);

// regex with arrays - get products which has array tags which contains 'electronics'
db.products.find(
    { tags: {$regex: "electronics" } },  // tags that contain electronics
    { _id: 0, name: 1, tags: 1 }        // Projection 
).pretty();
