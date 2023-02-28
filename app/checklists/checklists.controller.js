import { prisma } from "../prisma.js";
import asyncHandler from "express-async-handler";

//@desc create new checklist
//@route POST/api/tables/checklists/
//@access Public
export const createChecklist = asyncHandler(async (req, res) => {
    const { tables_id, title, description } = req.body
    const checklist = await prisma.checklists.create({
        data: {
            tables_id, title, description
        }
    })
    res.json(checklist)
})

//@desc change checklist status
//@route PUT/api/tables/checklists/
//@access Public
export const changeStatus = asyncHandler(async (req, res) => {
    const { id, status } = req.body
    const checklist = await prisma.checklists.update({
        where:{
            id
        },
        data: {
            status
        }
    })
    res.json(checklist)
})

//@desc change checklist
//@route PUT/api/tables/checklists/checklist
//@access Public
export const changeChecklist = asyncHandler(async (req, res) => {
    const { id, title, description, status } = req.body
    const checklist = await prisma.checklists.update({
        where:{
            id
        },
        data: {
            title, description, status
        }
    })
    res.json(checklist)
})

//@desc delete checklist
//@route DELETE/api/tables/checklists/
//@access Public
export const deleteChecklist = asyncHandler(async (req, res) => {
    const { id } = req.body
    const checklist = await prisma.checklists.delete({
        where:{
            id
        }
    })
    res.json(checklist)
})

//@desc get checklists by table id
//@route GET/api/tables/checklists/
//@access Public
export const getChecklists = asyncHandler(async (req, res) => {
    const { tables_id } = req.body
    const checklist = await prisma.checklists.findMany({
        where:{
            tables_id
        }
    })
    res.json(checklist)
})