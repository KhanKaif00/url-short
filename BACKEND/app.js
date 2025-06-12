import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config("./.env"); // Load environment variables from .env file
import connectDB from './src/config/mongo.config.js'; // agar connectDb function is in a different file, and have dafault export then u can import that function with any name
import short_url from './src/routes/short_url.route.js'; 
import { redirectFromShortUrl } from './src/controllers/short_url.controller.js'; 
import { errorHandler } from "./src/utils/errorHandler.js";

app.use(express.json()); // This lets your app understand JSON data sent in the body of HTTP requests (like from a frontend or Postman).
app.use(express.urlencoded({ extended: true }));//✅ This lets your app understand form data (like from an HTML <form>).
// The extended: true means it can also handle nested objects.

app.use('/api/create',short_url)

app.get('/:id',redirectFromShortUrl);

app.use(errorHandler)

app.listen(3000, () => {
  connectDB(); 
  console.log('Server is running on http://localhost:3000');
});

//GET - Ridirection
 