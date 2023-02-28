import express from 'express'
import { changeTable, createTable, deleteTable, getTables } from './tables.controller.js'

const router = express.Router()

router.route('/').post(createTable)
router.route('/').put(changeTable)
router.route('/').delete(deleteTable)
router.route('/').get(getTables)

export default router