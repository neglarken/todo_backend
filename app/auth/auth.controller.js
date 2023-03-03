import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";
import { hash, verify } from "argon2";
import { generateToken } from './generateToken.js'


//@desc auth user
//@route POST/api/auth/login
//@access Public
export const authUser = asyncHandler(async (req, res) => {
    const { login, password } = req.body
    const user = await prisma.users.findUnique({
        where:{
            login
        }
    })

    const isValidPassword = await verify(user.password, password)

    if(user && isValidPassword){
        const token = generateToken(user.id)
        res.json({user, token})
    }else{
        res.status(401)
        throw new Error('email or password are not correct')
    }
})

//@desc register user
//@route POST/api/auth/register
//@access Public
export const regUser = asyncHandler(async (req, res) => {
    const { login, password } = req.body

    const isHaveUser = await prisma.users.findUnique({
        where: {
            login
        }
    })

    if (isHaveUser){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await prisma.users.create({
        data: {
            login, password: await hash(password)
        },
        select: {
            id: true,
            login: true
        }
    })

    const token = generateToken(user.id)

    res.json({user, token})
})