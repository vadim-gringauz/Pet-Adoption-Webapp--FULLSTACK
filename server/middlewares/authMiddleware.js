const jwt = require('jsonwebtoken')
const logger = require('../utils/logger')

async function authMiddleware (req, res, next) {
  //
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log({ token })
    if (token == null) {
      logger('authMiddleware', 'no tokken')
      return res.sendStatus(401)
    }

    const tokenData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    if (!tokenData) {
      logger('authMiddleware', 'Tokken is no longer valid')
      res.sendStatus(403)
    }

    //! Token is valid
    req.currentUser = userData
    next()
  } catch (err) {
    //TODO complete msg
    return res.status(500).send()
  }
}

module.exports = authMiddleware
