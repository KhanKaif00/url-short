import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config("./.env"); // Load environment variables from .env file
import connectDB from './src/config/mongo.config.js'; // agar connectDb function is in a different file, and have dafault export then u can import that function with any name
import short_url from './src/routes/short_url.route.js'; 
import auth_routes from './src/routes/auth.routes.js'; // Importing auth routes
import { redirectFromShortUrl } from './src/controllers/short_url.controller.js'; 
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from 'cors'; // Importing CORS middleware to handle cross-origin requests
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser'; // Importing cookie parser to handle cookies



app.use(express.json()); // This lets your app understand JSON data sent in the body of HTTP requests (like from a frontend or Postman).
app.use(express.urlencoded({ extended: true }));//✅ This lets your app understand form data (like from an HTML <form>).
// The extended: true means it can also handle nested objects.

app.use(cookieParser()); // This lets your app read cookies sent in HTTP requests, which is useful for things like authentication.
app.use(attachUser)

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use('/api/create',short_url)
app.use('/api/auth',auth_routes )
app.get('/:id',redirectFromShortUrl);

app.use(errorHandler)

app.listen(3000, () => {
  connectDB(); 
  console.log('Server is running on http://localhost:3000');
});

//GET - Ridirection
 