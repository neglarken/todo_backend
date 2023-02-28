import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";

//@desc create new table
//@route POST/api/tables/
//@access Public
export const createTable = asyncHandler(async (req, res) => {
    const {users_id, title, description} = req.body
    const table = await prisma.tables.create({
        data: {
            users_id, title, description
        }
    })
    res.json(table)
})

//@desc change table
//@route PUT/api/tables/
//@access Public
export const changeTable = asyncHandler(async (req, res) => {
    const {id, title, description} = req.body
    const table = await prisma.tables.update({
        where: {
            id
        },
        data: {
            title, description
        }
    })
    res.json(table)
})

//@desc delete table
//@route DELETE/api/tables/
//@access Public
export const deleteTable = asyncHandler(async (req, res) => {
    const {id} = req.body
    const table = await prisma.tables.delete({
        where: {
            id
        }
    })
    res.json(table)
})

//@desc get tables
//@route GET/api/tables/
//@access Public
export const getTables = asyncHandler(async (req, res) => {
    const {users_id} = req.body
    const table = await prisma.tables.findMany({
        where: {
            users_id
        }
    })
    res.json(table)
})