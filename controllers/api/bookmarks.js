require('dotenv').config()
const Bookmark = require('../../models/bookmark')
const User = require('../../models/user')

// delete bookmark
// create bookmark
// update bookmark

const destroyBookmark = async (req, res, next) => {
    try {
        const deltedBookmark = await Bookmark.findByIdAndDelete(req.prams.id)
        res.locals.data.bookmark = deletedBookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateBookmark = async (req, res, next) => {
    try {
        const updatedBookmark = await Bookmark.findByIdAndUpdate(req.prams.id, req,body, { new: true })
        res.locals.data.bookmark = updatedBookmark
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createBookmark = async (req, res, next) => {
    try {
        const cratedBookmkark = await Bookmark.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email })
        user.bookmarks.addToSet(createdBookmark)
        user.save()
        res.locals.data.bookmark = createdBookmark
    } catch (error) {
res.status(400).json({ msg: error.message })
    }
}

const respondWithBookmark = (req, res) => {
    res.json(res.locals.data.bookmark)
}

module.exports = {
    destroyBookmark,
    updateBookmark,
    createBookmark,
    respondWithBookmark
}