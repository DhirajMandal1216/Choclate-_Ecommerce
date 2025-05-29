import express from 'express'

import newUser from '../Controllers/userController.js'

const router=express.Router()

// router.get('/userRegister',newUser)
router.post('/userRegister',newUser)

export default router