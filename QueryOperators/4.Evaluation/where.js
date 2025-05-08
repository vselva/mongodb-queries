// $where is a MongoDB query operator that allows you to use JavaScript expressions to filter documents.
use ecommerce

// get major (age > 18) customers
db.customers.find({ $where: "this.age > 18" }, { _id: 0, name: 1, age: 1, "address.city": 1 });

// get major (age > 18) customers from Chennai
db.customers.find({ $where: "this.age > 18 && this.address.city == 'Chennai'" }, { _id: 0, name: 1, age: 1, "address.city": 1 });

// javascript function with $where
db.customers.find({
    $where: function () {
      return this.age > 18 && this.name.startsWith("S");
    }
}, {
    _id: 0, name: 1, age: 1
});
