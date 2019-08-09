export default () => {
  return async function responseOk(ctx, next) {
    await next()
    ctx.logger.info('responseOk: %j', ctx.body);
  }
}