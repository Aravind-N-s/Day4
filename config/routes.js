const express = require ('express')
const router=express.Router()
const userController = require('../api/controllers/userController')

router.get('/', userController.list)
router.post('/add', userController.create)
router.put('/edit/:id', userController.update)
router.delete('/:id', userController.destroy)

router.get('/firstName', userController.firstName)
router.get("/full-name/:id", userController.getFullname);

module.exports = router