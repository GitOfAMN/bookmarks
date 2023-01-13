require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const bcrypt = require('bcrypt')



const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).split('').reverse().join('')
        const match = await bcrypt.compare(password, user.password)
        if (!match) throw new Error('Passwords did not match')
        res.locals.data.user = user
        res.locals.data.token = createJWT(user)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getBookmarksByUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate('bookmarks').sort('bookmarks.createAt').exec()
        const bookmarks = user.bookmarks
        res.locals.data.bookmarks =  bookmarks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithToken = (req, res, next) => {
    res.json(res.locals.data.token)
}

const respondWithUSer = (req, res) => {
    res.json(res.locals.data.user)
}

const respondWithBookmarks = (req, res) => {
    res.json(res.locals.data.bookmkars)
}

module.exports = {
    signUp,
    login,
    getBookmarksByUser,
    respondWithToken,
    respondWithBookmarks,
    respondWithUSer
}






// Helper function
function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
}