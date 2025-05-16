// switch to database office
use crud

// sort by name - ascedning 
db.employees.find().sort({name: 1});

// sorty by namd - descending
db.employees.find().sort({name: -1});

// sort by two fields - first by pincode then by name
db.employees.find({}, {"address.pincode": 1, name: 1, _id: 0}).sort({"address,pincode": 1, name: 1});

