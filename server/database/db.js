import mongoose from 'mongoose';

const DBConnection = async () =>{
    const MONODB_URI=`mongodb://user:Archita19@file-share-shard-00-00.fdgjf.mongodb.net:27017,file-share-shard-00-01.fdgjf.mongodb.net:27017,file-share-shard-00-02.fdgjf.mongodb.net:27017/?ssl=true&replicaSet=atlas-8ls5cl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-share`;
    try{
        await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
        console.log('Database connected succesfully');
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;

