// switch to database office
use crud

///////////////////////////////////////
// delete one document 
db.employees.deleteOne({name: 'Narumugai'});
db.employees.findOne({name: 'Narumugai'});

///////////////////////////////////////
// writeConcern: { w: "majority" }
// w:0 => no acknowledgement (fire and forget)
// w:1 => acknowledged by primary (default)
// w:"mamority" => acknowledged by most replica set members (safe)
// wtimeout => timeout in ms for the write concern 
db.employees.deleteOne(
    {
        name: 'Selva'
    },
    {
        writeConcern: { w: "majority"}
    }   
);
db.employees.find({
    name: 'Selva'
});

///////////////////////////////////////
// delete all documents
db.employees.deleteMany({});
db.products.deleteMany({});
db.departments.deleteMany({});

db.employees.find();
db.products.find();
db.departments.find();
