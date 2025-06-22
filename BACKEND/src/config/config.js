export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'Strict', // Adjust as needed (Lax, Strict, None)
    maxAge:  100 * 60  *60, // 1 hour in milliseconds
};