const {Router} = require('express')
const {registerUser,loginUser,dashboard} = require('../controllers/userControllers')
const router = Router();
router.post('/register',registerUser);
router.post('/login',loginUser)
router.get('/:id',dashboard)

module.exports = router;