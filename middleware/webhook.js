module.exports = (handler) => {
  return async ctx => {
    const { request, response } = ctx;
    handler(request, response, (err) => {
      response.statusCode = 404
      response.end('no such location')
    })
    await next;
  }
}
