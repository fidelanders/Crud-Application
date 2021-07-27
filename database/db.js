const mongoose = require('mongoose');

function dbConfig(){
    try {
        mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        });

//test database connection
        console.log('"Database connected successfully...')
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=dbConfig;