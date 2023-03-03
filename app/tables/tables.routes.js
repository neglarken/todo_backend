import express from 'express'
import { changeTable, createTable, deleteTable, getTables } from './tables.controller.js'
import {protect} from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/').post(protect, createTable)
router.route('/').put(protect, changeTable)
router.route('/').delete(protect, deleteTable)
router.route('/').get(protect, getTables)

export default router