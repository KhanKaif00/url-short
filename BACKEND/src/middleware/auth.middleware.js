// ye check karega koi bhi request aane se pehle ki user authenticated hai ya nahi

import { findUserById } from "../dao/user.dao";
import { verifyToken } from "../utils/helper";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accesToken;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = verifyToken(token); // token ko verify karte hain
        const user = await findUserById(decoded.id); // user ko database se dhoondte hain
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user; // agar user mil gaya to request object me user ko set karte hain
        next(); // agar sab kuch sahi hai to next middleware ya route handler ko call karte hain
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}