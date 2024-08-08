const mongoose = require('mongoose');
// QY8H9DbTrRmCeDOS

const db = async() => {
    //fixed the db connection issue by allowing access from all ports
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    }catch(error){
        console.log('DB CONNECTION ERROR !');
    }
}

module.exports = {db};