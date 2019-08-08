import { Controller } from 'egg';
export default class UserController extends Controller {
  public async signUp() {
    const { ctx, service } = this
    ctx.logger.info('ctx.request.body', ctx.request.body)
    const { userName, passWord, email } = ctx.request.body
    const result = await service.user.signUp(userName, passWord, email)
    ctx.body = result
  }
}