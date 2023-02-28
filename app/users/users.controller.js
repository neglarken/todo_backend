import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";

//@desc register new user
//@route POST/api/users/
//@access Public
export const registerUser = asyncHandler(async (req, res) => {
    const { login, password } = req.body
    const users = await prisma.users.create({
        data: {
            login, password
        }
    })
    res.json(users)
})