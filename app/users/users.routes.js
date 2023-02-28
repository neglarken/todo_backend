import express from 'express'
import { registerUser } from './users.controller.js'

const router = express.Router()

router.route('/').post(registerUser)

export default router