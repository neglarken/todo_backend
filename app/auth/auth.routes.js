import express from 'express'
import { authUser, regUser } from './auth.controller.js'

const router = express.Router()

router.route('/login').post(authUser)
router.route('/register').post(regUser)

export default router