use index

// Sample Data
db.sampleData.insertMany([
    {
      _id: 1,
      name: "Alice",
      age: 29,
      email: "alice@example.com",
      tags: ["developer", "mongodb", "backend"],
      bio: "MongoDB enthusiast and full-stack developer.",
      location: { type: "Point", coordinates: [-73.97, 40.77] },
      loginAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      metadata: { os: "Linux", browser: "Chrome" },
      status: "active"
    },
    {
      _id: 2,
      name: "Bob",
      age: 35,
      email: "bob@example.com",
      tags: ["devops", "aws"],
      bio: "Works with cloud infrastructure and automation.",
      location: { type: "Point", coordinates: [-118.24, 34.05] },
      loginAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
      metadata: { os: "Windows", browser: "Firefox" },
      status: "inactive"
    },
    {
      _id: 3,
      name: "Charlie",
      age: 42,
      tags: ["manager", "mongodb"],
      bio: "Team lead with experience in project management.",
      location: { type: "Point", coordinates: [139.69, 35.68] },
      loginAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      metadata: { os: "macOS", browser: "Safari" },
      status: "active"
    }
  ]);

// Single Field Index
db.sampleData.createIndex({ name: 1});

// Compound Index
db.sampleData.createIndex({ age: 1, name: -1});

// Multikey Index
db.sampleData.createIndex({ tags: 1});

// Text Index
db.sampleData.createIndex({ bio: "text" });

// Hashed Index
db.sampleData.createIndex({ email: "hashed" });

// Geo Spatial Index
db.sampleData.createIndex({ location: "2dsphere" });

// Wildcard Indec
db.sampleData.createIndex({ "metadata.$**": 1 });

// Partial Index
db.sampleData.createIndex({ age: 1 }, { partialFilterExpression: { status: "active" } });

// Sparse Index
db.sampleData.createIndex({ email:1 }, { sparse: true });

// TTL - Time To Live - Index
db.sampleData.createIndex({ loginAt: 1 }, { expiresAfterSeconds: 86400 });
