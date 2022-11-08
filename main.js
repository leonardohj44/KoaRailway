const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World I\'m am Leonardo desde Railway';
});

const PORT = 5000;
app.listen(process.env.PORT || PORT,()=>console.log("run server " + PORT));