const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado con éxito");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connect;