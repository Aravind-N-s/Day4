const express = require ('express')
const router=express.Router()
const userController = require('../api/controllers/userController')

router.get('/', userController.list)
router.post('/add', userController.create)
router.put('/edit/:id', userController.update)
router.delete('/:id', userController.destroy)

router.get('/DOB', userController.getIfBday)
router.get("/full-name/:id", userController.getFullname);
module.exports = router