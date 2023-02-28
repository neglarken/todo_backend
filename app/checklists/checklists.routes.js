import express from 'express'
import { changeChecklist, changeStatus, createChecklist, deleteChecklist, getChecklists } from './checklists.controller.js'

const router = express.Router()

router.route('/').post(createChecklist)
router.route('/').put(changeStatus)
router.route('/checklist').put(changeChecklist)
router.route('/').delete(deleteChecklist)
router.route('/').get(getChecklists)

export default router