const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/userCtrl")

router.get('/search',auth,userCtrl.searchUser)
router.get('/user/:id',auth,userCtrl.getSingleUser)
router.patch('/edituser',auth,userCtrl.updataUser)
router.get('/alluser',auth,userCtrl.getAlluser)

module.exports = router