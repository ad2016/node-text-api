
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {

    if(err){
        return console.log('Unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');



    // db.collection('Todos').find({
    //     _id : new ObjectID('59dffa2cc4494f2826aec4bd')}).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //
    // },(err)=>{
    //     console.log('Unable to fetch the Error', err);
    // }
    //
    // );


    // db.collection('Todos').find().count().then((count)=> {
    //         console.log(`Todos count: ${count}`);
    //     },(err)=>{
    //         console.log('Unable to fetch the Error', err);
    //     }
    //
    // );

    db.collection('Users').find({name: 'Anusha'}).count().then((count)=> {
            console.log(`Todos count: ${count}`);
        },(err)=>{
            console.log('Unable to fetch the Error', err);
        }

    );
    //db.close();

});