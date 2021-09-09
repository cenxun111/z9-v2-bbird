const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require("../middleware/auth");

router.post('/createnewsPost',auth,postCtrl.createNewsPost)

router.get('/post/:id',auth,postCtrl.singlePost)

router.get('/user_posts',auth,postCtrl.getUserPosts)

router.delete('/post/:id',auth,postCtrl.deletePost)

router.patch('/post/:id',auth,postCtrl.updatePost)

router.get('/userpost/:id',auth,postCtrl.allUsersPosts)

module.exports = router