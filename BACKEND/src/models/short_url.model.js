import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        index: true,//When you set index: true, you're telling MongoDB:
//"I will often search or look up by this field, so please optimize it for speed."
        unique: true, 
    },
    clicks: {
        type: Number,
        default: 0,
    },
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model

     }

})

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;