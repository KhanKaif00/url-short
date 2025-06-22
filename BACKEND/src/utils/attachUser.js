import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.accesToken;

    if (!token) {
        return next();
    }

    try {
        const decoded = verifyToken(token); // token ko verify karte hain
        const user = await findUserById(decoded); // user ko database se dhoondte hain
        if (!user) {
            return next();
        }
        req.user = user; // agar user mil gaya to request object me user ko set karte hain
        next(); // agar sab kuch sahi hai to next middleware ya route handler ko call karte hain
    } catch (error) {   
        return next();
    }
}   