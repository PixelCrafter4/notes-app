const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

//Connect to database
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/notes', require('./routes/noteRoutes'));

//Test route
app.get('/', (req,res) => {
    res.send("API is running ....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));