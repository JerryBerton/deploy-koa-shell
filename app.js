const Koa = require('koa');
const app = new Koa();
const createHandler = require('github-webhook-handler');
const handler = createHandler({ path: '/', secret: 'wjb-test' });
const webhook = require('./middleware/webhook');

app.use(webhook(handler));

app.use(ctx => {
  console.log(ctx)
  ctx.body = 'this is test'
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})
app.listen(4300, () => {
  console.log('=>>Service is running:4300  🌎')
})
