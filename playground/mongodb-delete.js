// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({completed:true}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    db.collection('Todos').deleteOne({name:"Anusha"}).then((result) => {
      console.log(result);
    });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({text:"cosmos"});

    // db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectID("59f3c459c4494f2826aefb18")
    // }).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

    // db.close();
});
