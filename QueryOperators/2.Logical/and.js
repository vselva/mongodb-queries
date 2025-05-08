
// switch to database ecommerce
use ecommerce

// products - in stock && price < 5000 => Explicit $and
db.products.find(
    {
        $and: [{
                price: { $lt: 1500}, 
                inStock: true
        }]
    }, 
    { _id: 0 }
);

// equals to the below query => Implicit $and
db.products.find({ price: { $lt: 1500 }, inStock: true }, { _id: 0 });

