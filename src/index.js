var Koa = require('koa');

var app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(function(ctx, next){
  ctx.body = 'Hello from Koa';
});

app.listen(process.env.PORT);