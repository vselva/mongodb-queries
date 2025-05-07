// show database list 
show databases;
show dbs;

// admin command approach
db.adminCommand('listDatabases');
db.adminCommand({ listDatabases: 1 });

// show collections
use office // go to a database 'office'
show collections;
