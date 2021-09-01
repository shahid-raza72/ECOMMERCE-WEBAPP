const mongoose = require('mongoose')

const connectdb =async()=>{
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_URL}`,{
            useUnifiedTopology:true,
            useNewUrlParser:true
    
        } )
        console.log(`Mongodb connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

module.exports=connectdb