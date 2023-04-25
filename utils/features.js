import jwt from 'jsonwebtoken';

export const sendCookie = (user, res, msg, sCode = 200) => {
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)

    res
        .status(sCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 2 * 60 * 60 * 1000, // 2 hours
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true
        })
        .json({
            success: true,
            msg
        })
}