import { Controller } from 'egg'
export default class UserController extends Controller {
  public async signUp() {
    const { ctx, service } = this
    const { userName, passWord, email } = ctx.request.body
    this.ctx.logger.info('session:', ctx.session)
    const result = await service.user.signUp(userName, passWord, email)
    ctx.body = result
  }
  // public async signIn() {
  //   const { ctx, Service } = this
  //   const { userName, passWord, email } = ctx.request.body
  //   const result = await this.service.user.signIn(userName, passWord, email)
  //   ctx.body = result
  // }
}