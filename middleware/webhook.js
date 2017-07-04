module.exports = (handler) => {
  return async (ctx, next) => {
    const { req, res } = ctx;
    handler(req, res, (err) => {
      res.statusCode = 404
      res.end('no such location')
    })
    await next();
  }
}
