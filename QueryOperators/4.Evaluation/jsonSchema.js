// switch to ecommerce database
use ecommerce

// jsonSchema
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email"],

            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    pattern: "^.+@.+$",
                    description: "must be a valid email and is required"
                },
                age: {
                    bsonType: "int",
                    minimum: 18,
                    description: "must be at least 18 if provided"
                }
            }
        }
    }
});
