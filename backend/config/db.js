const mongoose = require('mongoose');


const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('MongoDB connected');
    }   catch(error){
            console.error('Error connecting to MongoDB:', error.message);
            process.exit(1); //Exit process if connection fails
                    }
                            };

    module.exports = connectDB;