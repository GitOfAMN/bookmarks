const router = require('express').Router()
const userCtrl = require('../../controllers/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// /api/users
// SIGN UP
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

// /api/users/login
// LOG IN
router.post('/login', userCtrl.login, userCtrl.respondWithToken)

// /api/users/bookmkars
// GET BOOKMARKS BY USER
router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmkarsByUser, userCtrl.respondWithBookmarks)



module.exports = router