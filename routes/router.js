const express=require('express')
const router=express.Router()

/*importing module */
const userController=require('../controllers/userController')

const {userAuthentication}=require('../middleWare/authentication')

/**unprotected & protected order API's */
router.post('/register', userController.createUser)
router.post('/login', userController.userLogin)
router.get('/user/profile/:userId', userAuthentication,userController.getUserDetails)
router.put('/user/profile/:userId',userAuthentication, userController.updateUserDetails)
router.delete('/user/profile/:userId',userAuthentication,userController.deleteUser)
module.exports=router