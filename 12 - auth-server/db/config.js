const { mongoose } = require("mongoose");

const dbConnection = async() => {
    
try{

   await mongoose.connect(process.env.BD_CNN);

    console.log('OK Base de datos');
}catch(error){
console.log(error);
throw new Error('Error Base de datos');
}
    
}

module.exports = {
    dbConnection
}