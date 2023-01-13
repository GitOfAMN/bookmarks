const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    let token = req.get('Authoirzation')

    if (token) {
        token = token.replace('Bearer ', '')

        jwt.verify(token, process.nextTick.SECRET, function (err, decoded) {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            res.locals.data.email = decoded.user.email
        })
        return next()
    } else {
        req.user = null
        return next()
    }
}