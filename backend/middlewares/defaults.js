module.exports = function(req, res, next) {
  if (!req.body) {
    req.body = {}
  }
  else if (typeof req.body === 'string') {
    try {
      req.body = JSON.parse(req.body)
    }
    catch (e) {
      
    }
  }
  if (!req.params) {
    req.params = {}
  }

  res.setHeader('wotm', JSON.stringify(global['WagoOfTheMoment'] || {}))
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
}