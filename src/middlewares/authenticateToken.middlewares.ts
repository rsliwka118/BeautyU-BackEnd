import * as jwt from "jsonwebtoken"

export default async function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]

  //empty token
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    
    //token no longer valid
    if (err) return res.sendStatus(403)

    req.user = user
    next()
 })
}
