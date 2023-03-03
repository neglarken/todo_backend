import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma.js";

export const protect = asyncHandler(async(req, res, next) => {
    let token

    if(req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
        
        const userFound = await prisma.users.findUnique({
            where:{
                id: decoded.usersId
            }
        })

        if(userFound){
            req.user = userFound
            next()
        }else{
            res.status(401)
            throw new Error('not authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('no token')
    }

})